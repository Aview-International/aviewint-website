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
    link: '/dashboard/settings/profile',
    text: 'Profile',
  },
  {
    link: '/dashboard/settings/billing',
    text: 'Billing & Plans',
  },
  {
    link: '/dashboard/settings/distribution-accounts',
    text: 'Distribution Accounts',
  },
  {
    link: '/dashboard/settings/languages',
    text: 'Languages',
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
      <DashboardContainer>
        <div className="mx-auto p-s2 text-white">
          <h2 className="my-3 text-xl">Settings</h2>
          <div className="items-center] mb-2 flex">
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
                  alt="nav-link"
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
                alt="arrow"
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
Settings.getLayout = DashboardLayout;
export default Settings;

const SettingsStructure = ({ children }) => {
  const { route } = useRouter();

  return (
    <>
      <PageTitle title="Settings" />
      <div className="md:gradient-dark mx-auto flex min-h-full flex-col gap-y-s2 rounded-2xl bg-black px-s3 text-white">
        <p className="py-s2 text-2xl">Settings</p>
        <aside className="hidden w-full flex-row items-start justify-start gap-x-4 md:flex">
          {SETTINGS_LINKS.map(({ link, text }, index) => (
            <Link href={link} key={`settings-link-${index}`}>
              <a
                className={`block rounded-lg py-s1 px-s2 text-lg ${
                  route === link && 'bg-white-transparent'
                }`}
              >
                {text}
              </a>
            </Link>
          ))}
        </aside>
        <hr/>
        <section className="h-full w-full py-s1.5">{children}</section>
      </div>
    </>
  );
};

// handle settings layout on desktop with side links
export const SettingsLayout = (page) =>
  DashboardLayout(<SettingsStructure>{page}</SettingsStructure>);
