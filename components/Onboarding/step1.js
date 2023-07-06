import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { updateAviewUsage } from '../../pages/api/firebase';
import Cookies from 'js-cookie';
import ComingSoon from '../UI/ComingSoon';
import Border from '../UI/Border';
import Image from 'next/image';
import Shadow from '../UI/Shadow';
import OnboardingButton from './button';
import { ONBOARDING_STAGE_1 } from '../../constants/constants';

const OnboardingStep1 = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    role: '',
    hasSubmitted: false,
    isLoading: false,
  });

  const handleSubmit = async () => {
    setUserData({ ...userData, hasSubmitted: true });
    if (!userData.role) return;
    setUserData({ ...userData, isLoading: true });
    try {
      await updateAviewUsage(userData.role, Cookies.get('uid'));
      router.push('/onboarding?stage=2');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-auto w-[min(1000px,90%)]">
      <h2 className="text-3xl md:text-center md:text-4xl">
        How are you planning to use Aview?
      </h2>
      <p className="mt-4 mb-8 text-lg text-white/90 md:text-center md:text-[19px]">
        We&#8217;ll streamline your setup experience accordingly.
      </p>
      <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-0">
        {ONBOARDING_STAGE_1.map((option, index) => {
          return (
            <Fragment key={index}>
              {option.desc === 'Coming Soon' ? (
                <ComingSoon stage={1}>
                  <Shadow classes="md:w-[300px] md:h-[390px] w-full mr-s4 cursor-pointer">
                    <Border borderRadius="2xl" classes="h-full w-full">
                      <div
                        className={`h-full rounded-2xl bg-black pt-s9 text-center`}
                      >
                        <Image
                          src={option.image}
                          alt={option.title}
                          width={172}
                          height={172}
                        />
                        <h3 className="mt-7 text-xl font-bold md:text-2xl">
                          {option.title}
                        </h3>
                      </div>
                    </Border>
                  </Shadow>
                </ComingSoon>
              ) : (
                <Shadow classes="md:w-[300px] md:h-[390px] w-full mr-s4 cursor-pointer">
                  <Border borderRadius="2xl" classes="h-full w-full">
                    <div
                      className={`transition-300 h-full rounded-2xl bg-black p-s2 text-center ${
                        userData.role === option.data && 'gradient-1'
                      }`}
                      onClick={() =>
                        setUserData({ ...userData, role: option.data })
                      }
                    >
                      <Image
                        src={option.image}
                        alt={option.title}
                        width={172}
                        height={172}
                      />
                      <div className="mt-3 flex h-full flex-col items-center justify-around md:mt-7 md:h-[127px]">
                        <h3 className="text-xl font-bold md:text-2xl">
                          {option.title}
                        </h3>
                        <p className="mt-s2 text-center text-lg md:text-xl">
                          {option.desc}
                        </p>
                      </div>
                    </div>
                  </Border>
                </Shadow>
              )}
            </Fragment>
          );
        })}
      </div>
      <div className="m-auto mt-s4 w-[min(360px,90%)]">
        <OnboardingButton
          disabled={!userData.role}
          onClick={handleSubmit}
          isLoading={userData.isLoading}
          theme="dark"
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};

export default OnboardingStep1;
