import { useContext, useEffect, useState } from 'react';
import { getUserProfile } from '../../pages/api/firebase';
import { UserContext } from '../../store/user-profile';
import FullScreenLoader from '../../public/loaders/FullScreenLoader';
import DashBoardHeader from './Header';
import DashboardSidebar from './Sidebar';
import { ProtectedRoutes } from '../../utils/autoLogout';

export const DashboardContainer = ({ children }) => {
  const { setUserInfo } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const getProfile = async () => {
    try {
      const _id = localStorage.getItem('uid');
      const res = await getUserProfile(_id);
      setUserInfo(res);
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
  <ProtectedRoutes>
    <DashboardStructure>{page}</DashboardStructure>
  </ProtectedRoutes>
);
export default DashboardLayout;
