import { Elements } from '@stripe/react-stripe-js';
import { stripeAppearance, stripePromise } from '../../utils/stripe';
import { useState } from 'react';
import CheckoutForm from '../FormComponents/PaymentForm';
import ErrorHandler from '../../utils/errorHandler';
import { createCheckoutSesion } from '../../services/apis';
import { useSelector } from 'react-redux';
import Loader from '../UI/loader';
import ToggleButton from '../FormComponents/ToggleButton';
import Button from '../UI/Button';
import Image from 'next/image';
import check from '../../public/img/icons/check.svg';
import Modal from '../UI/Modal';
import { PageTransition } from '../animations';
import { useRouter } from 'next/router';
import Card from '../UI/Card';
import Border from '../UI/Border';

const PriceSection = ({ plan, isChecked, handlePlanSelect }) => {
  return (
    <div
      className={`relative h-full w-full cursor-pointer rounded-xl bg-white-transparent  px-4 py-8 text-white md:px-6 ${
        plan.id === 'pro'
          ? 'gradient-dark border-0'
          : 'border-xl border border-transparent'
      }`}
    >
      <span className="rounded-md bg-gray-1 p-s1 pt-2.5 uppercase">
        {plan.desc}
      </span>
      <p className="mb-2 mt-3 font-semibold">{plan.description}</p>

      <div className="my-s4 flex flex-row items-center justify-start gap-x-4">
        <p className="text-center text-4xl font-bold md:text-7xl">
          {typeof (plan.monthlyCost || plan.yearlyCost) === 'number' && '$'}
          {isChecked
            ? Math.round(plan.yearlyCost / 12) || 'Free'
            : plan.monthlyCost}
        </p>
      </div>
      {plan.options.map((option, index) => (
        <div className="mt-s1.5 flex flex-row items-start gap-2" key={index}>
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
          {'Go ' + plan.id}
        </Button>
      </div>

      {plan.id == 'pro' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full transform">
          <Border borderRadius="3xl" padding="p-[1px]">
            <div className="block rounded-3xl bg-white px-3 py-1 text-center font-medium text-black">
              Recommended
            </div>
          </Border>
        </div>
      )}
    </div>
  );
};

const PaymentForm = ({ clientSecret, isLoading }) => {
  const options = {
    clientSecret,
    appearance: stripeAppearance,
  };

  return !isLoading && clientSecret ? (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm
        redirectUrl={window.location.origin + '/onboarding?stage=6'}
      />
    </Elements>
  ) : (
    <Loader />
  );
};

const OnboardingStep5 = ({ plans }) => {
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState('');
  const [isYearlyPlan, setIsYearlyPlan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const allPlans = useSelector((x) => x.aview.allPlans);
  const handleIsChecked = () => setIsYearlyPlan(!isYearlyPlan);

  const handlePlanSelect = async (planId) => {
    if (allPlans.length > 0) {
      try {
        if (planId === 'basic') return router.push('/onboarding?stage=6');
        const selectedPlan = allPlans.find((x) => x.id === planId);
        setIsLoading(true);
        setModal(true);
        const secret = await createCheckoutSesion(
          isYearlyPlan
            ? selectedPlan.stripe_yearly_id
            : selectedPlan.stripe_monthly_id
        );
        setClientSecret(secret);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        ErrorHandler(error);
      }
    }
  };

  return (
    <>
      <div className="m-horizontal">
        <h2 className="text-3xl md:text-center md:text-4xl">
          Select your plan
        </h2>
        <p className="mt-4 mb-8 text-lg text-white/90 md:text-center md:text-[19px]">
          Fees are waved upon channel becoming monetized.
        </p>
        <div className="mb-s7 flex items-center justify-center">
          <ToggleButton
            isChecked={isYearlyPlan}
            handleChange={handleIsChecked}
          />
          <p className="pl-1 text-sm md:text-base">Annual (save up to 28%)</p>
        </div>
        <div className="mb-10 flex w-full flex-wrap justify-center gap-8 px-4 md:px-0 xl:grid xl:grid-cols-3 xl:justify-between">
          {plans.map((plan, i) => (
            <div key={i}>
              <Card borderRadius="xl" fullWidth={true}>
                <PriceSection
                  plan={plan}
                  isChecked={isYearlyPlan}
                  handlePlanSelect={handlePlanSelect}
                />
              </Card>
            </div>
          ))}
        </div>
      </div>
      {modal && (
        <Modal closeModal={() => setModal(false)} preventOutsideClick={true}>
          <div className="mx-auto w-full md:w-4/5 md:min-w-[350px]">
            <PageTransition>
              <PaymentForm clientSecret={clientSecret} isLoading={isLoading} />
            </PageTransition>
          </div>
        </Modal>
      )}
    </>
  );
};

export default OnboardingStep5;
