import { useEffect, useState } from 'react';
import FullScreenLoader from '../../public/loaders/FullScreenLoader';
import DashBoardHeader from './Header';
import DashboardSidebar from './Sidebar';
import useUserProfile from '../../hooks/useUserProfile';
import DashboardGradient from '../UI/DashboardGradient';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../../socket';
import Cookies from 'js-cookie';
import {
  setIncomingMessages,
  setNewMessageDot,
} from '../../store/reducers/messages.reducer';
import { useRouter } from 'next/router';

// this component fetches user profile
export const DashboardContainer = ({ children }) => {
  const { getProfile, isLoading } = useUserProfile();

  useEffect(() => {
    getProfile();
  }, []);

  return isLoading ? (
    <FullScreenLoader />
  ) : (
    <DashboardGradient>{children}</DashboardGradient>
  );
};

// this component renders the dashboard structure
const DashboardStructure = ({ children }) => {
  const socket = useSocket();
  const uid = Cookies.get('uid');
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (uid) {
      socket.auth = { userId: uid };
      socket.on('connect', () => {
        return;
      });

      socket.on('new_message', (message) => {
        dispatch(setIncomingMessages(message));
        if (router.pathname !== '/dashboard/messages')
          dispatch(setNewMessageDot(false));
      });
    }
    return () => {
      socket.disconnect();
    };
  }, [uid]);

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
            isOpen ? 'lg:w-[calc(100%-170px)]' : 'lg:w-[calc(100%-80px)]'
          }`}
        >
          <DashBoardHeader userInfo={userInfo} />
          <div className="mx-auto h-full w-full self-stretch overflow-y-auto bg-black/60 p-s3 text-white md:p-s4 overflow-y-auto">
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
