import { useRouter } from 'next/router';
import { useState } from 'react';
import OnBoardingAccounts from '../sections/reused/OnBoardingAccounts';
import OnboardingButton from './button';
import { authorizeUser, getIgAuthLink } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import Image from 'next/image';
import WhiteYoutube from '../../public/img/icons/white-youtube.png';

const OnboardingStep3 = ({ userData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });

  const linkInstagramAccount = async () => {
    try {
      setIsLoading((prev) => ({
        ...prev,
        instagram: true,
      }));
      window.location = await getIgAuthLink();
    } catch (error) {
      setIsLoading((prev) => ({
        ...prev,
        instagram: false,
      }));
      ErrorHandler(error);
    }
  };

  const linkYoutubeAccount = async () => {
    localStorage.setItem('userId', userData._id);
    setIsLoading((prev) => ({
      ...prev,
      youtube: true,
    }));
    try {
      window.location = await authorizeUser();
    } catch (error) {
      ErrorHandler(error);
    }
  };

  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-center text-3xl font-bold md:text-6xl">
        Connect your accounts
      </h2>
      <p className="mx-auto mt-s2 mb-s4 w-[min(610px,100%)] text-center text-lg md:text-xl">
        Connect your socials to get started!
      </p>
      <div className="m-auto w-[min(360px,80%)]">
        <OnBoardingAccounts
          classes="bg-[#ff0000]"
          isAccountConnected={userData?.youtube?.youtubeConnected}
          clickEvent={linkYoutubeAccount}
          account={
            <Image src={WhiteYoutube} alt="connect" width={100} height={22.5} />
          }
          isLoading={isLoading.youtube}
        />
        <OnBoardingAccounts
          isAccountConnected={userData?.instagram?.instagramConnected}
          classes="instagram"
          clickEvent={linkInstagramAccount}
          account="Instagram"
        />
        <OnBoardingAccounts
          isAccountConnected={userData?.facebook}
          classes="bg-[#0054ff]"
          account="TikTok"
        />
        <OnBoardingAccounts
          isAccountConnected={userData?.facebook}
          classes="bg-[#0054ff]"
          account="Facebook"
        />
      </div>
      <div className="mx-auto mt-s4 w-[min(360px,90%)]">
        <OnboardingButton
          theme="light"
          isLoading={isLoading.continue}
          onClick={() => router.push('/onboarding?stage=4')}
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};

export default OnboardingStep3;
