import { useState } from 'react';
import Image from 'next/image';
import { SettingsLayout } from '..';
import Container from '../../../../components/UI/Container';
import WhiteYoutube from '../../../../public/img/icons/white-youtube.png';
import OnBoardingAccounts from '../../../../components/sections/reused/OnBoardingAccounts';
import Button from '../../../../components/UI/Button';
import { getIgAuthLink } from '../../../../services/apis';
import ErrorHandler from '../../../../utils/errorHandler';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Shadow from '../../../../components/UI/Shadow.js';
import { authorizeUser } from '../../../../services/apis.js';
import OnboardingButton from '../../../../components/Onboarding/button';
import Modal from '../../../../components/UI/Modal';

const DistributionAccounts = () => {
  const [isNewAccount, setIsNewAccount] = useState(false);

  const handleNewAccount = () => setIsNewAccount(!isNewAccount);

  return (
    <>
      <div>
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
      </div>
      {isNewAccount ? (
        <Modal closeModal={handleNewAccount}>
          <div className="min-w-[400px]">
            <Accounts handleAccounts={handleNewAccount} />
          </div>
        </Modal>
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

const Accounts = ({ userData }) => {
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
    const userId = Cookies.get('uid');
    if (userId) {
      localStorage.setItem('userId', userId);
    } else {
      console.error('userId is undefined');
    }
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
              <OnboardingButton theme="dark">
                <Shadow classes="">
                  <Image
                    src={WhiteYoutube}
                    alt="connect"
                    width={100}
                    height={22.5}
                  />
                </Shadow>
              </OnboardingButton>
            }
            isLoading={isLoading.youtube}
          />
        }
      />
      <Container //Outdated, should create dynamic mapping like in Modals
        left={<p className="mr-6 text-2xl">Instagram</p>}
        right={
          <OnboardingButton theme="dark">
            <OnBoardingAccounts
              isAccountConnected={userData?.instagram?.instagramConnected}
              classes="instagram"
              clickEvent={linkInstagramAccount}
              account="Instagram"
            />
          </OnboardingButton>
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

DistributionAccounts.getLayout = SettingsLayout;
export default DistributionAccounts;
