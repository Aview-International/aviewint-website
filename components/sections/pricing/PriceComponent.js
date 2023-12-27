import { useState } from 'react';
import Image from 'next/image';
import Button from '../../UI/Button';
import checkMark from '../../../public/img/icons/check.svg';
import infoMark from '../../../public/img/icons/info.svg';
import ToggleButton from '../../FormComponents/ToggleButton';
import Border from '../../UI/Border';

const comparePlans = [
  {
    title: 'Free',
    monthlyPrice: '$0',
    yearlyPrice: '$0',
    description: 'Go Basic',
  },
  {
    title: 'Basic',
    monthlyPrice: '$49',
    yearlyPrice: '$39',
    description: 'Go Pro',
  },
  {
    title: 'Pro',
    monthlyPrice: '$289',
    yearlyPrice: '$230',
    description: 'Go Unlimited',
  },
  {
    title: 'Premium',
    monthlyPrice: 'Custom pricing',
    yearlyPrice: 'Custom pricing',
    description: 'Contact Sales',
  },
];

const plans = [
  {
    isItLine: true,
  },
  {
    sectionHeading: 'Basic Video Services',
  },
  {
    isItLine: false,
    sectionHeading: '',
    plansArray: [
      {
        title: 'Relevant Content Hashtag Generation',
        info: 'Elevate your contents impact with intuitive, tailored hashtag creation',
        options: ['10 hashtags', '50 hashtags', '300 hashtags', 'Unlimited'],
      },
      {
        title: 'Title and Description Generator',
        info: 'Craft viral-worthy titles and descriptions effortlessly, sparking your audiences interest',
        options: ['1', '5', '15', 'Unlimited'],
      },
      {
        title: 'Video Script Generator',
        info: 'Craft viral-worthy titles and descriptions effortlessly, sparking your audience interest',
        options: [
          'Up to 5 minutes',
          'Up to 45 minutes',
          'Up to 300 minutes',
          'Up to 720 minutes',
        ],
      },
    ],
  },
  {
    isItLine: true,
  },
  {
    sectionHeading: 'Dubbing Services',
  },
  {
    isItLine: false,
    sectionHeading: '',
    plansArray: [
      {
        title: 'Minutes of Translated Dubbing (AI)',
        info: 'Your voice, in any language. Choose AI-dubbing with your voice or select from our diverse voice roster',
        options: ['5 minutes', '45 minutes', '300 minutes', '300 minutes'],
      },
      {
        title: 'Context-Based Translated Subtitles',
        options: ['5 minutes', '45 minutes', '300 minutes', '300 minutes'],
      },
      {
        title: 'Trained Multi-Language Voiceovers',
        info: `Give every character a global voice. Multi-language voiceover's for universal appeal`,
        options: ['1 voice', '3 voices', '5 voices', '25 voices'],
      },
      {
        title: 'Languages',
        options: ['50', '50', '50', '50'],
      },
      {
        title: 'International Video Analytics',
        options: ['empty', 'check', 'check', 'check'],
      },
    ],
  },
  {
    isItLine: true,
  },
  {
    sectionHeading: 'Short form Services',
  },
  {
    isItLine: false,
    sectionHeading: '',
    plansArray: [
      {
        title: 'Content Distribution',
        info: 'Click to connect with the world. Distribute your content globally, effortlessly',
        options: ['empty', '5 videos', '30 videos', '30 videos'],
      },
      {
        title: 'Content Censorship',
        info: 'Culturally smart content. Automatically filter sensitive language for global relevance',
        options: ['empty', 'check', 'check', 'check'],
      },
      {
        title: 'Short-Form Content',
        options: ['empty', '1 short', '7 shorts', '16 shorts'],
      },
      {
        title: 'Human Review',
        options: ['empty', 'empty', 'empty', 'check'],
      },
    ],
  },
  {
    isItLine: true,
  },
  {
    sectionHeading: 'Global Management Services',
  },
  {
    isItLine: false,
    sectionHeading: '',
    plansArray: [
      {
        title: 'Global Channel Management',
        options: ['empty', 'empty', 'check', 'check'],
      },
      {
        title: 'International Brand Deals',
        options: ['empty', 'check', 'check', 'check'],
      },
      {
        title: 'Profit Sharing',
        options: ['empty', '0.5%', '2%', '5%'],
      },
    ],
  },
];

