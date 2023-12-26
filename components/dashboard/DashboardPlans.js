import Border from '../UI/Border';
import useAuth from '../../hooks/useAuth';
import Card from '../UI/Card';
import { createCheckoutSesion } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import OnboardingButton from '../Onboarding/button';
import { useState } from 'react';

const PriceSection = ({ priceList }) => {
  const [isChecked, setToggleIsChecked] = useState(false);

  const isLoggedIn = useAuth();

  const handlePricing = async () => {
    try {
      await createCheckoutSesion(priceList.id);
    } catch (error) {
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
          theme={priceList.id === 'pro' ? 'light' : 'dark'}
          onClick={handlePricing}
        >
          {priceList.id !== 'basic'
            ? 'Go ' + priceList.id
            : isLoggedIn
            ? 'Current Plan'
            : 'Go ' + priceList.id}
        </OnboardingButton>
      </div>

      <p className="mb-2 mt-s3 font-semibold">{priceList.description}</p>

      {priceList.id === 'pro' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full transform">
          <Border borderRadius="3xl">
            <div className="block rounded-3xl bg-white px-3 py-1 text-center font-medium text-black">
              MOST POPULAR
            </div>
          </Border>
        </div>
      )}
    </div>
  );
};

const DashboardPlans = ({ isChecked, plans }) => {
  return (
    <section className="m-horizontal">
      <div className="mb-10 flex w-full justify-center gap-8 px-4 md:px-0">
        {plans.map((priceList, index) => (
          <div key={index}>
            {priceList.id === 'pro' ? (
              <Card borderRadius="xl" fullWidth={true}>
                <PriceSection priceList={priceList} isChecked={isChecked} />
              </Card>
            ) : (
              <PriceSection priceList={priceList} isChecked={isChecked} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardPlans;
