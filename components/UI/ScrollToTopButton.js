import React, { useEffect, useState } from 'react';
import scrollToTop from '../../public/img/icons/scroll-to-top.svg';
import Image from 'next/image';

const ScrollToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(false);
  const [bottomPosition, setBottomPosition] = useState(false);

  function handleVisibleButton() {
    if (window.scrollY > 150) {
      setScrollPosition(true);
      if (window.scrollY >= 8385) setBottomPosition(true);
    } else {
      setScrollPosition(false);
    }
  }

  function topFunction() {
    setScrollPosition(false);
    window.document.body.scrollTo({
      top: 0,
      behavior: 'smooth',
    }); // For Safari
    window.document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    }); // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <>
      {scrollPosition && (
        <div
          id="scrollButton"
          className={`fixed bottom-20 right-5 z-50 cursor-pointer`}
          onClick={topFunction}
        >
          <button className=" ">
            <Image
              src={scrollToTop}
              width={48}
              height={48}
              alt="scroll"
              className="rounded-sm"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
