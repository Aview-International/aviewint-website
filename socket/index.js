import { io } from 'socket.io-client';
import { createContext, useContext } from 'react';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
