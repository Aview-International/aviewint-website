import { useEffect, useState } from 'react';
import FullScreenLoader from '../../public/loaders/FullScreenLoader';
import DashBoardHeader from './Header';
import DashboardSidebar from './Sidebar';
import useProfile from '../../hooks/useUserProfile';
import DashboardGradient from '../UI/DashboardGradient';
import Script from 'next/script';
import { useSelector } from 'react-redux';
import { getUserYoutubeChannel } from '../../services/apis';

// this component fetches user profile
export const DashboardContainer = ({ children }) => {
  const { handleGetProfile, handleGetYoutubeChannel } = useProfile();
  const [isLoading, setIsLoading] = useState(true);
  const getProfile = async () => {
    await handleGetProfile();
    await handleGetYoutubeChannel();
    setIsLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {isLoading ? (
        <FullScreenLoader />
      ) : (
        <DashboardGradient>{children}</DashboardGradient>
      )}
    </>
  );
};

// this component renders the dashboard structure
const DashboardStructure = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const userInfo = useSelector((state) => state.user);
  return (
    <>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
      />
      <DashboardContainer>
        <main className="flex min-h-screen w-full bg-white-transparent">
          <DashboardSidebar
            userInfo={userInfo}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
          <div
            className={`ml-auto flex w-full flex-col items-stretch ${
              isOpen ? 'lg:w-[calc(100%-170px)]' : 'lg:w-[calc(100%-80px)]'
            }`}
          >
            <DashBoardHeader userInfo={userInfo} />
            <div className="mx-auto h-full w-full max-w-[1480px] self-stretch overflow-y-auto bg-black/60 p-s3 text-white md:p-s4">
              {children}
            </div>
          </div>
        </main>
      </DashboardContainer>
    </>
  );
};

const DashboardLayout = (page) => (
  <DashboardStructure>{page}</DashboardStructure>
);
export default DashboardLayout;
