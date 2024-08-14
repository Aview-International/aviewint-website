import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SettingsLayout } from '..';
import ErrorHandler from '../../../../utils/errorHandler';
import Cookies from 'js-cookie';
import {
  authorizeUser,
  getIgAuthLink,
  getTikTokAuthUrl,
} from '../../../../services/apis';
import { useSelector } from 'react-redux';
import Button from '../../../../components/UI/Button';

const DistributionAccounts = () => {
  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });
  const userData = useSelector((data) => data.user);

  useEffect(() => {
    console.log('userData:', userData);
  }, [userData]);

  const linkAccount = async (platform) => {
    Cookies.set(`${platform}Rdr`, window.location.pathname);
    setIsLoading((prev) => ({ ...prev, [platform]: true }));
    try {
      let url;
      switch (platform) {
        case 'Youtube':
          url = await authorizeUser();
          break;
        case 'Instagram':
          url = await getIgAuthLink();
          break;
        case 'Tiktok':
          url = await getTikTokAuthUrl();
          break;
        // Add Facebook case when available
      }
      window.location.href = url;
    } catch (error) {
      setIsLoading((prev) => ({ ...prev, [platform]: false }));
      ErrorHandler(error);
    }
  };

  const disconnectAccount = async (platform) => {
    try {
      // call an API to disconnect the account
      // For now, just update the local state
      dispatch({
        type: 'DISCONNECT_ACCOUNT',
        payload: { platform: platform.toLowerCase() }
      });
      // show a success message here
    } catch (error) {
      ErrorHandler(error);
      //  show an error message here
    }
  };

  const renderAccountCard = (platform, name, status, icon) => {
    if (status) {
      // If the account is connected, render the full card
      return (
        <div className="flex justify-evenly mb-4 mr-20">
          <h3 className="text-lg text-white font-semibold mr-15 mt-5">{platform}</h3>
          <div
            onClick={() => linkAccount(platform)}
            className="flex w-[30%] h-20 items-center justify-between p-4 mt-2 mb-2 rounded-lg bg-white-transparent cursor-pointer"
            style={{ opacity: isLoading[platform] ? 0.6 : 1 }}
          >
            <div className="flex items-center">
              <Image
                src={userData?.picture || '/img/icons/default-avatar.png'}
                alt={name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-white font-semibold">
                  {userData[platform]?.name || 'Account Name'}
                </h3>
                <p className="text-gray-400">Status: Connected</p>
              </div>
            </div>
            <Image
              src="/img/icons/trash.svg"
              alt="Disconnect"
              width={20}
              height={20}
              onClick={(e) => {
                e.stopPropagation();
                disconnectAccount(platform);
              }}
            />
          </div>
        </div>
      );
    } else {
      // If the account is not connected, render a simple button using Button.js
      return (
        <div className="flex justify-evenly mb-4 mr-20 w-full">
          <h3 className="text-lg text-white font-semibold mt-5">{platform}</h3>
          <div className="w-[30%] mr-12 mt-5"> 
            <Button
              type="tertiary"
              purpose="onClick"
              onClick={() => linkAccount(platform)}
              fullWidth={true}
            >
              <div className="flex items-center justify-center m-2">
                <span>{name}</span>
              </div>
            </Button>
          </div>
        </div>
      );
      
    }
  };
  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Distribution</h2>
        
        {/* 
        <Button
          className="px-6 py-2 text-white bg-purple-600 rounded"
          onClick={() => {}}
          type="tertiary"
        >
          Add a social account
        </Button>
      */}

      </div>
      <h3 className="text-md mb-11 ">Manage your international accounts here</h3>

      {renderAccountCard('Youtube', 'YouTube', userData?.youtube?.youtubeConnected, '/img/icons/youtube-red.svg')}
      {renderAccountCard('Instagram', 'Instagram', userData?.instagram?.instagramConnected, '/img/icons/instagram-2.svg')}
      {renderAccountCard('Facebook', 'Facebook', userData?.facebook, '/img/icons/facebook-logo-onboarding.svg')}
      {renderAccountCard('Tiktok', 'TikTok', userData?.tiktok?.tiktokConnected, '/img/icons/tiktok.svg')}
    </div>
  );
};

DistributionAccounts.getLayout = SettingsLayout;
export default DistributionAccounts;
