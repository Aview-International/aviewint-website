import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import GlobalButton from '../UI/GlobalButton';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import aviewLogo from '../../public/img/aview/logo-white.png';
import MenuButtonIcon from './MenuButtonIcon';
import { useSelector } from 'react-redux';

const Header = ({ curPage }) => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <header className="border-b-[0.25px] border-white/20 bg-transparent p-6 text-white">
      <section className="navigation flex items-center">
        <Link href="/">
          <a className="-mb-1 mt-1 w-32 md:w-60">
            <Image
              src={aviewLogo}
              alt="AVIEW International logo"
              width="150"
              height="40"
            />
          </a>
        </Link>
        <div className="flex items-center md:gap-x-10 w-full justify-between">
          <DesktopMenu curPage={curPage} />
          <HeaderButtons />
        </div>
        <MenuButtonIcon handler={menuOpenCtx.openMenuHandler} />
      </section>
      <MobileMenu />
    </header>
  );
};

const HeaderButtons = () => {
  const isLoggedIn = useSelector((el) => el.user.isLoggedIn);

  return (
    <div className="hidden gap-5 lg:flex lg:mr-s2">
      {!isLoggedIn && (
        <GlobalButton purpose="route" route="/#generate-aview" type="primary">
          Contact Us
        </GlobalButton>
      )}

      {isLoggedIn ? (
        <GlobalButton purpose="route" route="/dashboard" type="secondary">
          Dashboard
        </GlobalButton>
      ) : (
        <GlobalButton purpose="route" route="/register" type="secondary">
          Sign Up
        </GlobalButton>
      )}
    </div>
  );
};

export default Header;
