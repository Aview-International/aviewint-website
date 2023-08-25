import { io } from 'socket.io-client';
import { baseUrl } from '../services/baseUrl';
import { createContext, useContext } from 'react';

const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const socket = io(baseUrl);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
