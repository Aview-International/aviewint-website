import '../styles/globals.css';
import { MenuOpenContextProvider } from '../store/menu-open-context';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  });

  return (
    <MenuOpenContextProvider>
      <Component {...pageProps} />
    </MenuOpenContextProvider>
  );
};

export default MyApp;
