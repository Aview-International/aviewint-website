import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/reducers/user.reducer';
import {
  getMessages,
  getThreadHistory,
  getUserYoutubeChannel,
} from '../services/apis';
import { setYoutubeChannel } from '../store/reducers/youtube.reducer';
import { getUserProfile } from '../services/firebase';
import {
  setAllAIThreads,
  // setMessageStatus,
  setMessages,
} from '../store/reducers/messages.reducer';
import { useEffect, useState } from 'react';
import ErrorHandler from '../utils/errorHandler';
import { setAllLanguages } from '../store/reducers/aview.reducer';

const useUserProfile = () => {
  const isLoggedIn = useSelector((el) => el.user.isLoggedIn);
  const dispatch = useDispatch();
  const uid = Cookies.get('uid');
  const [isLoading, setIsLoading] = useState(true);

  const handleGetProfile = async () => {
    await getUserProfile(uid, (resp) => dispatch(setUser({ ...resp, uid })));
  };

  const handleGetYoutubeChannel = async () => {
    const res = await getUserYoutubeChannel();
    if (res === 'No youtube channel connected') return;
    const data = {
      id: res.id,
      description: res.snippet.description,
      title: res.snippet.title,
      thumbnail: res.snippet.thumbnails.default.url,
    };
    dispatch(setYoutubeChannel(data));
  };

  const handleGetMessages = async () => {
    const res = await getMessages();
    dispatch(setMessages(res));
  };

  useEffect(() => {
    // get all languages from the regions array
    dispatch(setAllLanguages());

    // get all user related information
    (async () => {
      try {
        if (isLoggedIn) {
          await Promise.all([
            handleGetProfile(),
            handleGetYoutubeChannel(),
            handleGetMessages(),
            getThread(),
          ]);
        }
        setIsLoading(false);
      } catch (error) {
        ErrorHandler(error);
        setIsLoading(false);
      }
    })();
  }, [isLoggedIn]);

  const getThread = async () => {
    const res = await getThreadHistory();
    dispatch(setAllAIThreads(res));
  };

  const sidebarTrigger = () => getThread();

  return { sidebarTrigger, isLoading };
};

export default useUserProfile;
