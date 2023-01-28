import { useContext, useEffect, useState } from 'react';
import { getUserProfile } from '../../pages/api/firebase';
import { UserContext } from '../../store/user-profile';
import FullScreenLoader from '../../public/loaders/FullScreenLoader';
import DashBoardHeader from './Header';
import DashboardSidebar from './Sidebar';

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
          <div className="ml-auto flex w-full flex-col items-stretch lg:w-[calc(100%-170px)]">
            <DashBoardHeader userInfo={userInfo} />
            <div className="mx-auto h-full w-full max-w-[1240px] self-stretch overflow-y-auto bg-black md:p-s4">
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
