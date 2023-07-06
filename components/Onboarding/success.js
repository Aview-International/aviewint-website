import { useRouter } from 'next/router';
import OnboardingButton from './button';

const OnboardingSuccess = () => {
  const router = useRouter();
  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-center text-3xl font-bold md:text-6xl">Success!</h2>
      <p className="mx-auto mt-s2 mb-s4 w-[min(430px,100%)] text-center text-lg md:text-xl">
        You&apos;ve completed the onboarding process. Now let&apos;s take a look
        at your dashboard.
      </p>
      <div className="mx-auto mt-s4 w-[min(360px,80%)]">
        <OnboardingButton
          onClick={() => router.push('/dashboard')}
          theme="light"
        >
          Proceed to dashboard
        </OnboardingButton>
      </div>
    </div>
  );
};

export default OnboardingSuccess;
