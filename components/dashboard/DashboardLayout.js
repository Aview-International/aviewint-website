import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../store/user-profile';
import FullScreenLoader from '../../public/loaders/FullScreenLoader';
import DashBoardHeader from './Header';
import DashboardSidebar from './Sidebar';
import useProfile from '../../hooks/useProfile';

// this component fetches user profile
export const DashboardContainer = ({ children }) => {
  const { handleGetProfile } = useProfile();
  const [isLoading, setIsLoading] = useState(true);
  const getProfile = async () => {
    try {
      await handleGetProfile();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  return <> {isLoading ? <FullScreenLoader /> : children}</>;
};

// this component renders the dashboard structure
const DashboardStructure = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { userInfo } = useContext(UserContext);

  return (
    <>
      <DashboardContainer>
        <main className="flex min-h-screen w-full bg-black">
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
            <div className="mx-auto h-full w-full max-w-[1480px] self-stretch overflow-y-auto bg-black md:p-s4">
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
