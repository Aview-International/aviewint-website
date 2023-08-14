import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider, useDispatch } from 'react-redux';
import store from '../store';
// import { SocketProvider, useSocket } from '../socket';
import Cookies from 'js-cookie';
import { setMessages } from '../store/reducers/messages.reducer';
import { baseUrl } from '../services/baseUrl';
import { io } from 'socket.io-client';
import { socket } from '../socket';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      {/* <SocketProvider> */}
      <MenuOpenContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Layout Component={Component} pageProps={pageProps} />
      </MenuOpenContextProvider>
      {/* </SocketProvider> */}
    </Provider>
  );
};

const Layout = ({ Component, pageProps }) => {
  const environment = process.env.NODE_ENV;
  const uid = Cookies.get('uid');
  const dispatch = useDispatch();
  // const socket = io(baseUrl);

  // const socket = useSocket();

  useEffect(() => {
    if (uid) {
      socket.auth = { userId: uid };
      console.log('hereeeee');
      socket.on('connect', () => {
        // if (environment === 'development')
        console.log('socket connected, id: ' + socket.id, socket.auth);
      });

      socket.on('new_message', (message) => {
        console.log(message);
        // dispatch(setMessages(message));
      });

      // socket.on('new_user_message', (message) => {
      //   console.log(message);
      // });

      socket.on('disconnect', () => {
        if (environment === 'development')
          console.log('socket disconnected, id:' + socket.id);
      });
    }
  }, [uid]);

  useEffect(() => {
    // AOS animation
    AOS.init();
    AOS.refresh();
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  }, []);
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
