import { useEffect } from 'react';

const ViewportHeight = ({ children }) => {
  useEffect(() => {
    const setViewportHeight = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setViewportHeight();
    window.onresize = setViewportHeight;
  });

  return <>{children}</>;
};

export default ViewportHeight;
