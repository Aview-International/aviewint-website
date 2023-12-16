import React from 'react';
import check from '../../../public/img/icons/check.svg';
import Image from 'next/image';
import brand_deals from '../../../public/img/graphics/brand_deals.svg';
import content_distribution from '../../../public/img/graphics/content_distribution.svg';
import growth_channels from '../../../public/img/graphics/global_channel.svg';
import multi_language from '../../../public/img/graphics/multi_language.svg';
import video_analytics from '../../../public/img/graphics/video_analytics.svg';
import voice_dubbing from '../../../public/img/graphics/voice_dubbing.svg';
import dropDownArrow from '../../../public/img/icons/dropdown-arrow.svg';
import {
  PRICING_PAGE_TESTIMONIALS_1,
  PRICING_PAGE_TESTIMONIALS_2,
} from '../../../constants/constants';
import Button from '../../UI/Button';
import Border from '../../UI/Border';
import Card from '../../UI/Card';
import PriceComponent from './PriceComponent';

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

const priceVarietyItems = [
  {
    image: growth_channels,
    text: 'Global Channel',
    subText: 'Management',
  },
  {
    image: video_analytics,
    text: 'Video Analytics',
  },
  {
    image: brand_deals,
    text: 'International',
    subText: 'Brand Deals',
  },
  {
    image: content_distribution,
    text: 'Content',
    subText: 'Distribution',
  },
  {
    image: multi_language,
    text: '10 multi-language',
    subText: 'AI voiceovers',
  },
  {
    image: voice_dubbing,
    text: 'AI Voice Dubbing',
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

const PriceFeatureSection = ({ src, text, subText = '' }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 text-lg font-medium">
      <Image src={src} width={50} height={50} />
      <p>{text}</p>
      {subText.length > 0 ? <p>{subText}</p> : null}
    </div>
  );
};

const PricePlan = ({ isChecked }) => {
  const scrollToTarget = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById('#compare_plans');

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="mx-auto h-full w-full md:w-[1280px]">
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
      <div className="mx-auto w-11/12 rounded-xl bg-white-transparent px-4 py-8 text-white md:w-full">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex h-full w-full flex-col items-start justify-center gap-y-5 md:w-1/3 md:items-center">
            <p className="inline rounded-md bg-gray-1 p-1 uppercase">
              enterprise
            </p>
            <div>
              <h4 className="w-full text-6xl font-semibold">Custom Pricing</h4>
              <p className="text-center text-base">Tailored to your needs</p>
            </div>

            <Button type="primary" purpose="onClick" fullWidth={true}>
              Contact sales
            </Button>
          </div>
          <div className="my-8 grid h-full w-full grid-cols-2 place-content-center gap-6 md:my-0  md:w-2/3 md:grid-cols-3">
            {priceVarietyItems.map((feature, index) => {
              return (
                <div key={index}>
                  <PriceFeatureSection
                    src={feature.image}
                    text={feature.text}
                    subText={feature.subText && feature.subText}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <a
        className="mx-auto my-8 block w-full cursor-pointer scroll-smooth text-center text-2xl text-white hover:underline"
        onClick={(event) => scrollToTarget(event)}
        href="#"
      >
        See All features
        <span className="ml-2">
          <Image src={dropDownArrow} width={20} height={20} />
        </span>
      </a>
      <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center gap-y-s4 rounded-xl bg-white-transparent px-2 py-8 text-white md:w-full md:gap-y-s8 md:px-4">
        <p className="mt-8 w-full text-center text-7xl font-bold">
          Join these creators who use Aview
        </p>
        <div className="grid w-11/12 grid-cols-2 items-center justify-center gap-x-5 md:flex md:w-3/4 md:flex-row md:gap-x-10">
          {PRICING_PAGE_TESTIMONIALS_1.map((testimonialImage, index) => {
            return (
              <div key={index}>
                <Image
                  src={testimonialImage}
                  alt={`Image ${index + 1}`}
                  width={160}
                  height={160}
                  className="col-span-1"
                />
              </div>
            );
          })}
        </div>
        <div className="grid w-full grid-cols-4 place-content-center gap-x-2 md:w-4/5 md:gap-x-5">
          {PRICING_PAGE_TESTIMONIALS_2.slice(0, 4).map(
            (testimonialImage, index) => {
              return (
                <div key={index}>
                  <Image
                    src={testimonialImage}
                    alt={`Image ${index + 1}`}
                    width={140}
                    height={80}
                    className=""
                  />
                </div>
              );
            }
          )}
          <div className="col-span-full">
            <div className="mx-auto grid w-[90%] grid-cols-3 gap-x-6 md:w-3/4">
              {PRICING_PAGE_TESTIMONIALS_2.slice(4).map(
                (testimonialImage, index) => {
                  return (
                    <div key={index} className="col-span-1">
                      <Image
                        src={testimonialImage}
                        alt={`Image ${index + 5}`}
                        width={160}
                        height={80}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        id="#compare_plans"
        className="my-s8 mx-auto flex max-h-[2430px] w-11/12 flex-col rounded-xl bg-white-transparent px-2 py-s5 text-white md:max-h-[1625px] md:w-full md:px-5 md:py-s8"
      >
        <p className="blokc my-s5 text-center text-7xl font-bold">
          Compare Plans
        </p>
        <PriceComponent />
      </div>
    </section>
  );
};

export default PricePlan;