const HoverTextInfo = ({ title, infoText }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative col-span-full my-1 flex h-8 w-full flex-row items-center justify-center px-1 py-1 md:col-span-1 md:my-0 md:h-16 md:justify-start md:pt-0">
      <p className="w-full whitespace-nowrap text-base font-medium md:w-2/3 md:whitespace-pre-wrap ">
        {title}
      </p>
      {infoText ? (
        <p className="ml-0 w-full cursor-pointer md:ml-2 md:w-1/3">
          <Image
            src={infoMark}
            alt="info"
            width={22}
            height={22}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </p>
      ) : null}
      {isHovered ? (
        <div className="absolute -top-16 z-20 whitespace-pre-wrap rounded-md bg-black text-white md:-top-6 md:whitespace-nowrap">
          <p className="px-2 py-1">{infoText}</p>
        </div>
      ) : null}
    </div>
  );
};

const PriceComponent = () => {
  const [toggleIsChecked, setToggleIsChecked] = useState(false);

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-5">
        <div className="col-span-full grid h-s9 grid-cols-4 md:h-s21 md:grid-cols-5">
          <div className="hidden flex-col items-center justify-center gap-2 md:flex md:gap-3">
            <div className="flex flex-row items-center justify-center">
              <ToggleButton
                isChecked={toggleIsChecked}
                handleChange={() => setToggleIsChecked(!toggleIsChecked)}
              />
              <span className="ml-2">Annual</span>
            </div>
            <p>(save upto 28%)</p>
          </div>
          {comparePlans.map((planName, index) => {
            return (
              <div
                key={index}
                className={`relative flex flex-col items-center justify-center gap-y-0 pt-4 md:gap-y-3 md:pt-10 ${
                  index === 1
                    ? 'md:rounded-border-gradient z-2 rounded-tr-[20px] rounded-tl-[20px] bg-gray-1 md:bg-transparent'
                    : ''
                }`}
              >
                <p className="text-base font-medium md:text-2xl md:font-semibold">
                  {planName.title}
                </p>
                <p className="text-center text-sm md:text-base">
                  {!toggleIsChecked
                    ? planName.monthlyPrice
                    : planName.yearlyPrice}
                </p>
                <div className="hidden md:inline-block">
                  <Button
                    type={planName.title === 'Basic' ? 'primary' : 'secondary'}
                    purpose="onClick"
                    fullWidth={true}
                  >
                    {planName.description}
                  </Button>
                </div>
                {planName.title === 'Basic' ? (
                  <div className="invisible absolute top-4 left-1/2 -translate-x-1/2 -translate-y-full transform md:visible">
                    <Border borderRadius="3xl">
                      <div className="block whitespace-nowrap rounded-3xl bg-white px-3 py-[2px] text-center text-sm font-medium uppercase text-black">
                        most popular
                      </div>
                    </Border>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        {plans.map((plan, index) => {
          return (
            <>
              {plan.isItLine === true ? (
                <div className="col-span-full pt-1 pb-2 md:pt-0 md:pb-0">
                  <div className="h-[1px] w-full bg-white"></div>
                </div>
              ) : (
                <div
                  key={index}
                  className="col-span-full grid grid-cols-4 md:grid-cols-5"
                >
                  {plan.sectionHeading.length > 2 ? (
                    <div className="col-span-full">
                      <div className="grid grid-cols-4 md:grid-cols-5">
                        <h4 className="col-span-full pt-s2 pb-s1 text-base font-medium text-white/40 md:col-span-1 md:text-xl md:font-bold md:text-white">
                          {plan.sectionHeading}
                        </h4>
                        <div className="md:border-gradient col-start-2 col-end-auto hidden pt-s2 pb-s1 md:col-span-1 md:col-start-3 md:block"></div>
                      </div>
                    </div>
                  ) : (
                    plan.plansArray.map((planOptions, index) => {
                      return (
                        <div
                          key={index}
                          className="col-span-full grid grid-cols-4 md:grid-cols-5"
                        >
                          <HoverTextInfo
                            key={index}
                            title={planOptions.title}
                            infoText={planOptions.info && planOptions.info}
                          />

                          {planOptions.options.map((option, index) => {
                            return (
                              <div
                                className={`flex h-16 items-center justify-center p-1 ${
                                  index === 1
                                    ? 'md:border-gradient bg-gray-1 md:bg-transparent'
                                    : ''
                                }`}
                                key={index}
                              >
                                {option === 'empty' ? (
                                  <div className="h-1 w-[15%] rounded-md bg-white"></div>
                                ) : option === 'check' ? (
                                  <Image
                                    src={checkMark}
                                    width={20}
                                    height={20}
                                    alt=""
                                  />
                                ) : (
                                  <p className="text-center text-white/80 md:text-white">
                                    {option}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      );
                    })
                  )}
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default PriceComponent;
