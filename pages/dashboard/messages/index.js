import { useEffect, useRef, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import Logo from '../../../public/img/aview/logo.svg';
import FormInput from '../../../components/FormComponents/FormInput';
import SendIcon from '../../../public/img/icons/send-message.svg';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../../../socket';
import { getUserMessages } from '../../../services/apis';
import {
  setMessages,
  setNewMessageDot,
} from '../../../store/reducers/messages.reducer';
import ErrorHandler from '../../../utils/errorHandler';

const SingleMessage = ({ timeStamp, message, sender, user }) => (
  <div
    className={`my-s3 flex items-start text-sm ${
      sender === 'user' ? 'flex-row-reverse' : 'flex-row'
    }`}
  >
    <div className="mx-s2">
      <Image
        src={sender === 'admin' ? Logo : user.picture}
        alt=""
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
    <div>
      <p>
        {sender === 'admin'
          ? 'Julia from Aview'
          : user.firstName + ' ' + user.lastName}
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
  const socket = useSocket();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const messages = useSelector((state) => state.messages.messages);
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);
  const fetchUserMessages = async () => {
    try {
      const res = await getUserMessages();
      dispatch(setMessages(res));
    } catch (error) {
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    fetchUserMessages();
    dispatch(setNewMessageDot(true));
    socket.on('new_message', () => {
      fetchUserMessages();
    });
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current[0].scrollIntoView({ behavior: 'smooth' });
      inputRef.current[0].focus();
    }
  }, [inputRef.current]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length > 0)
      //  socket.emit('user_typing', user._id);
      setMessage(e.target.value);
  };

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
                  <SingleMessage
                    key={`message-${index}`}
                    user={user}
                    {...item}
                  />
                ))}
              </div>
              <form
                className="relative flex w-full"
                onSubmit={handleSubmit}
                ref={inputRef}
              >
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
