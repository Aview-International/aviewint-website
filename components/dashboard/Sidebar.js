import Image from 'next/image';
import Link from 'next/link';
import { DASHBOARD_NAVLINKS } from '../../constants/constants';
import aviewLogo from '../../public/img/aview/logo.svg';
import signout from '../../public/img/icons/signout.svg';
import sidebarArrow from '../../public/img/icons/sidebar-arrow.svg';
import { useRouter } from 'next/router';
import { logoutUser } from '../../pages/api/firebase';

const DashboardSidebar = ({ userInfo, setIsOpen, isOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? 'w-[170px]' : 'w-[80px]'
      } hidden flex-col items-center py-s4 text-white transition-all lg:flex`}
    >
      <div className="flex w-full items-center justify-between px-s2">
        {isOpen && (
          <Link href="/dashboard">
            <a>
              <Image
                src={aviewLogo}
                alt="AVIEW International logo"
                width={48}
                height={48}
              />
            </a>
          </Link>
        )}
        <button
          className={!isOpen ? 'rotate-180' : ''}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={sidebarArrow} alt="arrow" />
        </button>
      </div>
      <Profile userInfo={userInfo} isOpen={isOpen} />
      <Navlink isOpen={isOpen} />
      <Signout isOpen={isOpen} />
    </aside>
  );
};

const Profile = ({ userInfo, isOpen }) => {
  return (
    <div
      className={`justify-content mt-s8 mb-s5 flex flex-col items-center gap-2 p-0 duration-300`}
    >
      {userInfo?.picture && (
        <Image
          src={userInfo.picture}
          alt="Profile Picture"
          width={`${isOpen ? 80 : 40}`}
          height={`${isOpen ? 80 : 40}`}
          className="rounded-full"
        />
      )}
      {isOpen && (
        <>
          <h3
            className={`mt-s2 mb-s1 text-center text-lg ${
              !isOpen && 'invisible opacity-0'
            }`}
          >
            {userInfo.firstName} {userInfo?.lastName}
          </h3>
          <p className={`text-sm ${!isOpen && 'invisible opacity-0'}`}>
            Content Creator
          </p>
        </>
      )}
    </div>
  );
};

const Navlink = ({ isOpen }) => {
  const { route } = useRouter();
  return (
    <>
      <div className="w-full text-sm">
        {DASHBOARD_NAVLINKS.map((link, index) => (
          <Link
            href={link.route('/dashboard/settings/edit-profile')}
            key={`sidebar-link-${index}`}
          >
            <a
              className={`group relative mb-s2 flex items-center rounded-[4px] py-s1 px-s3 hover:bg-[#fcfcfc] hover:bg-opacity-10 ${
                route === link.route() && 'bg-[#fcfcfc] bg-opacity-10'
              }`}
            >
              <span
                className={`gradient-1 absolute right-0 top-1/2 block h-4 w-1 -translate-y-1/2 rounded-md group-hover:animate-dropin ${
                  route === link.route()
                    ? 'visible'
                    : 'invisible group-hover:visible'
                }`}
              ></span>
              <span
                className={`mr-5 group-hover:animate-popup ${
                  route === link.route()
                    ? 'animate-popup'
                    : 'brightness-0 invert'
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
              <span
                className={`${
                  isOpen
                    ? ''
                    : 'absolute left-24 top-1 z-10 rounded-md bg-white-transparent'
                }`}
              >
                <span
                  className={`${
                    isOpen
                      ? ''
                      : 'hidden rounded-md bg-white-transparent p-s1 group-hover:inline-block'
                  } ${route === link.route() ? 'text-[#fcfcfc]' : ''}`}
                >
                  {link.text}
                </span>
              </span>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

const Signout = ({ isOpen }) => {
  const handleLogout = async () => {
    await logoutUser();
    window.location.href = '/';
  };
  return (
    <button
      onClick={handleLogout}
      className={`hover:gradient-dark group relative mb-s2 mt-s10 flex w-full items-center py-s1 px-s3 text-sm`}
    >
      <span
        className={`gradient-1 invisible absolute right-0 top-1/2 block h-4 w-1 -translate-y-1/2 rounded-md group-hover:visible group-hover:animate-dropin`}
      ></span>
      <span
        className={`mr-5 brightness-0 invert group-hover:animate-popup group-hover:brightness-100 group-hover:invert-0`}
      >
        <Image
          src={signout}
          alt={'Sign Out'}
          width={20}
          height={20}
          layout="fixed"
        />
      </span>
      <span
        className={`${
          isOpen ? '' : 'gradient-dark absolute left-24 top-1 z-10 rounded-md'
        }`}
      >
        <span
          className={
            isOpen
              ? ''
              : 'hidden w-max rounded-md bg-white-transparent p-s1 group-hover:inline-block'
          }
        >
          Sign Out
        </span>
      </span>
    </button>
  );
};

export default DashboardSidebar;
