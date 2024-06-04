import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
// import Edit from '../../../public/img/icons/edit.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Arrow from '../../../public/img/icons/arrow-back.svg';
import Logo from '../../../public/img/aview/logo.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setCreatorEnquiries } from '../../../store/reducers/senders.reducer';
import {
  getMessages,
  getSenders,
  markTicketAsResolved,
  sendEnquiryMessage,
} from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import Textarea from '../../../components/FormComponents/Textarea';
import SendIcon from '../../../public/img/icons/send-message.svg';
import Modal from '../../../components/UI/Modal';
import { toast } from 'react-toastify';
import OnboardingButton from '../../../components/Onboarding/button';
import { setMessages } from '../../../store/reducers/messages.reducer';

const Messages = () => {
  const enquiries = useSelector((state) => state.messages.messages);
  const [singleEnquiry, setSingleEnquiry] = useState({
    _id: '',
    createdAt: '',
    creatorId: '',
    creatorPicture: '',
    firstName: '',
    lastName: '',
    messages: [],
    resolved: false,
    updatedAt: '',
  });
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (router.query.id) {
      const data = enquiries.find((query) => query._id === router.query.id);
      setSingleEnquiry(data);
    }
  }, [router.query, enquiries]);

  return (
    <>
      <PageTitle title="Messages" />
      <div className="h-full w-full rounded-2xl text-white">
        {/* <div className="w-full rounded-l-2xl md:w-60 md:bg-white-transparent"> */}
        {/* <div
            className="flex items-center justify-between px-s2 py-s3"
            onClick={handleClose}
          >
            <p className="text-2xl">Enquiries</p>
            <Image src={Edit} alt="Edit" width={40} height={40} />
          </div> */}
        {/* {enquiries.map((data, i) => (
            <Sender
              key={i}
              router={router}
              data={data}
              dispatch={dispatch}
              setSingleEnquiry={setSingleEnquiry}
            />
          ))} */}
        {/* </div> */}

        {router.query.id ? (
          <CreatorEnquiry data={singleEnquiry} />
        ) : (
          <EmptyState />
        )}
      </div>
    </>
  );
};

const EmptyState = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Image src={Logo} alt="Aview" width={120} height={120} />
      <p className="mt-s3 text-2xl">Select a message to view the content</p>
    </div>
  );
};

const CreatorEnquiry = ({ data }) => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query.id) {
        await sendEnquiryMessage(message, router.query.id);
        toast.success('Message sent successfully!');
        setMessage('');
        await handleGetMessages();
      }
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const handleGetMessages = async () => {
    try {
      const res = await getMessages();
      dispatch(setMessages(res));
    } catch (error) {
      ErrorHandler(error);
    }
  };

  return (
    <>
      <PageTitle title="Messages" />
      <div className="mx-auto h-full w-full max-w-[1200px] rounded-2xl bg-white-transparent">
        <div className="relative flex h-full w-full flex-col justify-between p-s2">
          <div className="flex items-center gap-2">
            <button onClick={() => router.replace('/dashboard/support')}>
              <Image src={Arrow} alt="" width={32} height={32} />
            </button>
            <Image
              src={Logo}
              alt="Profile Picture"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p className="ml-s1 text-2xl font-bold">Aview Support</p>
          </div>
          <div>
            <div>
              {data?.messages &&
                data?.messages.map((item, i) => (
                  <SingleMessage
                    key={i}
                    lastName={data.lastName}
                    firstName={data.firstName}
                    creatorPicture={data.creatorPicture}
                    {...item}
                  />
                ))}
            </div>

            {data?.resolved ? (
              <p>This issue has now been resolved and closed, thank you</p>
            ) : (
              <form
                className="relative flex w-full"
                onSubmit={handleSubmit}
                // ref={inputRef}
              >
                <Textarea
                  placeholder="Type message..."
                  value={message}
                  name="Support Form"
                  onChange={(e) => setMessage(e.target.value)}
                ></Textarea>
                <button
                  type="submit"
                  className="mx-s1 flex items-center justify-center p-s1"
                >
                  <Image src={SendIcon} alt="Send" width={24} height={24} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const SingleMessage = ({
  message,
  sender,
  timestamp,
  lastName,
  firstName,
  creatorPicture,
}) => (
  <div
    className={`my-s3 flex items-start text-sm ${
      sender === 'creator' ? 'flex-row-reverse' : 'flex-row'
    }`}
  >
    <div className="mx-s2">
      <Image
        src={sender === 'admin' ? Logo : creatorPicture}
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
    <div>
      <p>
        {sender === 'admin' ? 'Julia from Aview' : firstName + ' ' + lastName}
        <span className="pl-s2 font-light">
          {new Date(timestamp).toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          })}
        </span>
      </p>
      <p className="mt-s1">{message}</p>
    </div>
  </div>
);

const Sender = ({ router, data, width, setSingleEnquiry }) => {
  const goToMessages = () => {
    setSingleEnquiry(data);
    router.push(
      {
        pathname: '/creator-enquiries',
        query: 'id=' + data._id,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div
      onClick={goToMessages}
      className={`hover:gradient-1 flex cursor-pointer items-center rounded p-s1 md:my-s1 md:px-s2 ${
        router.query.id && router.query.id === data._id && 'gradient-1'
      }`}
    >
      <div className="mr-s1 flex items-center justify-center">
        <Image
          src={data.creatorPicture}
          alt="Profile Photo"
          width={width > 767 ? 24 : 48}
          height={width > 767 ? 24 : 48}
          className="rounded-full"
        />
      </div>
      <p className="w-full border-y border-white-transparent py-s1 text-lg md:border-none">
        {data.firstName} {data.lastName}
        <br />
        <span className="inline text-sm text-gray-2 md:hidden">
          Reply {data.firstName}.
        </span>
      </p>
    </div>
  );
};

Messages.getLayout = DashboardLayout;
export default Messages;

export const MessagesLayout = (page) =>
  DashboardLayout(<Messages>{page}</Messages>);
