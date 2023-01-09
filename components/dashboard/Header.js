import Image from 'next/image';
import Link from 'next/link';
import messages from '../../public/img/icons/messages.svg';

const DashBoardHeader = ({ userInfo }) => {
  return (
    <header className="flex w-full items-center justify-between px-s9 py-s4 text-white">
      <div>
        <h3 className="text-xl">Good morning {userInfo.firstName}!</h3>
        <p className="text-lg text-gray-2">Welcome to your Aview dashboard</p>
      </div>
      <div>
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
