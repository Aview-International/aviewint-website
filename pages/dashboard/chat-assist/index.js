import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import { Fragment, useState, useEffect } from 'react';
import PageTitle from '../../../components/SEO/PageTitle';
import ChatSidebar from '../../../components/dashboard/chatAssistant/chatSidebar';
import ChatContent from '../../../components/dashboard/chatAssistant/chatContent';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ChatAssist = () => {
  const [threadId, setThreadId] = useState(null);
  const [assistantId, setAssistantId] = useState(null);
  const [isFetching, setIstFetching] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatTitles, setChatTitles] = useState([]);
  const [newThread, setNewThread] = useState(false);
  const { chatAssistantOption, firstName } = useSelector((state) => state.user);
  

  const handleThread = () => {
    setNewThread(true);
    setMessages([]);
  };

  const handleRetreiveMessage = () => {
    setIstFetching(true);
    axios
      .post(
        '/api/assistant/list',
        {
          threadId: threadId,
        }
      )
      .then((response) => {
        setIstFetching(false);
        // const reversedArray = response.data.reverse()
        if (response.data.data.length <= 2) {
          const newArray = [...chatTitles];
          newArray.push({ id: threadId, titleText: response.data.data[1].value });
          setNewThread(false) 
          setChatTitles(newArray);
        }
        // console.log('log message', response.data.data.trim().split('\n'));
        setMessages(response.data.data);
      });
  };

  const handleSendMessage = (text) => {
    axios
      .post('/api/assistant/message', {
        messageInput: text,
        contentOption: chatAssistantOption,
        assistantId: assistantId,
        threadId: threadId,
      })
      .then((response) => {
        setTimeout(() => handleRetreiveMessage(), 5000);
      })
      .catch((error) => {
        console.error('Error making the request:', error);
      });
    // Integrate with OpenAI for response
  };

  useEffect(() => {
    async function fetchIDS() {
      try {
        await axios
          .post('/api/assistant/thread', {
            isNewThread: newThread,
            name: firstName,
          })
          .then((response) => {
            const assistant = response.data.assistant.id;
            const thread = response.data.thread.id;
            setThreadId(thread);
            setAssistantId(assistant);
          });
      } catch (error) {
        console.log('error in catch', error);
      }
    }
    fetchIDS();
  }, [newThread]);

  return (
    <Fragment>
      <PageTitle title="AI Chat Assistant" />
      <div className="mx-auto flex h-full w-full max-w-[1200px] flex-row rounded-xl bg-white-transparent text-white">
        <div className="w-[20%] rounded-tl-xl rounded-bl-xl border-r-2 border-white">
          <ChatSidebar
            titleArray={chatTitles}
            handleNewThread={handleThread}
            isNewThread={newThread}
          />
        </div>
        <div className="w-[80%] rounded-tr-xl rounded-br-xl">
          <div className="bg-gray-100 h-full w-full flex-1 p-2">
            <ChatContent
              onSendMessage={handleSendMessage}
              isFetching={isFetching}
              onListMessages={handleRetreiveMessage}
              messages={messages}
              isNewThread={newThread}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ChatAssist.getLayout = DashboardLayout;
export default ChatAssist;
