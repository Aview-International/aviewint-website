import { useRouter } from 'next/router';
import check from '../../public/img/icons/check.svg';
import Border from '../UI/Border';
import Image from 'next/image';
import Card from '../UI/Card';
import Button from '../UI/Button';
import OnboardingButton from './button';

const OnboardingStep5 = ({ userData, plans }) => {
  const router = useRouter();

  return (
    <div className="m-horizontal">
      <h2 className="text-3xl md:text-center md:text-4xl">Select your plan</h2>
      <p className="mt-4 mb-8 text-lg text-white/90 md:text-center md:text-[19px]">
        Fees are waved upon channel becoming monetized.
      </p>
      <div className="mb-10 flex w-full flex-wrap justify-center gap-8 px-4 md:px-0 xl:grid xl:grid-cols-3 xl:justify-between">
        {plans.map((plan, i) => (
          <div key={i}>
            <Card borderRadius="xl" fullWidth={true}>
              <PriceSection plan={plan} />
            </Card>
          </div>
        ))}
      </div>
      <div className="m-auto mt-12 w-[min(360px,90%)]">
        <OnboardingButton
          onClick={() => router.push('/onboarding?stage=6')}
          theme="light"
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};

const PriceSection = ({ plan }) => {
  const handlePlanSelect = () => {
    localStorage.setItem('payForPlan', plan.id);
  };

  return (
    <div
      className={`relative h-full w-full cursor-pointer rounded-xl bg-white-transparent  px-4 py-8 text-white md:px-6 ${
        plan.id === 'Pro'
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
          {plan.monthlyCost != 'Free'
            ? Math.round(plan.yearlyCost / 12)
            : 'Free'}
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
          onClick={handlePlanSelect}
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

export default OnboardingStep5;
