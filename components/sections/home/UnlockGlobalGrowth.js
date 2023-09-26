import React from 'react';
import Button from '../../UI/Button';
import videoAsset from '../../../public/img/aview/landing_page_video.mp4';

const UnlockGlobalGrowth = () => {
  
  return (
    <section className="section m-horizontal mt-12 lg:mt-28">
      <div className="flex flex-col justify-start md:justify-center items-start md:items-center">
          <h1 className="title">
            Unlock Global Growth, One Click at a Time
          </h1>
          <p className="body mt-2 md:mt-0 mb-8 max-w-full md:text-center">
            Monetize, translate, and distribute your content to millions worldwide with Aview.
          </p>
          <div className='w-full flex justify-start md:justify-center'>
            <Button type="tertiary" purpose="submit">Join Waitlist</Button> 
          </div>
          <div className='w-[85%] h-[85%] mt-12 relative rounded-[4px] md:rounded-2xl cursor-pointer'>
           <video className="max-w-full rounded-[4px] md:rounded-2xl" autoPlay loop muted>
            <source src={videoAsset} type="video/mp4"/>
           </video>
           <div className={`gradient-2 transition-300 absolute left-1/2 top-[50%] -z-10 h-[102%] w-[102%] -translate-x-1/2 -translate-y-1/2 rounded-2xl  opacity-70 blur-xl md:opacity-95 md:blur-3xl`}
           ></div>
          </div>
      </div>
    </section>
  );
};

export default UnlockGlobalGrowth;
