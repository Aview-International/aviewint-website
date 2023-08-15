import Cookies from 'js-cookie';
import { getUserProfile } from '../pages/api/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/user.reducer';
import { getMessageStatus, getUserYoutubeChannel } from '../services/apis';
import { setYoutubeChannel } from '../store/reducers/youtube.reducer';
import { setMessageStatus } from '../store/reducers/messages.reducer';
import { useState } from 'react';

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
      console.log(error);
    }
  };

  const handleGetYoutubeChannel = async () => {
    try {
      const res = await getUserYoutubeChannel(uid);
      dispatch(setYoutubeChannel(res));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetMessageStatus = async () => {
    try {
      const res = await getMessageStatus(uid);
      dispatch(setMessageStatus(res));
    } catch (error) {
      console.log(error);
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
