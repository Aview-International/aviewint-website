import { useRouter } from 'next/router';
import OnboardingButton from './button';
import Confetti from '../UI/Confetti';
import { useEffect, useState } from 'react';

const OnboardingSuccess = () => {
  const router = useRouter();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (router.query?.payment_intent) {
      if (router.query?.redirect_status === 'succeeded') {
        // identifier to trigger confetti
        localStorage.removeItem('payForPlan'); // remove confetti control
        localStorage.removeItem('isYearlyPlan'); // remove yearly control
        localStorage.setItem('planPaid', 'planPaid');
      }
      router.replace('/onboarding?stage=6');
    }

    const planPaid = localStorage.getItem('planPaid');
    if (planPaid) setShowConfetti(true);
  }, []);

  const handleNext = () => {
    localStorage.removeItem('planPaid'); // remove confetti control
    router.push('/dashboard');
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="m-auto w-[90%]">
        <h2 className="text-center text-3xl font-bold md:text-6xl">Success!</h2>
        <p className="mx-auto mt-s2 mb-s4 w-[min(430px,100%)] text-center text-lg md:text-xl">
          You&apos;ve completed the onboarding process. Now let&apos;s take a
          look at your dashboard.
        </p>
        <div className="mx-auto mt-s4 w-[min(360px,90%)]">
          <OnboardingButton onClick={handleNext} theme="light">
            Proceed to dashboard
          </OnboardingButton>
        </div>
      </div>
    </>
  );
};

export default OnboardingSuccess;
