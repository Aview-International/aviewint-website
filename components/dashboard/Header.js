import Image from 'next/image';
import Link from 'next/link';
import messages from '../../public/img/icons/messages.svg';

const DashBoardHeader = ({ user }) => {
  return (
    <header className="flex w-full items-center justify-between px-s9 py-s4 text-white">
      <div>
        <h3 className="text-xl">Good morning {user.firstName}!</h3>
        <p className="text-lg text-gray-2">Welcome to your Aview dashboard</p>
      </div>
      <div>
        <Link href="/dashboard/messages">
          <a className="flex items-center rounded-full bg-gray-1 px-s2 py-s1 text-sm">
            <span className="mr-s1.5 brightness-0 invert">
              <Image src={messages} alt="Messages" />
            </span>
            Messages
          </a>
        </Link>
      </div>
    </header>
  );
};

export default DashBoardHeader;
