import '../styles/globals.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import UserContextProvider from '../store/user-profile';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  }, []);

  return (
    <MenuOpenContextProvider>
      <UserContextProvider>
        <Layout Component={Component} pageProps={pageProps} />
      </UserContextProvider>
    </MenuOpenContextProvider>
  );
};

const Layout = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return <Component {...pageProps} />;
  }
};

export default MyApp;
