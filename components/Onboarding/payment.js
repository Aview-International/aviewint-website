import { Elements } from '@stripe/react-stripe-js';
import { stripeAppearance, stripePromise } from '../../utils/stripe';
import { useEffect, useState } from 'react';
import CheckoutForm from '../FormComponents/PaymentForm';
import ErrorHandler from '../../utils/errorHandler';
import { createCheckoutSesion } from '../../services/apis';
import { useSelector } from 'react-redux';
import Loader from '../UI/loader';

const OnboardingPayment = () => {
  const [clientSecret, setClientSecret] = useState('');
  const allPlans = useSelector((x) => x.aview.allPlans);
  const options = {
    clientSecret,
    appearance: stripeAppearance,
  };

  const handlePricing = async () => {
    try {
      const payForPlan = localStorage.getItem('payForPlan');
      const planId = allPlans.find((x) => x.id === payForPlan);
      const secret = await createCheckoutSesion(planId.stripe_monthly_id);
      setClientSecret(secret);
    } catch (error) {
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    if (allPlans.length > 0) handlePricing();
  }, [allPlans]);

  return (
    <div className="m-auto w-4/5 md:w-2/5">
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm
            redirectUrl={window.location.origin + '/onboarding?stage=6'}
          />
        </Elements>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OnboardingPayment;
