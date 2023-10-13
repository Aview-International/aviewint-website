import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { LANDNG_PAGE_EMPOWER_SECTION } from '../../../constants/constants';
import mobileAnime from '../../../public/documents/mobile.json';

const EmpowerGlobal = () => {
  return (
    <section className="section m-horizontal text-white" data-aos="zoom-out">
      <h2 className="heading mb-s5">Empower Your Global Vision with Aview</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        <div className="col-span-1 grid h-full grid-cols-1 overflow-y-hidden rounded-2xl bg-white-transparent p-4 md:col-span-2 md:h-[640px] md:grid-cols-2 md:p-8">
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="h2 w-2/3">Unified Content Management</h3>
            <p className="body md:w-5/6">
              Seamlessly integrate all your social media channels into Aview,
              streamlining your global content{' '}
              <span className="md:block">strategy.</span>
            </p>
          </div>
          <div className="flex h-full w-full flex-row justify-center">
            <div className="relative top-16 h-[60%] w-3/4 md:top-5 md:h-[45%] md:w-[55%]">
              <Lottie animationData={mobileAnime} />
            </div>
          </div>
        </div>
        {LANDNG_PAGE_EMPOWER_SECTION.map((data, i) => (
          <SubTranslatedContent {...data} key={i} />
        ))}
      </div>
    </section>
  );
};

const SubTranslatedContent = ({
  image,
  sectionText,
  sectionTitle,
  imageWidth,
}) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-2xl bg-white-transparent p-4 md:p-8">
      <Image src={image} alt="" height={326} width={imageWidth} />

      <div className='mt-5'>
        <h3 className="mb-s2 text-5xl font-semibold md:text-6xl">
          {sectionTitle}
        </h3>
        <p className="body">{sectionText}</p>
      </div>
    </div>
  );
};

export default EmpowerGlobal;
