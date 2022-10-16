import { useEffect } from 'react';

import { MenuOpenContextProvider } from '../store/menu-open-context';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
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
