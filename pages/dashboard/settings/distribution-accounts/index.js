import { useState } from 'react';
import Image from 'next/image';
import { SettingsLayout } from '..';
import ErrorHandler from '../../../../utils/errorHandler';
import Cookies from 'js-cookie';
import {
  authorizeUser,
  getIgAuthLink,
  getTikTokAuthUrl,
} from '../../../../services/apis';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../../../components/UI/Button';
import Default from '../../../../public/img/graphics/user.webp';
import Trash from '../../../../public/img/icons/trash.svg';

const DistributionAccounts = () => {
  const [isLoading, setIsLoading] = useState({});
  const userData = useSelector((data) => data.user);
  const dispatch = useDispatch();

  const linkAccount = async (platform) => {
    Cookies.set(`${platform.toLocaleLowerCase()}Rdr`, window.location.pathname);
    setIsLoading((prev) => ({ ...prev, [platform]: true }));
    try {
      const getUrl = {
        Youtube: authorizeUser,
        Instagram: getIgAuthLink,
        Tiktok: getTikTokAuthUrl,
      };
      window.location.href = await getUrl[platform]();
    } catch (error) {
      setIsLoading((prev) => ({ ...prev, [platform]: false }));
      ErrorHandler(error);
    }
  };

  // const disconnectAccount = () => {};

  const renderAccountCard = (platform, name, status, icon, key) => {
    const commonProps = {
      onClick: () => linkAccount(platform),
      style: { opacity: isLoading[platform] ? 0.6 : 1 },
    };

    return (
      <div className="mb-4 flex items-center justify-between" key={key}>
        <h3 className="mr-3 text-lg font-semibold text-white">{platform}</h3>
        {status ? (
          <div
            {...commonProps}
            className="my-2 flex h-20 w-full max-w-sm cursor-pointer items-center justify-between rounded-lg bg-white-transparent p-3 md:w-8/12"
          >
            <div className="flex items-center">
              <Image
                src={icon || Default}
                alt={platform}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="text-gray-2">Status: Connected</p>
              </div>
            </div>
            {/* <Image
              src={Trash}
              alt="Disconnect"
              width={20}
              height={20}
              // onClick={(e) => {
              //   e.stopPropagation();
              //   disconnectAccount(platform);
              // }}
            /> */}
          </div>
        ) : (
          <div className="mr-12 mt-5 w-[30%]">
            <Button
              type="tertiary"
              purpose="onClick"
              {...commonProps}
              fullWidth={true}
            >
              <div className="m-2 flex items-center justify-center">
                <span>{platform}</span>
              </div>
            </Button>
          </div>
        )}
      </div>
    );
  };

  const socialAccounts = [
    {
      account: 'Youtube',
      accountName: userData?.youtube?.youtubeChannelTitle,
      isConnected: userData?.youtube?.youtubeConnected,
      image: '/img/icons/youtube-red.svg',
    },
    {
      account: 'Instagram',
      accountName: userData?.instagram?.instagram_username,
      isConnected: userData?.instagram?.instagramConnected,
      image: '/img/icons/instagram-2.svg',
    },
    {
      account: 'Facebook',
      accountName: 'Facebook',
      isConnected: userData?.facebook,
      image: '/img/icons/facebook-logo-onboarding.svg',
    },
    {
      account: 'Tiktok',
      accountName: 'Tiktok',
      isConnected: userData?.tiktok?.tiktokConnected,
      image: '/img/icons/tiktok.svg',
    },
  ];

  return (
    <div className="md:p-4">
      <h2 className="mb-6 text-2xl font-bold">Distribution</h2>
      <h3 className="text-md mb-11">Manage your international accounts here</h3>
      <div className="mr-auto max-w-xl">
        {socialAccounts.map(
          ({ account, accountName, isConnected, image }, idx) =>
            renderAccountCard(account, accountName, isConnected, image, idx)
        )}
      </div>
    </div>
  );
};

DistributionAccounts.getLayout = SettingsLayout;
export default DistributionAccounts;
