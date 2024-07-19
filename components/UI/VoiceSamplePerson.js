import React from 'react';
import Image from 'next/image';
import Avatar from '../../public/img/graphics/user.webp';
import DottedBorder from './DottedBorder';
import GlobalButton from './GlobalButton';
import check from '../../public/img/icons/check.svg';

const VoiceSamplePerson = ({ onClick }) => {
  return (
    <>
     <DottedBorder  classes="relative inline-block border-2">
       <div className='w-full h-full p-3 flex flex-col gap-x-2 gap-y-4'>
         <Image src={Avatar} alt='voice-sample-person' width={150} height={150}/>
         <div className='w-full flex flex-row justify-between items-center'>
           <div className="relative w-[85%]">
            <input
              type="text"
              placeholder="Speaker 1" 
              className="outline-none border-b border-white focus:border-blue-500 py-2  text-white bg-transparent"
              id="speaker"
            />
            <label htmlFor="speaker" className="absolute top-0 left-0  py-1 transition-all duration-300 ease-in-out h-2 text-white cursor-text"></label>
           </div>
           <Image src={check} alt="voice-sample-check-mark" width={30} height={30}/> 
         </div>
         <GlobalButton type="secondary" purpose="onClick" fullWidth={true} onClick={onClick}>
            Upload files
         </GlobalButton> 
       </div>
     </DottedBorder> 
    </>
  );
};

export default VoiceSamplePerson;
