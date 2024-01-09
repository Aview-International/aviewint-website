import check from '../../../public/img/icons/check.svg';
import Image from 'next/image';
import Button from '../../UI/Button';
import Border from '../../UI/Border';
import Card from '../../UI/Card';
import useAuth from '../../../hooks/useAuth';
import { useSelector } from 'react-redux';

const PriceSection = ({ priceList, isChecked }) => {
  const isLoggedIn = useAuth();
  const plan = useSelector((data) => data.user.plan);

  return (
    <div className="relative h-full w-full cursor-pointer rounded-xl bg-white-transparent px-4  py-8 text-white md:px-6">
      <span className="rounded-md bg-gray-1 p-1 uppercase">
        {priceList.desc}
      </span>
      <div className="my-s5 flex flex-row items-center justify-start gap-x-4">
        <p className="text-4xl font-bold md:text-7xl">
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
        <Button
          type={priceList.id === 'pro' ? 'primary' : 'secondary'}
          purpose="onClick"
          route={`/register?subscription=true&plan=${priceList.id}`}
          fullWidth={true}
        >
          {isLoggedIn
            ? plan === priceList.id
              ? 'Current Plan'
              : 'Go ' + priceList.id
            : 'Go ' + priceList.id}
        </Button>
      </div>

      <p className="mb-2 mt-s3 font-semibold">{priceList.description}</p>
      {priceList.options.map((option, index) => (
        <div className="my-s1.5 flex flex-row items-start gap-2" key={index}>
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

      {priceList.id === 'pro' && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full transform">
          <Border borderRadius="3xl" padding="1px">
            <div className="block rounded-3xl bg-white px-3 py-1 text-center font-medium text-black">
              Recommended
            </div>
          </Border>
        </div>
      )}
    </div>
  );
};

const PricingPlans = ({ isChecked, plans }) => {
  return (
    <section className="m-horizontal">
      <div className="mb-10 flex w-full flex-wrap justify-center gap-8 px-4 md:px-0 xl:grid xl:grid-cols-3 xl:justify-between">
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

export default PricingPlans;
