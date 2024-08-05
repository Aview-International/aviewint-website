import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { useEffect, useState } from 'react';
import PageTitle from '../../../components/SEO/PageTitle';
import ChatSidebar from '../../../components/dashboard/chatAssistant/chatSidebar';
import aviewLogo from '../../../public/img/aview/logo.svg';
import {
  ChatForm,
  ChatSuggestions,
  MessageContent,
} from '../../../components/dashboard/chatAssistant/chatContent';
import { useDispatch, useSelector } from 'react-redux';
import { createThread, sendMessage } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import {
  setAiThreads,
  setLastUsedAIThread,
  setLastUserAIMessage,
} from '../../../store/reducers/messages.reducer';
import Image from 'next/image';
import { useRouter } from 'next/router';
import GradientLoader from '../../../public/loaders/GradientLoader';
import useUserProfile from '../../../hooks/useUserProfile';

const ChatAssist = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { sidebarTrigger } = useUserProfile();
  const [trigger, setTrigger] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { aiThreads, lastUsedAIThread, allAIThreads } = useSelector(
    (x) => x.messages
  );
  const { firstName, picture } = useSelector((x) => x.user);
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await createThread();
        dispatch(setLastUsedAIThread(res));
      } catch (error) {}
    })();
  }, []);

  useEffect(() => {
    sidebarTrigger();
    dispatch(setAiThreads([]));
  }, []);

  const handleSubmit = async (e, input) => {
    // e || input is used to send fixed or flexible queries
    e && e.preventDefault();
    try {
      setIsLoading(true);
      setContent('');
      dispatch(setLastUserAIMessage(content || input)); // do not modify unless UI changes!
      const data = await sendMessage(
        content || input,
        lastUsedAIThread,
        firstName
      );
      dispatch(setAiThreads(data));
      setTrigger(!trigger);
      push(`/dashboard/chat-assist/${lastUsedAIThread}`);
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <>
      <PageTitle title="AI Chat Assistant" />
      <div className="mx-auto flex h-full flex-row overflow-y-auto rounded-xl bg-white-transparent">
        <div className="w-48 border-r-2 border-white lg:w-4/12">
          <ChatSidebar allAIThreads={allAIThreads} />
        </div>
        <div className="bg-gray-100 flex h-full w-full flex-col justify-between overflow-y-auto pt-s2">
          <div>{/* this div is only here to maintain styling */}</div>
          <div className="mx-auto w-10/12">
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
                  How can we help today?
                </p>
              </div>
            )}
          </div>
          <div>
            {aiThreads.length < 1 && (
              <ChatSuggestions handleSubmit={handleSubmit} />
            )}
            <div className="mx-auto mt-s2 w-full pl-s7 md:w-10/12">
              {isLoading && <GradientLoader />}
              <ChatForm
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ChatAssist.getLayout = DashboardLayout;
export default ChatAssist;
