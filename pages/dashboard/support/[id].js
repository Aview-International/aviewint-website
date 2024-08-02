import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Arrow from '../../../public/img/icons/arrow-back.svg';
import Logo from '../../../public/img/aview/logo.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendEnquiryMessage } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import Textarea from '../../../components/FormComponents/Textarea';
import SendIcon from '../../../public/img/icons/send-message.svg';
import { toast } from 'react-toastify';
import { setMessages } from '../../../store/reducers/messages.reducer';
import Loader from '../../../components/UI/loader';

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
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query.id) {
        setLoading(true);
        await sendEnquiryMessage(message, router.query.id);
        toast.success('Message sent successfully!');
        setMessage('');
        setLoading(false);
        await handleGetMessages();
      }
    } catch (error) {
      setLoading(false);
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
        <div className="mx-auto min-h-full w-full max-w-[1200px] rounded-2xl bg-white-transparent">
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
                {singleEnquiry?.messages &&
                  singleEnquiry?.messages.map((item, i) => (
                    <SingleMessage
                      key={i}
                      lastName={singleEnquiry.lastName}
                      firstName={singleEnquiry.firstName}
                      creatorPicture={singleEnquiry.creatorPicture}
                      {...item}
                    />
                  ))}
              </div>

              {singleEnquiry?.resolved ? (
                <p>This issue has now been resolved and closed, thank you</p>
              ) : (
                <form
                  className="relative flex w-full items-center"
                  onSubmit={loading ? null : handleSubmit}
                >
                  <Textarea
                    placeholder="Type message..."
                    value={message}
                    name="Support Form"
                    onChange={(e) => setMessage(e.target.value)}
                  ></Textarea>
                  <div className="mb-s5 w-16">
                    {loading ? (
                      <Loader />
                    ) : (
                      <button
                        type="submit"
                        className="mx-s1 flex items-center justify-center p-s1"
                      >
                        <Image
                          src={SendIcon}
                          alt="Send"
                          width={24}
                          height={24}
                        />
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
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

Messages.getLayout = DashboardLayout;
export default Messages;

export const MessagesLayout = (page) =>
  DashboardLayout(<Messages>{page}</Messages>);
