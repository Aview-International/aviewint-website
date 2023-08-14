import Cookies from 'js-cookie';
import { getUserProfile } from '../pages/api/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/user.reducer';
import { getUserYoutubeChannel } from '../services/apis';
import { setYoutubeChannel } from '../store/reducers/youtube.reducer';

const useUserProfile = () => {
  const dispatch = useDispatch();

  const handleGetProfile = async () => {
    try {
      const uid = Cookies.get('uid');
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
      const uid = Cookies.get('uid');
      const res = await getUserYoutubeChannel(uid);
      dispatch(setYoutubeChannel(res));
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetProfile, handleGetYoutubeChannel };
};

export default useUserProfile;
