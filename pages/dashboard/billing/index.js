import Image from 'next/image';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import OnboardingButton from '../../../components/Onboarding/button';
import PageTitle from '../../../components/SEO/PageTitle';
import Stripe from '../../../public/img/icons/stripe.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePlans from '../../../hooks/usePlans';
import { getBillingHistory, getPlans } from '../../../services/apis';
import { SUBSCRIPTION_PLANS_DESC } from '../../../constants/constants';
import DashboardPlans from '../../../components/dashboard/DashboardPlans';
import ErrorHandler from '../../../utils/errorHandler';
import { setBillingHistory } from '../../../store/reducers/billing.reducer';
import Modal from '../../../components/UI/Modal';

export const getStaticProps = async () => {
  try {
    const plans = await getPlans();
    const plansJSON = JSON.stringify(plans);
    return {
      props: {
        plans: plansJSON,
      },
      revalidate: 60, // re-generate page every 60 seconds (if necessary)
    };
  } catch (error) {
    return { props: { plans: {} } };
  }
};

const Billing = ({ plans }) => {
  usePlans(JSON.parse(plans));
  const { user, billing } = useSelector((state) => state);
  const allPlans = useSelector((state) => state.aview.allPlans);
  const dispatch = useDispatch();
  const [modal, showModal] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const billing = await getBillingHistory();
        dispatch(setBillingHistory(billing));
      } catch (error) {
        ErrorHandler(error);
      }
    })();
  }, []);

  const newPlans = SUBSCRIPTION_PLANS_DESC.map((plan, i) => ({
    ...allPlans[i],
    ...plan,
  }));

  const closeModal = () => showModal(false);
  const openModal = () => showModal(true);

  return (
    <>
      <div className="mx-auto mt-5">
        <PageTitle title="Billing" />
        {modal && (
          <Modal closeModal={closeModal}>
            <DashboardPlans plans={newPlans} user={user} />
          </Modal>
        )}
        <BillingDetails user={user} openModal={openModal} />
        <Transactions billing={billing} />
      </div>
    </>
  );
};

Billing.getLayout = DashboardLayout;

export default Billing;

const BillingDetails = ({ user, openModal }) => {
  return (
    <div className="text-white">
      <h2 className="mb-4 text-4xl font-bold">
        Current Plan : {user.plan ?? 'Studio Starter'}
      </h2>
      <div className="gradient-dark flex items-center justify-between rounded-2xl p-6">
        <div className="flex items-center">
          <p className="text-2xl font-bold">Payment Partner :</p>
          <div className="ml-s3">
            <Image src={Stripe} alt="Stripe" width={60} height={35} />
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-2xl capitalize"></span>
          <div className="w-60">
            <OnboardingButton onClick={openModal}>
              Manage subscription
            </OnboardingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Transactions = ({ billing }) => {
  return (
    <div className="mt-s4 text-white">
      <h3 className="mb-s2 text-2xl font-bold">Transactions</h3>
      <div className="gradient-dark rounded-2xl p-s3">
        {billing.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.15)] text-center text-xl">
                <th className="pb-s2">Date</th>
                <th className="pb-s2">Service(s)</th>
                <th className="pb-s2">Amount(USD)</th>
              </tr>
            </thead>
            <tbody>
              {billing.map((data, index) => (
                <tr className="mt-s2 text-center text-lg" key={`row-${index}`}>
                  <td className="py-s3">
                    {new Date(data.created * 1000).toLocaleString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour12: true,
                    })}
                  </td>
                  <td className="py-s3">{data.plan.amount / 100}</td>
                  <td className="py-s3">${data.plan.amount / 100}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="my-s2 text-center text-xl">
            No transaction record available
          </p>
        )}
      </div>
    </div>
  );
};
