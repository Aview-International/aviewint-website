import '../styles/globals.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
      <Component {...pageProps} />
    </MenuOpenContextProvider>
  );
};

export default MyApp;
