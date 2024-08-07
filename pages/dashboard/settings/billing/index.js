import GlobalButton from '../../../../components/Onboarding/button';
import PageTitle from '../../../../components/SEO/PageTitle';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import usePlans from '../../../../hooks/usePlans';
import {
  cancelSubscription,
  createCheckoutSesion,
  getPlans,
  subscriptionHistory,
} from '../../../../services/apis';
import { SUBSCRIPTION_PLANS_DESC } from '../../../../constants/constants';
import DashboardPlans from '../../../../components/dashboard/DashboardPlans';
import ErrorHandler from '../../../../utils/errorHandler';
import { setBillingHistory } from '../../../../store/reducers/billing.reducer';
import Modal from '../../../../components/UI/Modal';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../../../components/FormComponents/PaymentForm';
import { stripeAppearance, stripePromise } from '../../../../utils/stripe';
import { SettingsLayout } from '../../settings';

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
  const [cancelSubLoader, setCancelSubLoader] = useState(false);
  const allPlans = useSelector((state) => state.aview.allPlans);
  const dispatch = useDispatch();
  const [modal, setModal] = useState('');

  const findPlanName = (planId) => {
    for (const plan of allPlans) {
      if (
        plan.stripe_monthly_id === planId ||
        plan.stripe_yearly_id === planId
      ) {
        return plan.desc;
      }
    }
    return 'Plan not found';
  };

  useEffect(() => {
    (async () => {
      try {
        const billing = await subscriptionHistory();
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

  const handleCancelSub = async (cancelReason, otherReason) => {
    try {
      setCancelSubLoader(true);
      await cancelSubscription({ cancelReason, otherReason });
      setCancelSubLoader(false);
      closeModal();
    } catch (error) {
      setCancelSubLoader(false);
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
              <CheckoutForm
                redirectUrl={window.location.origin + '/subscription'}
              />
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
              handleCancelSub={handleCancelSub}
              cancelSubLoader={cancelSubLoader}
            />
          </Modal>
        )}

        <BillingDetails
          user={user}
          openModal={() => setModal('plans')}
          allPlans={allPlans}
        />
        <Transactions billing={billing} findPlanName={findPlanName} />
      </div>
    </>
  );
};

Billing.getLayout = SettingsLayout;

export default Billing;

const BillingDetails = ({ user, openModal, allPlans }) => {
  return (
    <div className="gradient-dark flex items-center justify-between rounded-2xl p-6">
      <p className="text-2xl font-bold capitalize">
        Current Plan :{' '}
        {user.plan
          ? `${user.plan} - $${
              allPlans.find((e) => e.id === user.plan)?.monthlyCost ?? '0'
            }`
          : 'Studio Starter - Free'}
      </p>
      <div className="w-52">
        <GlobalButton onClick={openModal}>
          {!user.plan || user.plan === 'free'
            ? 'Subscribe'
            : 'Cancel Subscription'}
        </GlobalButton>
      </div>
    </div>
  );
};

const Transactions = ({ billing, findPlanName }) => {
  let billingArray = billing
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="mt-s4 text-white">
      <h3 className="mb-s2 text-2xl font-bold">Transactions</h3>
      <div className="gradient-dark rounded-2xl p-s3">
        {billing.length > 0 ? (
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(255,255,255,0.15)] text-center text-xl">
                <th className="pb-s2">Date</th>
                <th className="pb-s2">Plan</th>
                <th className="pb-s2">Status</th>
                <th className="pb-s2">Amount(USD)</th>
              </tr>
            </thead>
            <tbody>
              {billingArray.map(({ createdAt, data }, index) => (
                <tr className="mt-s2 text-center text-lg" key={`row-${index}`}>
                  <td className="py-s3">
                    {new Date(createdAt).toLocaleString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour12: true,
                    })}
                  </td>
                  <td className="py-s3">{findPlanName(data.plan.id)}</td>
                  <td className="py-s3 capitalize">{data.status}</td>
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
