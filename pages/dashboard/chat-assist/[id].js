import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { useEffect, useRef, useState } from 'react';
import PageTitle from '../../../components/SEO/PageTitle';
import ChatSidebar from '../../../components/dashboard/chatAssistant/chatSidebar';
import {
  ChatForm,
  MessageContent,
} from '../../../components/dashboard/chatAssistant/chatContent';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAIChatHistory,
  getThreadHistory,
  sendMessage,
} from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import {
  setAiThreads,
  setAllAIThreads,
  setLastUserAIMessage,
  updateAIThreadSidebar,
} from '../../../store/reducers/messages.reducer';
import { useRouter } from 'next/router';
import GradientLoader from '../../../public/loaders/GradientLoader';
import useUserProfile from '../../../hooks/useUserProfile';

const ChatAssist = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { aiThreads, allAIThreads } = useSelector((x) => x.messages);
  const { firstName, picture } = useSelector((x) => x.user);
  const [content, setContent] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    query.id &&
      (async () => {
        try {
          const data = await getAIChatHistory(query.id);
          dispatch(setAiThreads(data));
        } catch (error) {
          ErrorHandler(error);
        }
      })();
  }, [query.id]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getThreadHistory(query.id);
        dispatch(setAllAIThreads(res));
      } catch (error) {
        ErrorHandler(error);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setContent('');
      dispatch(setLastUserAIMessage(content));
      const data = await sendMessage(content, query.id, firstName);
      dispatch(setAiThreads(data));
      dispatch(updateAIThreadSidebar(query.id));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [aiThreads]);

  return (
    <>
      <PageTitle title="AI Chat Assistant" />
      <div className="mx-auto flex h-full flex-row rounded-xl bg-white-transparent">
        <div className="w-48 border-r-2 border-white lg:w-4/12">
          <ChatSidebar allAIThreads={allAIThreads} />
        </div>
        <div className="bg-gray-100 relative h-full w-full pt-s2 pb-s7">
          <div className="mx-auto h-full overflow-auto px-s5">
            {[...aiThreads]
              .sort((a, b) => a.created_at - b.created_at)
              .map((data, i) => (
                <MessageContent picture={picture} key={i} {...data} />
              ))}
            <div ref={messagesEndRef} />
            {/* do not delete the above component!!! we use it to scroll to view*/}
          </div>

          <div className="absolute bottom-0 left-0 mx-auto w-full pl-s7">
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
    </>
  );
};

ChatAssist.getLayout = DashboardLayout;
export default ChatAssist;
