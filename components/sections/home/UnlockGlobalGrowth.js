import React from 'react';
import Button from '../../UI/Button';
import videoAsset from '../../../public/img/aview/landing_page_video.mp4';

const UnlockGlobalGrowth = () => {
  return (
    <section className="section m-horizontal mt-12 lg:mt-28">
      <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
        <h1 className="title">Unlock Global Growth, One Click at a Time</h1>
        <p className="body mt-2 mb-8 max-w-full md:mt-0 md:text-center">
          Monetize, translate, and distribute your content to millions worldwide
          with Aview.
        </p>
        <div className="flex w-full justify-start md:justify-center">
          <Button type="tertiary" purpose="submit">
            Join Waitlist
          </Button>
        </div>
        <div className="relative mt-12 h-[85%] cursor-pointer">
          <video className="rounded-lg" autoPlay loop muted>
            <source src={videoAsset} type="video/mp4" />
          </video>
          <div
            className={`gradient-2 transition-300 absolute left-1/2 top-[50%] -z-10 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 opacity-70 blur-xl md:opacity-95 md:blur-3xl`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default UnlockGlobalGrowth;
