import { Elements } from '@stripe/react-stripe-js';
import { stripeAppearance, stripePromise } from '../../utils/stripe';
import { useEffect, useState } from 'react';
import CheckoutForm from '../FormComponents/PaymentForm';
import ErrorHandler from '../../utils/errorHandler';
import { createCheckoutSesion } from '../../services/apis';
import { useSelector } from 'react-redux';
import Loader from '../UI/loader';
import { SUBSCRIPTION_PLANS_DESC } from '../../constants/constants';
import Button from '../UI/Button';
import Image from 'next/image';
import check from '../../public/img/icons/check.svg';
import ToggleButton from '../FormComponents/ToggleButton';
import Info from '../../public/img/icons/info.svg';
import { PageTransition } from '../animations';
import { useRouter } from 'next/router';

const PriceSection = ({ plans, setShowPLans }) => {
  const [toggleIsChecked, setToggleIsChecked] = useState(false);
  const handlePlanSelect = (id) => {
    localStorage.setItem('payForPlan', id);
    toggleIsChecked
      ? localStorage.setItem('isYearlyPlan', true)
      : localStorage.removeItem('isYearlyPlan');
    setShowPLans(false);
  };

  const handleToggle = () => setToggleIsChecked(!toggleIsChecked);

  return (
    <div className="text-center text-white">
      <h2 className="text-2xl font-bold md:text-5xl">
        Find the plan that works for you
      </h2>
      <p className="mt-s1 text-lg">
        Fees are waved upon channel becoming monetized.
      </p>
      <div className="my-s2 flex w-full flex-row items-center justify-center gap-x-2 text-lg">
        <p>Monthly </p>
        <ToggleButton isChecked={toggleIsChecked} handleChange={handleToggle} />
        <p>Annual (save up to 30%)</p>
      </div>
      <div className="flex w-full">
        {plans.slice(1).map((plan, i) => (
          <div
            key={i}
            className={`mx-s2 w-full rounded-xl bg-white-transparent px-4 py-8 text-left md:px-6`}
          >
            <span className="rounded-md bg-gray-1 p-s1 pt-2.5 uppercase">
              {plan.desc}
            </span>

            <div className="my-s2">
              <p className="text-2xl font-bold md:text-5xl">
                &#36;
                {!toggleIsChecked
                  ? plan.monthlyCost
                  : Math.round(plan.yearlyCost / 12)}
              </p>
              {plan.id != 'basic' && (
                <p>
                  Per month
                  {toggleIsChecked && `, billed $${plan.yearlyCost} annually`}
                </p>
              )}
            </div>

            {plan.options.map((option, index) => (
              <div
                className="mt-s1 flex flex-row items-start gap-2 text-sm"
                key={index}
              >
                <Image
                  src={check}
                  alt="check-mark"
                  className="mt-2"
                  width={16}
                  height={16}
                />
                <p>{option}</p>
              </div>
            ))}

            <div className="mt-s2 capitalize">
              <Button
                type={plan.id === 'pro' ? 'primary' : 'secondary'}
                purpose="onClick"
                onClick={() => handlePlanSelect(plan.id)}
                fullWidth={true}
              >
                Go {plan.id}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PaymentForm = ({ clientSecret }) => {
  const options = {
    clientSecret,
    appearance: stripeAppearance,
  };

  return clientSecret ? (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm
        redirectUrl={window.location.origin + '/onboarding?stage=6'}
      />
    </Elements>
  ) : (
    <Loader />
  );
};

const OnboardingPayment = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [showPlans, setShowPLans] = useState(false);
  const allPlans = useSelector((x) => x.aview.allPlans);
  const router = useRouter();
  const newPlans = SUBSCRIPTION_PLANS_DESC.map((plan, i) => ({
    ...allPlans[i],
    ...plan,
  }));

  const handlePricing = async (planId) => {
    try {
      const secret = await createCheckoutSesion(planId);
      setClientSecret(secret);
    } catch (error) {
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    const payForPlan = localStorage.getItem('payForPlan');
    const isYearlyPlan = localStorage.getItem('isYearlyPlan');

    if (!payForPlan) {
      router.push('onboarding?stage=6');
      return;
    }
    if (allPlans.length > 0) {
      const planId = allPlans.find((x) => x.id === payForPlan);
      isYearlyPlan
        ? handlePricing(planId.stripe_yearly_id)
        : handlePricing(planId.stripe_monthly_id);
    }
  }, [allPlans]);

  return (
    <div className="mx-auto w-full md:w-4/5">
      <button
        onClick={() => setShowPLans(!showPlans)}
        className="mb-s2 flex items-center gap-x-2"
      >
        {showPlans ? 'Back to checkout' : 'Change plan info'}
        {!showPlans && <Image src={Info} alt="" />}
      </button>

      <span className="rounded-md bg-gray-1 p-s1 pt-2.5 uppercase">
        Creator Pro
      </span>
      <div></div>
      <h2 className="text-4xl font-bold">$49</h2>
      <p>billed today</p>
      {showPlans ? (
        <PageTransition>
          <PriceSection plans={newPlans} setShowPLans={setShowPLans} />
        </PageTransition>
      ) : (
        <PageTransition>
          <PaymentForm allPlans={allPlans} clientSecret={clientSecret} />
        </PageTransition>
      )}
    </div>
  );
};

export default OnboardingPayment;
