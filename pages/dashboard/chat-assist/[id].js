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
} from '../../../store/reducers/messages.reducer';
import { useRouter } from 'next/router';

const ChatAssist = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const { aiThreads, allAIThreads } = useSelector((x) => x.messages);
  const { firstName, picture } = useSelector((x) => x.user);

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
      let value = e.target[0].value;
      e.target[0].value = '';
      const data = await sendMessage(value, query.id, firstName);
      dispatch(setAiThreads(data));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <>
      <PageTitle title="AI Chat Assistant" />
      <div className="mx-auto flex h-full flex-row rounded-xl bg-white-transparent">
        <div className="w-48 border-r-2 border-white lg:w-4/12">
          <ChatSidebar allAIThreads={allAIThreads} />
        </div>
        <div className="bg-gray-100 flex h-full w-full flex-col justify-between overflow-y-auto pt-s2">
          <div>{/* this div is only here to maintain styling */}</div>
          <div className="mx-auto w-10/12">
            {[...aiThreads]
              .sort((a, b) => a.created_at - b.created_at)
              .map((data, i) => (
                <MessageContent picture={picture} key={i} {...data} />
              ))}
          </div>
          <div className="mx-auto w-full md:w-10/12 pl-s7">
            <ChatForm
              formRef={formRef}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

ChatAssist.getLayout = DashboardLayout;
export default ChatAssist;
