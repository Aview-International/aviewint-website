import { useEffect, useState } from 'react';
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
import { auth } from './api/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

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
  // const { pathname, push } = useRouter();
  // const protectedPaths = ['/dashboard', '/onboarding'];
  // const [authState, setAuthState] = useState(false);

  useEffect(() => {
    // console.log(pathname);

    // onAuthStateChanged(auth, (user) => {
    //   if (!user && protectedPaths.includes(pathname)) {
    //     push('/login');
    //     // setAuthState(true);
    //     // console.log('userData', user);
    //   } else {
    //     setAuthState(true);
    //   }
    // });
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
  }, []);

  // if (!authState) return null;
  // else {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
    // }
  }
};

export default MyApp;
