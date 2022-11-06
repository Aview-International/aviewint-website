import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DASHBOARD_NAVLINKS } from '../../constants/constants';
import aviewLogo from '../../public/img/aview/logo.svg';
import signout from '../../public/img/icons/signout.svg';

const DashboardSidebar = ({ user }) => {
  return (
    <aside className="flex max-h-screen w-[170px] flex-col items-center overflow-y-auto py-s4 text-white">
      <div>
        <Image
          src={aviewLogo}
          alt="AVIEW International logo"
          width={56}
          height={56}
        />
      </div>
      <Profile user={user} />
      <Navlink />
      <Signout />
    </aside>
  );
};

const Profile = ({ user }) => {
  return (
    <div className="justify-content mt-s8 mb-s5 flex flex-col items-center">
      <Image
        loader={() => user.picture}
        src={user.picture}
        alt="Profile Picture"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h3 className="mt-s2 mb-s1 text-lg">
        {user.firstName} {user?.lastName}
      </h3>
      <p className="text-sm">Content Creator</p>
    </div>
  );
};

const Navlink = () => {
  const { route } = useRouter();

  return (
    <div className="w-full text-sm">
      {DASHBOARD_NAVLINKS.map((link, index) => (
        <Link href={link.route} key={`sidebar-link-${index}`}>
          <a
            className={`mb-s3 flex items-center py-s1 px-s3 ${
              route === link.route && 'gradient-dark'
            }`}
          >
            <span
              className={`mr-5 ${
                route !== link.route ? 'brightness-0 invert' : ''
              }`}
            >
              <Image src={link.image} alt={link.text} width={20} height={20} />
            </span>
            <span
              className={route === link.route ? 'gradient-text gradient-1' : ''}
            >
              {link.text}
            </span>
          </a>
        </Link>
      ))}
    </div>
  );
};

const Signout = () => {
  return (
    <button className="mt-s8 flex w-full items-center px-s3 text-sm">
      <span className="mr-5">
        <Image src={signout} alt="Sign out" width={20} height={20} />
      </span>
      Sign Out
    </button>
  );
};

export default DashboardSidebar;