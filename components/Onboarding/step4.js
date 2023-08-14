import { useRouter } from 'next/router';
import { useState } from 'react';
import { InstagramAuthenticationLink } from '../../pages/api/firebase';
import OnBoardingAccounts from '../sections/reused/OnBoardingAccounts';
import OnboardingButton from './button';
import { authorizeUser } from '../../services/apis';

const OnboardingStep4 = ({ userData }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });

  const linkInstagramAccount = async () => {
    router.push(InstagramAuthenticationLink);
  };

  const linkYoutubeAccount = async () => {
    localStorage.setItem('userId', userData._id);
    setIsLoading((prev) => ({
      ...prev,
      youtube: true,
    }));
    window.location = await authorizeUser();
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
          isAccountConnected={userData?.youtubeConnected}
          clickEvent={linkYoutubeAccount}
          account="YouTube"
          isLoading={isLoading.youtube}
        />
        <OnBoardingAccounts
          isAccountConnected={userData?.instagram_account_id}
          classes="instagram"
          clickEvent={linkInstagramAccount}
          account="Instagram"
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
          onClick={() => router.push('/onboarding?stage=5')}
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};

export default OnboardingStep4;
