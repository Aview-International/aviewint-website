//In progress, needs to be tested before deploying

import { useState, useEffect } from 'react';

const LoaderAnime = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 p-2">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`h-4 w-4 rounded-full bg-white/50 ${
            activeIndex === index ? 'active' : ''
          }`}
        ></div>
      ))}
    </div>
  );
};

export default LoaderAnime;
