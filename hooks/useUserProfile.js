import Cookies from 'js-cookie';
import { getUserProfile } from '../pages/api/firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/reducers/user.reducer';

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

  return { handleGetProfile };
};

export default useUserProfile;
