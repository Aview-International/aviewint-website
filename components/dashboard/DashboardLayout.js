import { useState } from 'react';
import FullScreenLoader from '../../public/loaders/FullScreenLoader';
import DashBoardHeader from './Header';
import DashboardSidebar from './Sidebar';
import useUserProfile from '../../hooks/useUserProfile';
import DashboardGradient from '../UI/DashboardGradient';
import { useSelector } from 'react-redux';

// this component fetches user profile
export const DashboardContainer = ({ children }) => {
  const { isLoading } = useUserProfile();

  return isLoading ? (
    <FullScreenLoader />
  ) : (
    <DashboardGradient>{children}</DashboardGradient>
  );
};

// this component renders the dashboard structure
const DashboardStructure = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const userInfo = useSelector((state) => state.user);

  return (
    <DashboardContainer>
      <main className="flex h-screen w-full bg-white-transparent">
        <DashboardSidebar
          userInfo={userInfo}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <div
          className={`ml-auto flex w-full flex-col items-stretch ${
            isOpen ? 'lg:w-[calc(100%-190px)]' : 'lg:w-[calc(100%-80px)]'
          }`}
        >
          <DashBoardHeader userInfo={userInfo} />
          <div className="mx-auto h-full w-full self-stretch overflow-y-auto bg-black/60 p-s3 text-white md:p-s4">
            {children}
          </div>
        </div>
      </main>
    </DashboardContainer>
  );
};

const DashboardLayout = (page) => (
  <DashboardStructure>{page}</DashboardStructure>
);

export default DashboardLayout;
