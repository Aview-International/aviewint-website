import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import Link from 'next/link';
import messages from '../../public/img/icons/messages.svg';
import DashboardMobileMenu from '../navigation/DashboardMobileMenu';
import MenuButtonIcon from '../navigation/MenuButtonIcon';
import { customGreeting } from '../../utils/greeting';
import { useSelector } from 'react-redux';
import { createCheckoutSesion } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';

const DashBoardHeader = ({ userInfo }) => {
  const [time, setTime] = useState(customGreeting());
  const messageStatus = useSelector((state) => state.messages.status);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(customGreeting());
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const menuOpenCtx = useContext(MenuOpenContext);

  const handlePricing = async () => {
    try {
      await createCheckoutSesion();
    } catch (error) {
      ErrorHandler(error);
    }
  };

  return (
    <header className="relative flex w-full items-center justify-between px-s4 py-s4 text-white md:px-s9">
      <MenuButtonIcon
        handler={menuOpenCtx.openMenuHandler}
        styles={'absolute left-6'}
      />
      <DashboardMobileMenu />
      <div className="hidden md:block">
        <h3 className="text-xl">
          {time} <span className="font-bold">{userInfo.firstName}!</span>
        </h3>
        <p className="text-lg text-gray-2">Welcome to your Aview Dashboard</p>
      </div>
      <button onClick={handlePricing}>Checkout</button>
      <div className="hidden md:block">
        <Link href="/dashboard/messages">
          <a className="relative flex items-center rounded-full bg-gray-1 px-s2 py-2.5 text-sm">
            <span className="mr-s1.5 grid place-content-center brightness-0 invert">
              <Image src={messages} alt="Messages" />
            </span>
            <span className="mt-0.5">Messages</span>
            {messageStatus.readByUser === false && (
              <span className="absolute -bottom-0.5 -right-0.5 inline-block h-4 w-4 rounded-full bg-red" />
            )}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default DashBoardHeader;
