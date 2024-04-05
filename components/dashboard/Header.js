import { useContext, useEffect, useState, useMemo } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import DashboardMobileMenu from '../navigation/DashboardMobileMenu';
import MenuButtonIcon from '../navigation/MenuButtonIcon';
import { customGreeting } from '../../utils/greeting';
import { useSelector } from 'react-redux';

const DashBoardHeader = ({ userInfo }) => {
  const [time, setTime] = useState(customGreeting());

  const { videoTimeLeft, plan } = useSelector((state) => state.user);

  const getPlan = useMemo(() => {
    let planLimit = 0;
    if (plan === undefined) {
      planLimit = 15;
    } else if (plan === 'Creator Pro') {
      planLimit = 135;
    } else if (plan === 'Global Influencer') {
      planLimit = 900;
    }
    return planLimit;
  }, [plan]);

  const getPercentage = () => {
    const percentage = useMemo(() => {
      const val = (videoTimeLeft / (getPlan * 60)) * 100;
      return Math.round(val);
    }, [videoTimeLeft]);

    const circumference = 157;

    const oppositeOffset = useMemo(() => {
      const val = circumference - (percentage / 100) * circumference;
      return Math.round(val);
    }, [percentage]);

    const offset = circumference - oppositeOffset;
    return Math.round(offset);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(customGreeting());
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <header className="relative flex w-full items-center justify-between px-s4 py-s3 text-white md:px-s9">
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

      <div className="hidden rounded-lg bg-white-transparent py-1 px-4 md:block">
        <Circle offset={getPercentage()} timeLeft={videoTimeLeft} />
        <p className="mt-2 text-center text-xs">Usage Left</p>
      </div>
    </header>
  );
};

const Circle = ({ offset, timeLeft }) => {
  return (
    <div className="relative mx-5 flex h-14 w-14 items-center justify-center">
      <p className="text-sm font-semibold mt-2">
        {timeLeft}
        <span className="block text-[10px] text-center">secs</span>
      </p>
      <svg className="absolute -rotate-90" width="56" height="56">
        <circle
          cx="28"
          cy="28"
          r="25"
          fill="none"
          stroke="#000017"
          strokeWidth="7"
        ></circle>
        <circle
          cx="28"
          cy="28"
          r="25"
          fill="none"
          stroke="#00ffff"
          strokeWidth="4"
          strokeDasharray={157}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        ></circle>
      </svg>
    </div>
  );
};

export default DashBoardHeader;
