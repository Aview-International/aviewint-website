import { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import Logo from '../../../public/img/aview/logo.svg';
import FormInput from '../../../components/FormComponents/FormInput';
import SendIcon from '../../../public/img/icons/send-message.svg';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../../socket';
import { getUserMessages } from '../../../services/apis';
import { setMessages } from '../../../store/reducers/messages.reducer';

const AdminMessage = ({ timeStamp, message }) => (
  <div className="my-s3 flex items-start text-sm">
    <div className="mx-s1">
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

const UserMessage = ({ timeStamp, message }) => (
  <div className="my-s3 flex flex-row-reverse items-start text-sm">
    <div className="mx-s1">
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
  const dispatch = useDispatch();
  const uid = Cookies.get('uid');
  const { user, messages } = useSelector((state) => state);
  const [message, setMessage] = useState('');

  const fetchUserMessages = async () => {
    try {
      const res = await getUserMessages(uid);
      dispatch(setMessages(res));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserMessages();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 0)
      //  socket.emit('user_typing', user._id);
      setMessage(e.target.value);
  };

  useEffect(() => {
    socket.on('new_message', (message) => {
      console.log(message);
    });
    return socket.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      message: message,
      userId: user._id,
    };
    socket.emit('user_message', data);
    setMessage('');
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
                {messages.map((item, index) => (
                  <UserMessage key={`message-${index}`} {...item} />
                ))}
              </div>
              <div>
                {messages.map((item, index) => (
                  <AdminMessage key={`message-${index}`} {...item} />
                ))}
              </div>
              <form className="relative flex w-full" onSubmit={handleSubmit}>
                <FormInput
                  placeholder="Type something..."
                  extraClasses="mb-0"
                  value={message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="mx-s1 flex items-center justify-center p-s1"
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
