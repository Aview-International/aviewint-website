import Cookies from 'js-cookie';
import { getUserProfile } from '../pages/api/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/user.reducer';
import { getMessageStatus, getUserYoutubeChannel } from '../services/apis';
import { setYoutubeChannel } from '../store/reducers/youtube.reducer';
import { setMessageStatus } from '../store/reducers/messages.reducer';
import { useState } from 'react';
import ErrorHandler from '../utils/errorHandler';

const useUserProfile = () => {
  const dispatch = useDispatch();
  const uid = Cookies.get('uid');
  const [isLoading, setIsLoading] = useState(true);

  const handleGetProfile = async () => {
    try {
      const token = Cookies.get('token');
      await getUserProfile(uid, (resp) =>
        dispatch(setUser({ ...resp, uid, token }))
      );
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const handleGetYoutubeChannel = async () => {
    try {
      const res = await getUserYoutubeChannel();
      if (res === 'No youtube channel connected') return;
      const data = {
        id: res.id,
        description: res.snippet.description,
        title: res.snippet.title,
        thumbnail: res.snippet.thumbnails.default.url,
      };
      dispatch(setYoutubeChannel(data));
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const handleGetMessageStatus = async () => {
    try {
      const res = await getMessageStatus();
      dispatch(setMessageStatus(res));
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const getProfile = async () => {
    await Promise.all([
      handleGetProfile(),
      handleGetYoutubeChannel(),
      handleGetMessageStatus(),
    ]);
    setIsLoading(false);
  };

  return { getProfile, isLoading };
};

export default useUserProfile;
