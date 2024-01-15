import Image from 'next/image';
import Edit from '../../../public/img/icons/edit.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ChatSidebar = ({ allAIThreads }) => {
  const { asPath } = useRouter();
  return (
    <div>
      <Link href="/dashboard/chat-assist">
        <div
          className={`flex flex-row items-center justify-between rounded-tl-xl p-4 hover:bg-white-transparent
          ${
            asPath === `/dashboard/chat-assist` ? 'bg-white-transparent' : ''
          } p-3 font-medium hover:bg-white-transparent`}
        >
          <p className="text-sm">New chat</p>
          <Image src={Edit} alt="edit-logo" width={16} height={16} />
        </div>
      </Link>
      {allAIThreads.map((data, i) => (
        <Link href={`/dashboard/chat-assist/${data.threadId}`} key={i}>
          <a
            className={`mt-2 block ${
              asPath === `/dashboard/chat-assist/${data.threadId}`
                ? 'bg-white-transparent'
                : ''
            } p-3 font-medium hover:bg-white-transparent`}
          >
            {data.title}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ChatSidebar;
