import { createContext, useEffect, useState } from 'react';
import { getUserProfile } from '../pages/api/firebase';

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    picture: '',
    youtubeChannelId: '',
  });

  const getProfile = async () => {
    try {
      const _id = localStorage.getItem('uid');
      const res = await getUserProfile(_id);
      setUserInfo(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
