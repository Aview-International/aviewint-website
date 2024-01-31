import { useState } from 'react';
import Image from 'next/image';
import { SettingsLayout, Settings_Back_Button } from '..';
import Container from '../../../../components/UI/Container';
import Logo from '../../../../public/img/aview/logo.svg';
import WhiteYoutube from '../../../../public/img/icons/white-youtube.png';
import OnBoardingAccounts from '../../../../components/sections/reused/OnBoardingAccounts';
import Button from '../../../../components/UI/Button';
import { getIgAuthLink } from '../../../../services/apis';
import ErrorHandler from '../../../../utils/errorHandler';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import closeIcon from '../../../../public/img/icons/close.svg';

const DISTRIBUTION_ACCOUNTS = [
  {
    account_type: 'YouTube',
    accounts: [
      {
        title: "Aview International Espan'ol",
        subscribers: '2.28K subscribers',
      },
      {
        title: 'Aview International Portuguese',
        subscribers: '2.28K subscribers',
      },
    ],
  },
  {
    account_type: 'Instagram',
    accounts: [
      {
        title: "Aview International Espan'ol",
        subscribers: '99 followers',
      },
    ],
  },
  {
    account_type: 'Facebook',
    accounts: [
      {
        title: "Aview International Espan'ol",
        subscribers: '46 followers',
      },
    ],
  },
  {
    account_type: 'TikTok',
    accounts: [
      {
        title: "Aview International Espan'ol",
        subscribers: '5 followers',
      },
    ],
  },
];

const DistriubtionAccounts = () => {
  const [isNewAccount, setIsNewAccount] = useState(false);

  const handleNewAccount = () => setIsNewAccount(!isNewAccount);

  return (
    <>
      <div>
        <Settings_Back_Button title="Distribution accounts" />
        <Container
          left={
            <div className="flex flex-col justify-start gap-y-1">
              <p className="text-lg">Distribution</p>
              <p className="text-sm">
                Manage your international Accounts here.
              </p>
            </div>
          }
          right={
            <div className="w-full text-end">
              <Button
                type="secondary"
                purpose="onClick"
                onClick={handleNewAccount}
              >
                Add a social account
              </Button>
            </div>
          }
          isHeaderSection={true}
        />
        {DISTRIBUTION_ACCOUNTS.map((item, index) => (
          <Container
            key={`accounts-${index}`}
            left={
              <h3 className="text-lg">
                {item.account_type}{' '}
                <span className="inline md:hidden">
                  {'('}
                  {item.accounts.length}
                  {')'}
                </span>
              </h3>
            }
            right={
              <div className="grid grid-cols-2 gap-3 p-2">
                {item.accounts.map((el, idx) => (
                  <Account
                    key={`lang-${idx}`}
                    picture={Logo}
                    name="Aview International Espan'ol"
                    subscribers="2.28K subscribers"
                  />
                ))}
              </div>
            }
          />
        ))}
      </div>
      {isNewAccount ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90">
          <div className="rounded-md border-2 border-white/60 px-s4 py-s1">
            <Accounts handleAccounts={handleNewAccount} />
          </div>
        </div>
      ) : null}
    </>
  );
};

const Account = ({ picture, name, subscribers }) => (
  <div className="mb-s3 flex rounded-lg bg-white-transparent p-2">
    <Image src={picture} alt="Logo" width={48} height={48} />
    <div className="ml-s2">
      <h4 className="text-xl">{name}</h4>
      <p className="text-sm">{subscribers}</p>
    </div>
  </div>
);

const Accounts = ({ userData, handleAccounts }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });

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

  const linkYoutubeAccount = async () => {
    localStorage.setItem('userId', userData._id);
    setIsLoading((prev) => ({
      ...prev,
      youtube: true,
    }));
    window.location = await authorizeUser();
  };

  return (
    <>
      <Container
        left={<p className="mr-6 text-2xl">YouTube</p>}
        right={
          <OnBoardingAccounts
            classes="bg-[#ff0000]"
            isAccountConnected={userData?.youtube?.youtubeConnected}
            clickEvent={linkYoutubeAccount}
            account={
              <Image
                src={WhiteYoutube}
                alt="connect"
                width={100}
                height={22.5}
              />
            }
            isLoading={isLoading.youtube}
          />
        }
      />
      <Container
        left={<p className="mr-6 text-2xl">Instagram</p>}
        right={
          <OnBoardingAccounts
            isAccountConnected={userData?.instagram?.instagramConnected}
            classes="instagram"
            clickEvent={linkInstagramAccount}
            account="Instagram"
          />
        }
      />
      <Container
        left={<p className="mr-6 text-2xl">Facebook</p>}
        right={
          <OnBoardingAccounts
            isAccountConnected={userData?.facebook}
            classes="bg-[#0054ff]"
            account="Facebook"
          />
        }
      />
      <Container
        left={<p className="mr-6 text-2xl">TikTok</p>}
        right={
          <OnBoardingAccounts
            isAccountConnected={userData?.facebook}
            classes="bg-[#0054ff]"
            account="TikTok"
          />
        }
      />
    </>
  );
};

DistriubtionAccounts.getLayout = SettingsLayout;
export default DistriubtionAccounts;
