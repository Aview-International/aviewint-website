import React, { useEffect, useRef, useState } from 'react';

const ProgressBar = () => {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  function animateProgressBar() {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setWidth(scrolled);
  }

  useEffect(() => {
    window.addEventListener('scroll', animateProgressBar);
    return () => {
      window.removeEventListener('scroll', animateProgressBar);
    };
  }, []);

  return (
    <>
      <div
        className="gradient-1 fixed bottom-0 left-0 z-50 h-[6px] transition"
        ref={divRef}
        style={{ width: `${width}%` }}
      ></div>
    </>
  );
};

export default ProgressBar;
