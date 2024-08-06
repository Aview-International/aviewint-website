import { useState } from 'react';
import Image from 'next/image';
import { SettingsLayout } from '..';
import WhiteYoutube from '../../../../public/img/icons/white-youtube.png';
import OnBoardingAccounts from '../../../../components/sections/reused/OnBoardingAccounts';
import ErrorHandler from '../../../../utils/errorHandler';
import Cookies from 'js-cookie';
import {
  authorizeUser,
  getIgAuthLink,
  getTikTokAuthUrl,
} from '../../../../services/apis';
import { useSelector } from 'react-redux';

const DistributionAccounts = () => {
  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });
  const userData = useSelector((data) => data.user);

  const linkYoutubeAccount = async () => {
    Cookies.set('youtubeRdr', window.location.pathname);
    setIsLoading((prev) => ({
      ...prev,
      youtube: true,
    }));
    window.location = await authorizeUser();
  };

  const linkTikTokAccount = async () => {
    try {
      Cookies.set('tiktokRdr', window.location.pathname);
      const url = await getTikTokAuthUrl();
      window.location.href = url;
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const linkInstagramAccount = async () => {
    Cookies.set('instagramRedirect', router.pathname);
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

  return (
    <>
      <div>
        <div className="flex flex-col justify-start gap-y-1">
          <p className="text-xl">Manage your social media accounts here.</p>
        </div>
      </div>
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
        <span>
          {userData.youtube.youtubeChannelTitle &&
            userData.youtube.youtubeChannelTitle}
        </span>

        <OnBoardingAccounts
          isAccountConnected={userData?.instagram?.instagramConnected}
          classes="instagram"
          clickEvent={linkInstagramAccount}
          account="Instagram"
        />
        <span>
          {userData.youtube.youtubeChannelTitle &&
            userData.youtube.youtubeChannelTitle}
        </span>
        <OnBoardingAccounts
          isAccountConnected={userData?.tiktok?.tiktokConnected}
          clickEvent={linkTikTokAccount}
          classes="bg-[#0054ff]"
          account="TikTok"
        />
        <OnBoardingAccounts
          isAccountConnected={userData?.facebook}
          classes="bg-[#0054ff]"
          account="Facebook"
        />
      </div>
    </>
  );
};

DistributionAccounts.getLayout = SettingsLayout;
export default DistributionAccounts;
