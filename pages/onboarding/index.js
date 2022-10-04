import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3,
  OnboardingStep4,
  OnboardingStep5,
  OnboardingStep6,
  OnboardingSuccess,
} from '../../components/Onboarding';
import aviewLogo from '../../public/img/aview/logo.svg';
import ArrowBack from '../../public/img/icons/arrow-back.svg';

const Onboarding = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!window.location.search) router.push('/onboarding?stage=1');
  }, []);
  return (
    <>
      <div className="">
        <div className="px-5 py-2">
          <Image
            src={aviewLogo}
            alt="AVIEW International logo"
            width={40}
            height={40}
          />
        </div>
        <div
          style={{ width: `${Math.ceil((+router.query.stage * 100) / 7)}%` }}
          className="gradient-1 h-1 transition-all ease-in-out"
        ></div>
        <div className="relative">
          {router.query.stage !== '1' && (
            <button
              className="absolute top-2/4 -left-1/4 z-10 -translate-y-2/4"
              onClick={() => router.back()}
            >
              <Image src={ArrowBack} alt="Go back" width={16} height={32} />
            </button>
          )}
          <div className="min-w-2/4 mx-auto md:mt-s12 mb-s12 mt-s6 text-white">
            {children}
            <Stages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;

const Stages = () => {
  const { query } = useRouter();
  return (
    <>
      {query.stage === '1' && <OnboardingStep1 />}
      {query.stage === '2' && <OnboardingStep2 />}
      {query.stage === '3' && <OnboardingStep3 />}
      {query.stage === '4' && <OnboardingStep4 />}
      {query.stage === '5' && <OnboardingStep5 />}
      {query.stage === '6' && <OnboardingStep6 />}
      {query.stage === '7' && <OnboardingSuccess />}
    </>
  );
};
