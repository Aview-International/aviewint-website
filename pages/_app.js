import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider, useDispatch } from 'react-redux';
import store from '../store';
import { SocketProvider } from '../socket';
import { setAllLanguages } from '../store/reducers/aview.reducer';
import { auth, logoutUser } from './api/firebase';
import Cookies from 'js-cookie';
import { onAuthStateChanged } from 'firebase/auth';
import useUserProfile from '../hooks/useUserProfile';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <SocketProvider>
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
      </SocketProvider>
    </Provider>
  );
};

const Layout = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const { getProfile } = useUserProfile();
  useEffect(() => {
    // get all languages from the regions array
    dispatch(setAllLanguages());
    // AOS animation
    AOS.init();
    AOS.refresh();
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
    // refresh token after 55 mins
    const handle = setInterval(async () => {
      const token = await auth.currentUser.getIdToken(true);
      if (token) Cookies.set('token', _tokenResponse.idToken);
    }, 50 * 60 * 1000);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (!user) logoutUser();
      else getProfile();
    });

    // clean up setInterval and auth listener
    return () => {
      unsubscribe;
      clearInterval(handle);
    };
  }, []);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
