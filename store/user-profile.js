import { createContext, useState } from 'react';

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    picture: '',
    youtubeChannelId: '',
  });

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
