import Image from 'next/image';
import Edit from '../../../public/img/icons/edit.svg';
import Trash from '../../../public/img/icons/trash.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Modal from '../../UI/Modal';
import OnboardingButton from '../../Onboarding/button';
import { useState } from 'react';
import ErrorHandler from '../../../utils/errorHandler';
import { deleteThread } from '../../../services/apis';
import useUserProfile from '../../../hooks/useUserProfile';

const ChatSidebar = ({ allAIThreads }) => {
  const { asPath, push } = useRouter();
  const { sidebarTrigger } = useUserProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [thread, setThread] = useState({
    threadId: '',
    title: '',
  });
  const closeModal = () =>
    setThread({
      threadId: '',
      title: '',
    });

  const handleDeleteThread = async () => {
    setIsLoading(true);
    try {
      await deleteThread(thread.threadId);
      setIsLoading(false);
      setThread({
        threadId: '',
        title: '',
      });
      push('/dashboard/chat-assist');
      sidebarTrigger();
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <>
      {thread.title && (
        <Modal closeModal={closeModal}>
          <div className="min-w-[20rem]">
            <h3 className="mb-s2 text-xl">Delete chat?</h3>
            <hr />
            <p className="my-s3">
              This will delete <span className="font-bold">{thread.title}</span>
            </p>

            <div className="mt-s4 flex justify-center gap-s3">
              <OnboardingButton theme="dark" onClick={closeModal}>
                Cancel
              </OnboardingButton>
              <OnboardingButton
                theme="error"
                onClick={handleDeleteThread}
                isLoading={isLoading}
              >
                Delete
              </OnboardingButton>
            </div>
          </div>
        </Modal>
      )}
      <div>
        <Link href="/dashboard/chat-assist">
          <div
            className={`flex flex-row items-center justify-between rounded-tl-xl p-4 hover:bg-white-transparent
          ${
            asPath === `/dashboard/chat-assist` ? 'bg-white-transparent' : ''
          } p-3 font-medium hover:bg-white-transparent`}
          >
            <p className="text-sm">New chat</p>
            <Image src={Edit} alt="edit-logo" width={16} height={16} />
          </div>
        </Link>
        {allAIThreads.map((data, i) => (
          <div className="group relative hover:bg-white-transparent" key={i}>
            <Link
              href={`/dashboard/chat-assist/${data.threadId}`}
              className="w-full"
            >
              <a
                className={`mt-2 block w-full ${
                  asPath === `/dashboard/chat-assist/${data.threadId}`
                    ? 'bg-white-transparent'
                    : ''
                } p-3 font-medium`}
              >
                {data.title}
              </a>
            </Link>
            <button
              className="absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full p-2 hover:bg-white-transparent group-hover:flex"
              onClick={() =>
                setThread({
                  threadId: data.threadId,
                  title: data.title,
                })
              }
            >
              <Image src={Trash} width={15} height={15} alt="" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatSidebar;
