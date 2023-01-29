import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DASHBOARD_NAVLINKS } from '../../constants/constants';
import aviewLogo from '../../public/img/aview/logo.svg';
import signout from '../../public/img/icons/signout.svg';
import sidebarArrow from '../../public/img/icons/sidebar-arrow.svg';
import { useState } from 'react';

const DashboardSidebar = ({ userInfo, setIsOpen, isOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? 'w-[170px]' : 'w-[80px]'
      } fixed top-0 left-0 hidden max-h-screen flex-col items-center overflow-y-auto py-s4 pr-2 text-white lg:flex`}
    >
      <div className="flex w-full items-center justify-between px-s2">
        <Link href="/dashboard">
          <a>
            <Image
              src={aviewLogo}
              alt="AVIEW International logo"
              width={56}
              height={56}
            />
          </a>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Image src={sidebarArrow} alt="" />
        </button>
      </div>
      <Profile userInfo={userInfo} isOpen={isOpen} />
      <Navlink isOpen={isOpen} />
      <Signout />
    </aside>
  );
};

const Profile = ({ userInfo, isOpen }) => {
  return (
    <div className="justify-content mt-s8 mb-s5 flex flex-col items-center">
      <Image
        src={userInfo?.picture}
        alt="Profile Picture"
        width={100}
        height={100}
        className="rounded-full"
      />
      {isOpen && (
        <>
          <h3 className="mt-s2 mb-s1 text-lg">
            {userInfo.firstName} {userInfo?.lastName}
          </h3>
          <p className="text-sm">Content Creator</p>
        </>
      )}
    </div>
  );
};

const Navlink = ({ isOpen }) => {
  const { route } = useRouter();

  return (
    <div className="w-full text-sm">
      {DASHBOARD_NAVLINKS.map((link, index) => (
        <Link href={link.route} key={`sidebar-link-${index}`}>
          <a
            className={`hover:gradient-dark group relative mb-s2 flex items-center py-s1 px-s3 ${
              route === link.route && 'gradient-dark'
            }`}
          >
            <span
              className={`gradient-1 absolute right-0 top-1/4 block h-5 w-1 rounded-md group-hover:animate-dropin ${
                route === link.route
                  ? 'visible'
                  : 'invisible group-hover:visible'
              }`}
            ></span>
            <span
              className={`mr-5 group-hover:animate-popup ${
                route === link.route ? 'animate-popup' : 'brightness-0 invert'
              }`}
            >
              <Image
                src={link.image}
                alt={link.text}
                width={20}
                height={20}
                layout="fixed"
              />
            </span>
            {isOpen && (
              <span
                className={
                  route === link.route ? 'gradient-text gradient-1' : ''
                }
              >
                {link.text}
              </span>
            )}
          </a>
        </Link>
      ))}
    </div>
  );
};

const Signout = () => {
  const handleLogout = () => {
    localStorage.removeItem('uid');
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <button
      className="mt-s8 flex w-full items-center px-s3 text-sm"
      onClick={handleLogout}
    >
      <span className="mr-5">
        <Image src={signout} alt="Sign out" width={20} height={20} />
      </span>
      Sign Out
    </button>
  );
};

export default DashboardSidebar;
