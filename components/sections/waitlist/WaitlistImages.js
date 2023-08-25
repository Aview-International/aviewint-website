import React from 'react';
import Image from 'next/image';

const WaitlistImages = ({ image }) => {
  return (
    <>
      <div className="relative h-full w-full cursor-pointer lg:h-[340px] lg:w-[560px]">
        <Image
          src={image}
          alt="waitlist-image"
          className="rounded-md object-cover"
        />
        <div
          className={`gradient-2 transition-300 absolute left-1/2 top-[55%] -z-10 h-[104%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-70 blur-2xl md:opacity-95 md:blur-3xl`}
        ></div>
      </div>
    </>
  );
};

export default WaitlistImages;
