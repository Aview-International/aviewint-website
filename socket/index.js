import { io } from 'socket.io-client';
import { baseUrl } from '../services/baseUrl';

export const socket = io(baseUrl);

// const SocketContext = createContext();

// export const SocketProvider = ({ children }) => {
//   return (
//     <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//   );
// };

// export const useSocket = () => useContext(SocketContext);
