import { useEffect, useRef, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import Logo from '../../../public/img/aview/logo.svg';
import SendIcon from '../../../public/img/icons/send-message.svg';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getMessages, sendEnquiryMessage } from '../../../services/apis';
import Textarea from '../../../components/FormComponents/Textarea';
import { toast } from 'react-toastify';
import GlobalButton from '../../../components/Onboarding/button';
import { useRouter } from 'next/router';
import { setMessages } from '../../../store/reducers/messages.reducer';
import ErrorHandler from '../../../utils/errorHandler';

const Messages = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const messages = useSelector((state) => state.messages.messages);
  const unresolvedQueries = messages.filter(
    (message) => message.resolved !== true
  );

  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const handleGetMessages = async () => {
    try {
      const res = await getMessages();
      dispatch(setMessages(res));
    } catch (error) {
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    handleGetMessages();
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current[0].scrollIntoView({ behavior: 'smooth' });
      inputRef.current[0].focus();
    }
  }, [inputRef.current]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendEnquiryMessage(message, 'new');
    toast.success('Message sent successfully!');
    setMessage('');
    await handleGetMessages();
  };

  return (
    <>
      <PageTitle title="Messages" />
      <div
        className={`relative flex h-full w-full max-w-[1200px] flex-col justify-between ${
          unresolvedQueries.length < 1 && 'justify-between'
        } rounded-2xl bg-gradient-to-b from-[#ffffff26] to-[#ffffff0D] p-s2`}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Aview Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <p className="ml-s1 text-2xl font-bold">Aview Support</p>
          </div>
          <div>
            {unresolvedQueries.length > 0 && (
              <GlobalButton onClick={() => setShowForm(true)}>
                New Enquiry
              </GlobalButton>
            )}
          </div>
        </div>

        {unresolvedQueries.length > 0 &&
          unresolvedQueries.map((item, i) => (
            <div
              key={i}
              className="my-s1.5 cursor-pointer p-s2"
              onClick={() => router.push(`/dashboard/support/${item._id}`)}
            >
              <p className="text-lg">{item.messages[0].message}</p>
              <span className="block h-5">
                <small>Click on ticket to continue</small>
              </span>
            </div>
          ))}
        {(unresolvedQueries.length < 1 || showForm) && (
          <form
            className="relative flex w-full"
            onSubmit={handleSubmit}
            ref={inputRef}
          >
            <Textarea
              placeholder="Type message..."
              value={message}
              name="Support Form"
              onChange={handleChange}
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
    </>
  );
};

Messages.getLayout = DashboardLayout;

export default Messages;
