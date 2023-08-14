import { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import { fetchMessages, sendMessage } from '../../api/firebase';
import Logo from '../../../public/img/aview/logo.svg';
import FormInput from '../../../components/FormComponents/FormInput';
import SendIcon from '../../../public/img/icons/send-message.svg';
import Image from 'next/image';
import Cookies from 'js-cookie';

const SingleMessage = ({ timeStamp, message }) => (
  <div className="my-s3 flex items-start text-sm">
    <div className="mr-s1">
      <Image src={Logo} alt="" width={40} height={40} />
    </div>
    <div>
      <p>
        Julia from Aview{' '}
        <span className="pl-s2 font-light">
          {new Date(timeStamp).toLocaleString('en-US', {
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

const Messages = () => {
  const uid = Cookies.get('uid');

  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);

  const callback = (e) => setChats(e);
  const fetchUserMessages = async () => {
    try {
      const res = await fetchMessages(uid, callback);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendMessage(uid, message);
      console.log(res);
      setMessage('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PageTitle title="Messages" />
      <div className="mx-auto flex h-full max-w-[1200px] rounded-2xl bg-gradient-to-b from-[#ffffff26] to-[#ffffff0D] text-white">
        <div className="w-full p-s2">
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="-mb-1">
                <Image
                  src={Logo}
                  alt="Profile Picture"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <p className="ml-s1 text-2xl font-bold">Aview Support</p>
            </div>
            <div>
              <div>
                {chats.map((item, index) => (
                  <SingleMessage key={`message-${index}`} {...item} />
                ))}
              </div>
              <form className="relative flex w-full" onSubmit={handleSubmit}>
                <FormInput
                  placeholder="Type something..."
                  extraClasses="mb-0"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="mx-s1 flex items-center justify-center
          p-s1"
                >
                  <Image src={SendIcon} alt="Send" width={24} height={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Messages.getLayout = DashboardLayout;

export default Messages;
