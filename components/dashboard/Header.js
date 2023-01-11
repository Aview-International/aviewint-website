import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import messages from '../../public/img/icons/messages.svg';

const MobileButton = () => {
  const { pathname } = useRouter();

  return (
    <>
      <div className="absolute left-6 flex cursor-pointer flex-col items-start lg:hidden">
        <div className="mb-2 h-[3px] w-[36px] rounded-full bg-white"></div>
        <div className="mb-2 h-[3px] w-[21px] rounded-full bg-white"></div>
        <div className="h-[3px] w-[36px] rounded-full bg-white"></div>
      </div>
      <p className="block w-full text-center text-5xl capitalize md:hidden">
        {pathname.split('/')[2]}
      </p>
    </>
  );
};

const DashBoardHeader = ({ userInfo }) => {
  return (
    <header className="relative flex w-full items-center justify-between px-s4 py-s4 text-white md:px-s9">
      <MobileButton />
      <div className="hidden md:block">
        <h3 className="text-xl">Welcome {userInfo.firstName}!</h3>
        <p className="text-lg text-gray-2">Aview Dashboard</p>
      </div>
      <div className="hidden md:block">
        <Link href="/dashboard/messages">
          <a className="relative flex items-center rounded-full bg-gray-1 px-s2 py-s1 text-sm">
            <span className="mr-s1.5 brightness-0 invert">
              <Image src={messages} alt="Messages" />
            </span>
            <span className="absolute -bottom-1 right-0 inline-block h-4 w-4 rounded-full bg-red"></span>
            Messages
          </a>
        </Link>
      </div>
    </header>
  );
};

export default DashBoardHeader;
