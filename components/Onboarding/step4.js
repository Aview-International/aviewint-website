import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import {
  InstagramAuthenticationLink,
  YoutubeAuthenticationLink,
  updateRequiredServices,
} from '../../pages/api/firebase';
import OnBoardingAccounts from '../sections/reused/OnBoardingAccounts';
import OnboardingButton from './button';
import Cookies from 'js-cookie';

const OnboardingStep4 = ({ userData }) => {
  const router = useRouter();

  const windowLocation = useMemo(() => {
    return window.location.href;
  }, []);

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
        { token }
      );
      await updateRequiredServices(
        {
          youtubeChannelName: response.data.items[0].snippet.title,
          youtubeChannelId: response.data.items[0].id,
        },
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
    router.push(YoutubeAuthenticationLink(windowLocation));
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
          isAccountConnected={userData?.youtubeChannelId}
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
        {/* <OnBoardingAccounts
          classes="bg-[#1DA1F2]"
          isAccountConnected={true}
          account="Twitter"
        /> */}
        {/* <OnBoardingAccounts
          classes="bg-[#000000]"
          isAccountConnected={true}
          account="TikTok"
        /> */}
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
