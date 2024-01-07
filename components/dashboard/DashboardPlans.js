import Border from '../UI/Border';
import Card from '../UI/Card';
import { createCheckoutSesion } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import OnboardingButton from '../Onboarding/button';
import { useState } from 'react';

const PriceSection = ({ priceList, user }) => {
  const [isChecked, setToggleIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePricing = async () => {
    try {
      setIsLoading(true);
      await createCheckoutSesion(priceList.id);
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <div className="relative h-full w-full cursor-pointer rounded-xl bg-white-transparent px-2 py-4 text-white md:px-6">
      <span className="rounded-md bg-gray-1 p-1 uppercase">
        {priceList.desc}
      </span>
      <div className="my-s2 flex flex-row items-center justify-start gap-x-2">
        <p className="text-xl font-bold md:text-4xl">
          &#36;
          {!isChecked
            ? priceList.monthlyCost
            : Math.round(priceList.yearlyCost / 12)}
        </p>
        {priceList.id != 'basic' && (
          <p>
            Per month, billed &#36;
            {isChecked ? priceList.yearlyCost : priceList.monthlyCost * 12}{' '}
            annually
          </p>
        )}
      </div>
      <div className="capitalize">
        <OnboardingButton
          isLoading={isLoading}
          theme={priceList.id === 'pro' ? 'light' : 'dark'}
          onClick={handlePricing}
        >
          {priceList.id === user.plan ? 'Current Plan' : 'Go ' + priceList.id}
        </OnboardingButton>
      </div>

      <p className="mb-2 mt-s3 font-semibold">{priceList.description}</p>

      {priceList.id === user?.plan && (
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

const DashboardPlans = ({ isChecked, plans, user }) => {
  const [showCancelSub, setShowCancelSub] = useState(false);

  return (
    <section>
      {!showCancelSub && (
        <div className="z-20 mb-10 flex justify-center gap-8 px-4 md:px-0">
          {plans.map((priceList, index) => (
            <div key={index}>
              {priceList.id === user.plan ? (
                <Card borderRadius="xl" fullWidth={true}>
                  <PriceSection
                    priceList={priceList}
                    isChecked={isChecked}
                    user={user}
                  />
                </Card>
              ) : (
                <PriceSection
                  priceList={priceList}
                  isChecked={isChecked}
                  user={user}
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
