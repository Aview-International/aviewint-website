import { useContext, useEffect, useState } from 'react';
import { getUserProfile } from '../../pages/api/onboarding';
import { UserContext } from '../../store/user-profile';
import FullScreenLoader from '../../public/loaders/FullScreenLoader';
import DashBoardHeader from './Header';
import DashboardSidebar from './Sidebar';

// this component sends user profile only
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
  const { userInfo } = useContext(UserContext);
  return (
    <>
      <DashboardContainer>
        <main className="lg:gradient-dark flex min-h-screen w-full bg-black">
          <DashboardSidebar userInfo={userInfo} />
          <div className="ml-auto w-full lg:w-[calc(100%-170px)]">
            <DashBoardHeader userInfo={userInfo} />
            <div className="h-full overflow-y-auto bg-black p-s1 md:p-s4">
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
