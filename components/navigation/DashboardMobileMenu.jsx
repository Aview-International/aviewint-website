import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import aviewLogo from '../../public/img/aview/logo.svg';
import closeIcon from '../../public/img/icons/close.svg';
import { useRouter } from 'next/router';
import { DASHBOARD_NAVLINKS } from '../../constants/constants';

export default function DashboardMobileMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);
  return (
    <div
      className={`h-screen-trick transition-300 absolute top-0 left-0 z-50 flex w-2/4 flex-col gap-12 overflow-hidden bg-black px-6 pt-8 pb-10 lg:hidden ${
        menuOpenCtx.isMenuOpen
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <div className="flex h-12 flex-grow-0 items-center justify-between">
        {menuOpenCtx.isMenuOpen && (
          <div onClick={menuOpenCtx.closeMenuHandler}>
            <Link href="/dashboard">
              <div className="h-12 w-12">
                <Image
                  src={aviewLogo}
                  width={48}
                  height={48}
                  alt="aview logo"
                />
              </div>
            </Link>
          </div>
        )}
        <div className="h-7 w-7" onClick={menuOpenCtx.closeMenuHandler}>
          <Image src={closeIcon} width={28} height={28} alt="close icon" />
        </div>
      </div>
      <nav className="flex flex-grow flex-col justify-between overflow-hidden">
        <MainMenu />
      </nav>
      <div className={`flex-grow-0 flex-col gap-4`}>
        <Button
          purpose="route"
          route="/login"
          type="secondary"
          fullWidth={true}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export function MainMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);
  const { route } = useRouter();
  return (
    <div className="flex flex-col overflow-y-scroll">
      {DASHBOARD_NAVLINKS.map((menuItem, idx) => {
        return (
          <div onClick={menuOpenCtx.closeMenuHandler} key={idx}>
            <Link href={menuItem.route}>
              <a
                className={`group relative mb-s2 flex items-center rounded-[4px] py-s1 px-s0 hover:bg-[#fcfcfc] hover:bg-opacity-10 ${
                  route === menuItem.route && 'bg-[#fcfcfc] bg-opacity-10'
                }`}
              >
                <span
                  className={`gradient-1 absolute right-0 top-1/2 block h-4 w-1 -translate-y-1/2 rounded-md group-hover:animate-dropin ${
                    route === menuItem.route
                      ? 'visible'
                      : 'invisible group-hover:visible'
                  }`}
                ></span>
                <span
                  className={`mr-5 group-hover:animate-popup ${
                    route === menuItem.route
                      ? 'animate-popup'
                      : 'brightness-0 invert'
                  }`}
                >
                  <Image
                    src={menuItem.image}
                    alt={menuItem.text}
                    width={25}
                    height={25}
                    layout="fixed"
                  />
                </span>
                <span
                  className={`${
                    menuOpenCtx.isMenuOpen
                      ? ''
                      : 'absolute left-24 top-1 z-10 rounded-md '
                  }`}
                >
                  <span
                    className={`text-2xl ${
                      menuOpenCtx.isMenuOpen
                        ? ''
                        : 'hidden rounded-md  p-s1 group-hover:inline-block'
                    } ${route === menuItem.route ? 'text-[#fcfcfc]' : ''}`}
                  >
                    {menuItem.text}
                  </span>
                </span>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
