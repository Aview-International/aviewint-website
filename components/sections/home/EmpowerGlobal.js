import React from 'react';
import Image from 'next/image';
import Lottie from "lottie-react";
import { LANDNG_PAGE_EMPOWER_SECTION } from '../../../constants/constants';
import mobileAnime from '../../../public/documents/mobile.json';

const EmpowerGlobal = () => {
  
  return (
    <section className="section m-horizontal text-white" data-aos="zoom-out">
      <h2 className="heading mb-s5">Empower Your Global Vision with Aview</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10'>
        <div className='h-full md:h-[640px] grid grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-2 p-4 md:p-8 rounded-2xl bg-white-transparent overflow-y-hidden'>
          <div className='flex flex-col justify-center items-start gap-5'>
            <h3 className="h2 w-2/3">Unified Content Management</h3>
            <p className="body md:w-5/6">
              Seamlessly integrate all your social media channels into Aview, streamlining your global content <span className="md:block">strategy.</span>
            </p>
          </div>
          <div className='flex flex-row justify-center w-full h-full'>
            <div className='w-3/4 h-[60%] md:w-[55%] md:h-[45%] relative top-16 md:top-5'>
             <Lottie
              animationData={mobileAnime}
             />
            </div>
          </div>
        </div>
        <SubTranslatedContent />
      </div>
    </section>
  );
};

const SubTranslatedContent = () => {
  return (
    <>
     {
      React.Children.toArray(
        LANDNG_PAGE_EMPOWER_SECTION.map((item, index) => {
          return (
            <div className='flex flex-col p-4 md:p-8 rounded-2xl bg-white-transparent' key={item.id}>
              <Image src={item.image} alt={`empower-${item.sectionTitle}`} width="360" height="360"/>
                <div className={`${index === 1 ? 'md:mt-8' : 'md:mt-20'}`}>
                <h3 className={`${index === 1 && 'w-full md:w-3/4'} h2 md:mb-s2.5`}>
                  {item.sectionTitle}
                </h3>  
                <p className="body">
                  {item.sectionText}
                </p>  
              </div> 
            </div>
          )
        })
       )
      }
    </>
  )
};

export default EmpowerGlobal;
