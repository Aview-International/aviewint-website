import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import OnboardingButton from '../Onboarding/button';
import { useState } from 'react';
import ErrorHandler from '../../utils/errorHandler';

const CheckoutForm = ({ redirectUrl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: redirectUrl,
      },
    });
    if (error) setIsLoading(false);
    if (error.type === 'card_error' || error.type === 'validation_error') {
      ErrorHandler(null, error.message);
    } else {
      ErrorHandler(null, 'An unexpected error occurred.');
    }
  };

  return (
    <form onSubmit={isLoading ? null : handleSubmit}>
      <PaymentElement />
      <div className="my-s4 mx-auto w-3/12 text-center">
        <OnboardingButton isLoading={isLoading}>Submit</OnboardingButton>
      </div>
    </form>
  );
};

export default CheckoutForm;
