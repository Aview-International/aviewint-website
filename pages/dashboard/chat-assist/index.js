import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { useEffect, useRef } from 'react';
import PageTitle from '../../../components/SEO/PageTitle';
import ChatSidebar from '../../../components/dashboard/chatAssistant/chatSidebar';
import aviewLogo from '../../../public/img/aview/logo.svg';
import {
  ChatForm,
  ChatSuggestions,
  MessageContent,
} from '../../../components/dashboard/chatAssistant/chatContent';
import { useDispatch, useSelector } from 'react-redux';
import {
  createThread,
  getThreadHistory,
  sendMessage,
} from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import {
  setAiThreads,
  setAllAIThreads,
  setLastUsedAIThread,
} from '../../../store/reducers/messages.reducer';
import Image from 'next/image';

const ChatAssist = () => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const { aiThreads, lastUsedAIThread, allAIThreads } = useSelector(
    (x) => x.messages
  );
  const { firstName, picture } = useSelector((x) => x.user);

  useEffect(() => {
    !lastUsedAIThread &&
      (async () => {
        try {
          const res = await createThread();
          dispatch(setLastUsedAIThread(res));
        } catch (error) {
          ErrorHandler(error);
        }
      })();
  }, [lastUsedAIThread]);

  useEffect(() => {
    dispatch(setAiThreads([]));
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await getThreadHistory();
        dispatch(setAllAIThreads(res));
      } catch (error) {
        ErrorHandler(error);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let value = e.target[0].value;
      e.target[0].value = '';
      const data = await sendMessage(value, lastUsedAIThread, firstName);
      dispatch(setAiThreads(data));
    } catch (error) {
      ErrorHandler(error);
    }
  };

  return (
    <>
      <PageTitle title="AI Chat Assistant" />
      <div className="mx-auto flex h-full flex-row rounded-xl bg-white-transparent">
        <div className="w-48 border-r-2 border-white">
          <ChatSidebar allAIThreads={allAIThreads} />
        </div>
        <div className="bg-gray-100 pt-s2 flex w-full flex-col justify-between">
          <div>{/* this div is only here to maintain styling */}</div>
          <div className="mx-auto w-8/12">
            {aiThreads.length > 0 ? (
              [...aiThreads]
                .sort((a, b) => a.created_at - b.created_at)
                .map((data, i) => (
                  <MessageContent picture={picture} key={i} {...data} />
                ))
            ) : (
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={aviewLogo}
                  alt="aview-logo"
                  width={60}
                  height={60}
                  className="cursor-pointer"
                />
                <p className="mt-6 text-2xl font-bold">
                  How can we help today ?
                </p>
              </div>
            )}
          </div>
          <div>
            {aiThreads.length < 1 && <ChatSuggestions />}
            <ChatForm formRef={formRef} handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

ChatAssist.getLayout = DashboardLayout;
export default ChatAssist;
