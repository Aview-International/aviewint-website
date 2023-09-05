import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { updateRequiredServices } from '../../pages/api/firebase';
import Shadow from '../UI/Shadow';
import Border from '../UI/Border';
import Image from 'next/image';
import { ONBOARDING_STAGE_3 } from '../../constants/constants';
import OnboardingButton from './button';
import Cookies from 'js-cookie';
import ErrorHandler from '../../utils/errorHandler';

const OnboardingStep3 = ({ userData }) => {
  const router = useRouter();
  const [usage, setUsage] = useState('');
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

  useEffect(() => {
    setUsage(userData.usage);
  }, [userData]);

  const handleSelect = (option) => {
    setUsage(option);
  };

  const handleSubmit = async () => {
    try {
      setSideEffects({ ...sideEffects, hasSubmitted: true });
      if (!usage) return;
      setSideEffects({ ...sideEffects, isLoading: true });
      await updateRequiredServices({ usage }, Cookies.get('uid'));
      router.push('/onboarding?stage=4');
    } catch (error) {
      ErrorHandler(error);
    }
  };

  return (
    <div className="m-auto w-[min(800px,90%)]">
      <h2 className="text-5xl font-bold md:text-center md:text-6xl">
        How do you plan to use Aview?
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        Please choose one option to proceed.
      </p>
      <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-0">
        {ONBOARDING_STAGE_3.map((option, index) => {
          return (
            <div key={index}>
              <Shadow classes="md:w-[300px] md:h-[390px] w-full mr-s4 cursor-pointer">
                <Border borderRadius="2xl" classes="h-full w-full">
                  <div
                    className={`transition-300 h-full rounded-2xl bg-black p-s2 text-center ${
                      usage == option.title && 'gradient-1'
                    }`}
                    onClick={() => handleSelect(option.title)}
                  >
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={172}
                      height={172}
                    />
                    <div className="mt-3 flex h-full flex-col items-center justify-around md:mt-7 md:h-[127px]">
                      <h2 className="text-xl font-bold md:text-2xl">
                        {option.title}
                      </h2>
                      <p className="mt-s2 w-[85%] text-center text-lg">
                        {option.content}
                      </p>
                    </div>
                  </div>
                </Border>
              </Shadow>
            </div>
          );
        })}
      </div>
      <div className="m-auto my-s4 w-[min(360px,90%)]">
        <OnboardingButton
          theme="light"
          onClick={handleSubmit}
          isLoading={sideEffects.isLoading}
          disabled={!usage}
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};
export default OnboardingStep3;
