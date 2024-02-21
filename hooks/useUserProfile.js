import Cookies from 'js-cookie';
import { getUserProfile } from '../pages/api/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/user.reducer';
import {
  getMessageStatus,
  getThreadHistory,
  getUserYoutubeChannel,
} from '../services/apis';
import { setYoutubeChannel } from '../store/reducers/youtube.reducer';
import {
  setAllAIThreads,
  setMessageStatus,
} from '../store/reducers/messages.reducer';
import { useEffect, useState } from 'react';
import ErrorHandler from '../utils/errorHandler';
import { setAllLanguages } from '../store/reducers/aview.reducer';

const useUserProfile = () => {
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const uid = Cookies.get('uid');
  const [isLoading, setIsLoading] = useState(true);
  const [trigger, setTrigger] = useState(0);

  const handleGetProfile = async () => {
    const token = Cookies.get('token');
    await getUserProfile(uid, (resp) =>
      dispatch(setUser({ ...resp, uid, token }))
    );
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

  const handleGetMessageStatus = async () => {
    const res = await getMessageStatus();
    dispatch(setMessageStatus(res));
  };

  useEffect(() => {
    // get all languages from the regions array
    dispatch(setAllLanguages());

    // get all user related information
    (async () => {
      try {
        if (token) {
          await Promise.all([
            handleGetProfile(),
            handleGetYoutubeChannel(),
            handleGetMessageStatus(),
          ]);
        }
        setIsLoading(false);
      } catch (error) {
        ErrorHandler(error);
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (token && uid) {
          const res = await getThreadHistory();
          dispatch(setAllAIThreads(res));
        }
      } catch (error) {
        ErrorHandler(error);
      }
    })();
  }, [trigger]);

  const sidebarTrigger = () => setTrigger(Math.random());

  return { sidebarTrigger, isLoading };
};

export default useUserProfile;
