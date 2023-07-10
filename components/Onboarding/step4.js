import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  InstagramAuthenticationLink,
  YoutubeAuthenticationLink,
  addYoutubeChannelId,
  getUserProfile,
  updateUserInstagram,
} from '../../pages/api/firebase';
import OnBoardingAccounts from '../sections/reused/OnBoardingAccounts';
import OnboardingButton from './button';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';

const OnboardingStep4 = () => {
  const router = useRouter();
  const userData = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });

  useEffect(() => {
    const token = router.asPath
      ?.split('access_token=')[1]
      ?.split('&token_type')[0];
    if (token) getChannelId(token);
  }, []);

  const getChannelId = async (token) => {
    setIsLoading({ ...isLoading, youtube: true });
    try {
      const response = await axios.post(
        'api/onboarding/link-youtube?get=channel',
        {
          token,
        }
      );
      await addYoutubeChannelId(
        response.data.items[0].snippet.title,
        response.data.items[0].id,
        Cookies.get('uid')
      );
      setIsLoading({ ...isLoading, youtube: false });
    } catch (error) {
      console.log(error);
    }
  };

  const linkInstagramAccount = async () => {
    router.push(InstagramAuthenticationLink);
  };

  const linkYoutubeAccount = async () => {
    router.push(YoutubeAuthenticationLink);
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
          isAccountConnected={userData?.ig_access_token}
          classes="instagram"
          clickEvent={linkInstagramAccount}
          account="Instagram"
        />
        <OnBoardingAccounts
          isAccountConnected={userData?.facebook}
          classes="bg-[#0054ff]"
          account="Facebook"
        />
        <OnBoardingAccounts
          classes="bg-[#000000]"
          isAccountConnected={userData?.tiktok}
          account="TikTok"
        />
        <OnBoardingAccounts
          classes="bg-[#ff0000]"
          isAccountConnected={userData?.youtubeChannelId}
          clickEvent={linkYoutubeAccount}
          account="YouTube"
          isLoading={isLoading.youtube}
        />
      </div>
      <div className="mx-auto mt-s4 w-[min(360px,90%)]">
        <OnboardingButton
          theme="dark"
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
