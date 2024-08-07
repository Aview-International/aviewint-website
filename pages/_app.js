import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider, useDispatch } from 'react-redux';
import store from '../store';
import useUserProfile from '../hooks/useUserProfile';
import { setAuthState } from '../store/reducers/user.reducer';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import Cookies from 'js-cookie';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

const Layout = ({ Component, pageProps }) => {
  useUserProfile();
  const dispatch = useDispatch();
  useEffect(() => {
    // prevent blobs from overflowing
    document
      .getElementById('__next')
      .classList.add('overflow-x-clip', 'w-full', 'relative');
    // AOS animation
    AOS.init();
    AOS.refresh();
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.onresize = setViewportHeight;
  }, []);

  useEffect(() => {
    // handle auth
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        Cookies.set('uid', user.uid);
        dispatch(setAuthState(true));
      } else {
        Cookies.remove('uid');
        Cookies.remove('session');
      }
    });

    return () => unsubscribe();
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
