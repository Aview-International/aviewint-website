import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import OnboardingButton from '../../../components/Onboarding/button';
import PageTitle from '../../../components/SEO/PageTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePlans from '../../../hooks/usePlans';
import {
  createCheckoutSesion,
  getBillingHistory,
  getPlans,
} from '../../../services/apis';
import { SUBSCRIPTION_PLANS_DESC } from '../../../constants/constants';
import DashboardPlans from '../../../components/dashboard/DashboardPlans';
import ErrorHandler from '../../../utils/errorHandler';
import { setBillingHistory } from '../../../store/reducers/billing.reducer';
import Modal from '../../../components/UI/Modal';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../../components/FormComponents/PaymentForm';
import { stripeAppearance, stripePromise } from '../../../utils/stripe';

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
  const [buttonId, setButtonId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const { user, billing } = useSelector((state) => state);
  const allPlans = useSelector((state) => state.aview.allPlans);
  const dispatch = useDispatch();
  const [modal, setModal] = useState('');
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

  const closeModal = () => setModal('');

  const options = {
    clientSecret,
    appearance: stripeAppearance,
  };

  const handlePricing = async (planId) => {
    try {
      setButtonId(planId);
      const secret = await createCheckoutSesion(planId);
      setClientSecret(secret);
      setModal('payment');
      setButtonId('');
    } catch (error) {
      setButtonId('');
      ErrorHandler(error);
    }
  };

  return (
    <>
      <PageTitle title="Billing" />
      <div className="m-horizontal mx-auto mt-5">
        {modal === 'payment' && clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <Modal closeModal={closeModal} preventOutsideClick>
              <CheckoutForm redirectUrl={window.location.origin+'/dashboard/billing'} />
            </Modal>
          </Elements>
        )}
        {modal === 'plans' && (
          <Modal closeModal={closeModal}>
            <DashboardPlans
              plans={newPlans}
              buttonId={buttonId}
              handlePricing={handlePricing}
              userPlan={user?.plan}
            />
          </Modal>
        )}

        <BillingDetails user={user} openModal={() => setModal('plans')} />
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
      <div className="gradient-dark flex items-center justify-between rounded-2xl p-6">
        <div className="flex items-center">
          <p className="text-2xl font-bold capitalize">
            Current Plan : {user.plan ?? 'Studio Starter'}
          </p>
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
