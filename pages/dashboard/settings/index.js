import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardLayout, {
  DashboardContainer,
} from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import Arrow from '../../../public/img/icons/arrow-back.svg';
import { useSelector } from 'react-redux';

const SETTINGS_LINKS = [
  {
    link: '/dashboard/settings/edit-profile',
    text: 'Edit Profile',
  },
  {
    link: '/dashboard/settings/distribution-accounts',
    text: 'Distribution accounts',
  },
  {
    link: '/dashboard/settings/email-notifications',
    text: 'Email notifications',
  },
  {
    link: '/dashboard/settings/privacy',
    text: 'Privacy and security',
  },
  {
    link: '/dashboard/settings/saved-settings',
    text: 'Saved settings',
  },
];

const EXTERNAL_LINKS = [
  {
    link: '/privacy-policy',
    text: 'Privacy Policy',
  },
  {
    link: '/privacy-policy',
    text: 'Terms of Service',
  },
  {
    link: '/request-data-deletion',
    text: 'Delete Account',
  },
];

const Settings = () => {
  const userInfo = useSelector((state) => state.user);
  return (
    <>
      <PageTitle title="Settings" />
      <DashboardContainer>
        <div className="mx-auto w-[1200px] text-white">
          <h2 className="text-7xl">Settings</h2>
          <div className="flex items-center p-s2">
            <Image
              src={userInfo?.picture}
              alt="Profile Picture"
              width={64}
              height={64}
              unoptimized
              className="rounded-full"
            />
            <p className="ml-s2 text-3xl">
              {userInfo.firstName} {userInfo?.lastName}
            </p>
          </div>
          {SETTINGS_LINKS.map(({ link, text }, index) => (
            <Link href={link} key={`settings-link-${index}`}>
              <a className="flex justify-between border-y border-white-transparent py-s2 px-s3 text-lg">
                {text}
                <Image
                  src={Arrow}
                  alt=""
                  width={6}
                  height={12}
                  className="rotate-180 brightness-0 invert"
                />
              </a>
            </Link>
          ))}
          <button className="w-full border-y border-white-transparent py-s2 px-s3 text-left text-lg">
            Sign Out
          </button>
          <p className="mt-s5 pl-s3 text-xl font-bold">More</p>
          {EXTERNAL_LINKS.map(({ link, text }, index) => (
            <a
              href={link}
              key={`settings-link-${index}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between border-y border-white-transparent py-s2 px-s3 text-lg"
            >
              {text}
              <Image
                src={Arrow}
                alt=""
                width={6}
                height={12}
                className="rotate-180 brightness-0 invert"
              />
            </a>
          ))}
        </div>
      </DashboardContainer>
    </>
  );
};

export default Settings;

const SettingsStructure = ({ children }) => {
  const { route } = useRouter();

  return (
    <div className="md:gradient-dark mx-auto flex h-full w-[1200px] rounded-2xl bg-black text-white">
      <aside className="hidden h-full w-56 border-r border-r-white-transparent md:block">
        <p className="py-s2 px-s3 text-2xl">Settings</p>
        {SETTINGS_LINKS.map(({ link, text }, index) => (
          <Link href={link} key={`settings-link-${index}`}>
            <a
              className={`block rounded py-s2 px-s3 text-lg ${
                route === link && 'bg-white-transparent'
              }`}
            >
              {text}
            </a>
          </Link>
        ))}
      </aside>
      <section className="w-full p-s1 md:w-[calc(100%-14rem)] md:p-s3">
        {children}
      </section>
    </div>
  );
};

// handle settings layout on desktop with side links
export const SettingsLayout = (page) =>
  DashboardLayout(<SettingsStructure>{page}</SettingsStructure>);

export const Settings_Back_Button = ({ children, title }) => {
  const router = useRouter();
  return (
    <div className="relative mb-s5 block md:hidden">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2"
        onClick={() => router.back()}
      >
        <Image
          src={Arrow}
          alt=""
          width={10}
          height={20}
          className="brightness-0 invert"
        />
      </button>
      <p className="text-center text-3xl">{title}</p>
      {children}
    </div>
  );
};
