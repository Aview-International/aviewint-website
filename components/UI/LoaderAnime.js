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
    <div className="my-s20 flex items-center justify-center gap-2 p-2">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`circle h-5 w-5 rounded-full bg-red/50 ${
            activeIndex === index ? 'active' : ''
          }`}
        ></div>
      ))}
    </div>
    // <div className="my-s20 flex items-center justify-center gap-5 p-2">
    //   <div className="circle h-5 w-5 rounded-full bg-red/50"></div>
    //   <div className="delay1 circle h-5 w-5 rounded-full bg-green/60"></div>
    //   <div className="delay2 circle h-5 w-5 rounded-full bg-blue/30"></div>
    //   <div className="delay3 circle h-5 w-5 rounded-full bg-purple/50"></div>
    //   <div className="delay4 circle h-5 w-5 rounded-full bg-white/90"></div>
    // </div>
  );
};

export default LoaderAnime;
