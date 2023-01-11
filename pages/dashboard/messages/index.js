import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import akshay from '../../../public/img/team/akshay.png';
import andrew from '../../../public/img/team/andrew.png';
import david from '../../../public/img/team/david.png';
import garnet from '../../../public/img/team/garnet.png';
import victor from '../../../public/img/team/victor.png';
import luis from '../../../public/img/team/luis.png';
import defaultPicture from '../../../public/img/team/default.png';
import Edit from '../../../public/img/icons/edit.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useWindowSize from '../../../hooks/useWindowSize';
import Logo from '../../../public/img/aview/logo.svg';

// This compoen m b dkdfb e
// author Victor
const EmptyState = ({}) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image src={Logo} alt="Aview" width={120} height={120} />
      <p className="mt-s3 text-2xl">Select a message to view the content</p>
    </div>
  );
};

const Sender = ({ picture, name, id, query, width }) => {
  return (
    <Link href={`/dashboard/messages/${id}`}>
      <a
        className={`flex items-center rounded md:my-s1 md:px-s2 ${
          query.id === id && 'gradient-1'
        }`}
      >
        <div className="mr-s1 flex items-center justify-center">
          <Image
            src={picture}
            alt={name}
            width={width > 767 ? 24 : 48}
            height={width > 767 ? 24 : 48}
            className="rounded-full"
          />
        </div>
        <p className="w-full border-y border-white-transparent py-s1 text-lg md:border-none">
          {name}
          <br />
          <span className="inline text-sm text-gray-2 md:hidden">
            Start a conversation with David.
          </span>
        </p>
      </a>
    </Link>
  );
};

const Messages = ({ children }) => {
  const { width } = useWindowSize();
  const { query } = useRouter();
  const SENDERS = [
    {
      name: 'Andrew Qiao',
      picture: andrew,
      id: '1234',
    },
    {
      name: 'David Lovenburg',
      picture: david,
      id: '8765456',
    },
    {
      name: 'Luis Sarcenõ',
      picture: luis,
      id: '4567',
    },
    {
      name: 'Garnet Desley',
      picture: garnet,
      id: '8765678',
    },
    {
      name: 'Victor Ogunjobi',
      picture: victor,
      id: '876533',
    },
    {
      name: 'Akshay Maharaj',
      picture: akshay,
      id: '8765665',
    },
    {
      name: 'Unknown',
      picture: defaultPicture,
      id: '987652',
    },
  ];

  return (
    <>
      <PageTitle title="Messages" />
      <div className="flex h-full rounded-2xl bg-white-transparent text-white">
        {((query.id && width > 768) || !query.id) && (
          <div className="w-full rounded-l-2xl md:w-60 md:bg-white-transparent">
            <div className="flex items-center justify-between px-s2 py-s3">
              <p className="text-2xl">Messages</p>
              <Image src={Edit} alt="Edit" width={40} height={40} />
            </div>
            {SENDERS.map((item, index) => (
              <Sender
                key={`sender-${index}`}
                query={query}
                width={width}
                {...item}
              />
            ))}
          </div>
        )}
        {query.id && (
          <div className="w-full p-s2 md:w-[calc(100%-240px)]">{children}</div>
        )}
        {width > 768 && !query.id && <EmptyState />}
      </div>
    </>
  );
};

Messages.getLayout = DashboardLayout;

export default Messages;

export const MessagesLayout = (page) =>
  DashboardLayout(<Messages>{page}</Messages>);
