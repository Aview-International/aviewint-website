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
      planLimit = 5;
    } else if (plan === 'pro') {
      planLimit = 45;
    } else if (plan === 'unlimited') {
      planLimit = 300;
    }
    return planLimit;
  }, [plan]);

  const circumference = 157;
  const videoTimeLeftInMinutes = useMemo(() => {
    return videoTimeLeft / 60;
  }, [videoTimeLeft]);

  const percentage = useMemo(() => {
    const val = (videoTimeLeftInMinutes / getPlan) * 100;
    return Math.round(val);
  }, [videoTimeLeftInMinutes, getPlan]);

  const offset = useMemo(() => {
    const val = (percentage / 100) * circumference;
    return Math.round(val);
  }, [percentage, circumference]);

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
    <header className="relative flex w-full items-center justify-between px-s4 pt-s2 pb-s1 text-white md:px-s9">
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
      <div className="hidden md:block bg-white-transparent rounded-2xl p-2">
        <Circle videoTimeLeft={videoTimeLeftInMinutes} offset={offset} />
        <p className="mt-2 text-center text-sm">Usage Left</p>
      </div>
      {/* <div className="hidden md:block">
          <Circle videoTimeLeft={videoTimeLeftInMinutes} offset={offset} />
          <p className="mt-2 text-center text-xs">Dubbing</p>
        </div>
        <div className="hidden md:block">
          <Circle videoTimeLeft={videoTimeLeftInMinutes} offset={offset} />
          <p className="mt-2 text-center text-xs">Transcriptions</p>
        </div>
        <div className="hidden md:block">
          <Circle videoTimeLeft={videoTimeLeft} offset={offset} />
          <p className="mt-2 text-center text-xs">AI Voiceovers</p>
        </div> */}
    </header>
  );
};

const Circle = ({ offset, videoTimeLeft }) => {
  
  return (
    <div className="relative mx-5 flex h-14 w-14 items-center justify-center">
      <p className="mt-2 text-center text-sm font-semibold">
        {Math.round(videoTimeLeft)}
        <span
          className="block text-center text-[10px]"
          style={{ lineHeight: '0.75rem' }}
        >
          min
        </span>
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
