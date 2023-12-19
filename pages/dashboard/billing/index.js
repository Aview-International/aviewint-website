import Image from 'next/image';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import OnboardingButton from '../../../components/Onboarding/button';
import PageTitle from '../../../components/SEO/PageTitle';
import Blobs from '../../../components/UI/Blobs';
import Stripe from '../../../public/img/icons/stripe.svg';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import axios from 'axios';
import { getAllPayments } from '../../api/firebase';
import { useSelector } from 'react-redux';
import usePlans from '../../../hooks/usePlans';

export const getStaticProps = async () => {
  try {
    const plans = await getPlans();
    return {
      props: {
        plans: JSON.stringify(plans),
      },
      revalidate: 60, // re-generate page every 60 seconds (if necessary)
    };
  } catch (error) {
    return { props: {} };
  }
};

const Billing = ({ plans }) => {
  usePlans(JSON.parse(plans));
  const userInfo = useSelector((state) => state.user);
  const [payments, setPayments] = useState([]);
  const [reloadTrigger, setReloadTrigger] = useState(0);

  const getAdminAccount = async (id) => {
    const res = await getAllPayments(id);
    setPayments(res ? Object.values(res) : []);
  };

  const router = useRouter();
  const handlePaymentCallback = () => {
    switch (router.query['payment']) {
      case 'canceled':
        toast.error('Failed Payment, please try again');
        break;
      case 'success':
        toast.success('Payment successful, You rock 🔥');
        handleSucess();
        break;
      default:
        break;
    }
  };
  const handleSucess = () => {
    axios.post('/api/checkout_sessions/checkout', {
      _id: userInfo._id,
      services: ['Translations, Dubbing'],
      charge: userInfo.charge,
      wordCount: 1000,
      email: userInfo.email,
    });
  };

  useEffect(() => {
    handlePaymentCallback();
  }, []);

  useEffect(() => {
    if (userInfo._id) getAdminAccount(userInfo._id);
  }, [userInfo._id, reloadTrigger]);

  return (
    <>
      <div className="mx-auto mt-5">
        <PageTitle title="Billing" />
        <BillingDetails userInfo={userInfo} />
        <Transactions payments={payments} />
        <Blobs />
      </div>
    </>
  );
};

Billing.getLayout = DashboardLayout;

export default Billing;

const BillingDetails = ({ userInfo }) => {
  return (
    <div className="text-white">
      <h2 className="mb-4 text-4xl font-bold">Billing Details</h2>
      <div className="gradient-dark flex items-center justify-between rounded-2xl p-6">
        <div className="flex items-center">
          <p className="text-2xl font-bold">Payment Partner :</p>
          <div className="ml-s3">
            <Image src={Stripe} alt="Stripe" width={60} height={35} />
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-2xl">Current Bill : $0</span>
          <div className="pl-s3">
            <form action="/api/checkout_sessions" method="POST">
              <input type="hidden" value={userInfo.email} name="email" />
              <input type="hidden" value={userInfo._id} name="_id" />
              <input
                type="hidden"
                value={userInfo.charge ?? 12}
                name="charge"
              />
              <input type="hidden" value={1000} name="quantity" />
              <OnboardingButton disabled>Pay Now</OnboardingButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Transactions = ({ payments }) => {
  return (
    <div className="mt-s4 text-white">
      <h3 className="mb-s2 text-2xl font-bold">Transactions</h3>
      <div className="gradient-dark rounded-2xl p-s3">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.15)] text-center text-xl">
              <th className="pb-s2">Date</th>
              <th className="pb-s2">Time</th>
              <th className="pb-s2">Service(s)</th>
              <th className="pb-s2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 &&
              payments.map((data, index) => (
                <tr className="mt-s2 text-center text-lg" key={`row-${index}`}>
                  <td className="py-s3">{data.date}</td>
                  <td className="py-s3">{data.time}</td>
                  <td className="py-s3">{data.services}</td>
                  <td className="py-s3">${data.amount}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <p className="my-s2 text-center text-xl">
          No transaction record available
        </p>
      </div>
    </div>
  );
};
