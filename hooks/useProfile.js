import Cookies from 'js-cookie';
import { useContext } from 'react';
import { getUserProfile } from '../pages/api/firebase';
import { UserContext } from '../store/user-profile';

const useProfile = () => {
  const { setUserInfo } = useContext(UserContext);

  const handleGetProfile = async () => {
    try {
      const _id = Cookies.get('uid');
      await getUserProfile(_id, (resp) => setUserInfo(resp));
    } catch (error) {
      console.log(error);
    }
  };

  return { handleGetProfile };
};

export default useProfile;
