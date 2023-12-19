import check from '../../../public/img/icons/check.svg';
import Image from 'next/image';
import Button from '../../UI/Button';
import Border from '../../UI/Border';
import Card from '../../UI/Card';

const priceListItems = [
  {
    title: 'Starter Studio',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    totalMonthlyPrice: '',
    totalYearlyPrice: '',
    butonDescription: 'Go Basic',
    description: 'Essential tools for emerging creators.',
    options: [
      '50 languages',
      '5 Minutes of Context-Based Translations',
      '5 Minutes of Translated AI Dubbing',
      '1 AI trained multi-language voiceover',
    ],
  },
  {
    title: 'Creator Pro',
    monthlyPrice: '$49',
    yearlyPrice: '$39',
    totalMonthlyPrice: '$588',
    totalYearlyPrice: '$468',
    butonDescription: 'Go Pro',
    description: 'Elevate your content professionally.',
    options: [
      'Content Distribution',
      '45 Minutes of Context-Based Translations',
      '45 Minutes of Translated AI Dubbing',
      '3 AI trained multi-language voiceovers',
    ],
  },
  {
    title: 'Global Influencer',
    monthlyPrice: '$289',
    yearlyPrice: '$230',
    totalMonthlyPrice: '$3468',
    totalYearlyPrice: '$2760',
    butonDescription: 'Go Unlimited',
    description: 'Maximize reach, impact globally.',
    options: [
      'Cultural Sensitivity Filter',
      '300 Minutes of Context-Based Translations',
      '300 Minutes of Translated AI Dubbing',
      'Global channel management',
    ],
  },
];

const PriceSection = ({ priceList, isChecked }) => {
  return (
    <div className="relative flex w-full cursor-pointer flex-col items-start justify-center gap-y-5 rounded-xl bg-white-transparent px-4  py-8 text-white md:px-6">
      <p className="inline rounded-md bg-gray-1 p-1 uppercase">
        {priceList.title}
      </p>
      <div className="flex flex-row items-center justify-start gap-x-4">
        <p className="text-4xl font-bold md:text-7xl">
          {!isChecked ? priceList.monthlyPrice : priceList.yearlyPrice}
        </p>
        {priceList.title != 'Starter Studio' ? (
          <p>
            Per month, billed
            <span className="block">
              {isChecked
                ? `${priceList.totalYearlyPrice}`
                : `${priceList.totalMonthlyPrice}`}{' '}
              {'annualy'}
            </span>
          </p>
        ) : null}
      </div>
      <div className="w-full">
        <Button
          type={priceList.title === 'Creator Pro' ? 'primary' : 'secondary'}
          purpose="onClick"
          fullWidth={true}
        >
          {priceList.butonDescription}
        </Button>
      </div>

      <div className="flex flex-col items-start justify-start gap-y-2">
        <p className="text-start font-semibold">{priceList.description}</p>
        {priceList.options.map((option, index) => {
          return (
            <div key={index}>
              <div className="flex flex-row gap-2">
                <Image src={check} alt="check-mark" />
                <p>{option}</p>
              </div>
            </div>
          );
        })}
      </div>
      {priceList.title === 'Creator Pro' ? (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full transform">
          <Border borderRadius="3xl">
            <div className="block rounded-3xl bg-white px-3 py-1 text-center font-medium uppercase text-black">
              most popular
            </div>
          </Border>
        </div>
      ) : null}
    </div>
  );
};

const PricingPlans = ({ isChecked }) => {
  return (
    <section className="m-horizontal">
      <div className="mb-10 grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-3 md:gap-4 md:px-0">
        {priceListItems.map((priceList, index) => {
          return (
            <div key={index}>
              {priceList.title === 'Creator Pro' ? (
                <Card borderRadius="xl" fullWidth={true}>
                  <PriceSection priceList={priceList} isChecked={isChecked} />
                </Card>
              ) : (
                <PriceSection priceList={priceList} isChecked={isChecked} />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingPlans;
