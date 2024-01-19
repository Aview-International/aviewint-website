import check from '../../../public/img/icons/check.svg';
import Image from 'next/image';
import Button from '../../UI/Button';
import Border from '../../UI/Border';
import Card from '../../UI/Card';
import useAuth from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const PriceSection = ({ plan, isChecked, sliderValue, push }) => {
  const isLoggedIn = useAuth();
  const userPlan = useSelector((data) => data.user.plan);

  const handlePlanSelect = () => {
    localStorage.setItem('payForPlan', plan.id);
    push(`/register`);
  };

  return (
    <div className="relative h-full w-full cursor-pointer rounded-xl bg-white-transparent px-4  py-8 text-white md:px-6">
      <span className="rounded-md bg-gray-1 p-s1 pt-2.5 uppercase">
        {plan.desc}
      </span>
      <p className="mb-2 mt-3 font-semibold">{plan.description}</p>

      <div className="my-s4 flex flex-row items-center justify-start gap-x-4">
        <p className="text-center text-4xl font-bold md:text-7xl">
          {typeof (plan.monthlyCost || plan.yearlyCost) === 'number' && '$'}
          {(!isChecked ? plan.monthlyCost : Math.round(plan.yearlyCost / 12)) ||
            'Free'}
        </p>
        {plan.id != 'basic' && (
          <p>
            Per month
            {isChecked && `, billed $${plan.yearlyCost} annually`}
          </p>
        )}
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
          {isLoggedIn
            ? userPlan === plan.id
              ? 'Current Plan'
              : 'Go ' + plan.id
            : 'Go ' + plan.id}
        </Button>
      </div>

      {sliderValue <= plan.sliderValueMax && (
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

const PricingPlans = ({ isChecked, plans, sliderValue }) => {
  const { push } = useRouter();
  return (
    <section className="m-horizontal">
      <div className="mb-10 flex w-full flex-wrap justify-center gap-8 px-4 md:px-0 xl:grid xl:grid-cols-3 xl:justify-between">
        {plans.map((plan, i) => (
          <div key={i}>
            {sliderValue <= plan.sliderValueMax &&
            sliderValue >= plan.sliderValueMin ? (
              <Card borderRadius="xl" fullWidth={true}>
                <PriceSection
                  plan={plan}
                  isChecked={isChecked}
                  sliderValue={sliderValue}
                  push={push}
                />
              </Card>
            ) : (
              <PriceSection plan={plan} isChecked={isChecked} push={push} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
