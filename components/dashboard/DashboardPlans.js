import Border from '../UI/Border';
import Card from '../UI/Card';
import OnboardingButton from '../Onboarding/button';
import { useState } from 'react';

const PriceSection = ({ plan, userPlan, handlePricing, buttonId }) => {
  const [isChecked, setToggleIsChecked] = useState(false);

  return (
    <div className="relative h-full w-full cursor-pointer rounded-xl bg-white-transparent px-2 py-4 text-white md:px-6">
      <span className="rounded-md bg-gray-1 p-1 uppercase">{plan.desc}</span>
      <div className="my-s2 flex flex-row items-center justify-start gap-x-2">
        <p className="text-xl font-bold md:text-4xl">
          &#36;
          {!isChecked ? plan.monthlyCost : Math.round(plan.yearlyCost / 12)}
        </p>
        {plan.id != 'basic' && (
          <p>
            Per month, billed &#36;
            {isChecked ? plan.yearlyCost : plan.monthlyCost * 12} annually
          </p>
        )}
      </div>
      <div className="capitalize">
        <OnboardingButton
          isLoading={buttonId === plan.stripe_monthly_id}
          theme={plan.id === 'pro' ? 'light' : 'dark'}
          onClick={() => handlePricing(plan.stripe_monthly_id)}
        >
          Go {plan.id}
        </OnboardingButton>
      </div>

      <p className="mb-2 mt-s3 font-semibold">{plan.description}</p>

      {plan.id === userPlan && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full transform">
          <Border borderRadius="3xl">
            <div className="block rounded-3xl bg-white px-3 py-1 text-center font-medium text-black">
              CURRENT PLAN
            </div>
          </Border>
        </div>
      )}
    </div>
  );
};

const DashboardPlans = ({
  plans,
  buttonId,
  handlePricing,
  isChecked,
  userPlan,
}) => {
  const [showCancelSub, setShowCancelSub] = useState(false);

  return (
    <section>
      {!showCancelSub && (
        <div className="z-20 mb-10 flex justify-center gap-8 px-4 md:px-0">
          {plans.map((plan, index) => (
            <div key={index}>
              {plan.id === userPlan ? (
                <Card borderRadius="xl" fullWidth={true}>
                  <PriceSection
                    plan={plan}
                    isChecked={isChecked}
                    userPlan={userPlan}
                    handlePricing={handlePricing}
                    buttonId={buttonId}
                  />
                </Card>
              ) : (
                <PriceSection
                  plan={plan}
                  isChecked={isChecked}
                  userPlan={userPlan}
                  handlePricing={handlePricing}
                  buttonId={buttonId}
                />
              )}
            </div>
          ))}
        </div>
      )}
      {showCancelSub && (
        <div className="">
          Cancel your subscription ?
          <button onClick={() => setShowCancelSub(false)}>No</button>
          <button>Yes</button>
        </div>
      )}
      <div className="flex w-full justify-end">
        <div className="max-w-[250px]">
          <OnboardingButton onClick={() => setShowCancelSub(true)}>
            Cancel Subscription
          </OnboardingButton>
        </div>
      </div>
    </section>
  );
};

export default DashboardPlans;
