import React from 'react';
import DottedBorder from '../../UI/DottedBorder';
import PlusIcon from '../../../public/img/icons/plus.svg';
import Image from 'next/image';


const AddMoreComponent = ({ addVoiceOrSpeaker, padding }) => {
  return (
    <>
     <DottedBorder classes="relative md:inline-block border-2">
           <div className={`flex flex-col items-center rounded-2xl w-full h-full justify-center bg-red py-s${padding}`} onClick={addVoiceOrSpeaker}>
              <div onClick={() => 'added sample'} className='cursor-pointer mt-3'>

                <Image src={PlusIcon} alt="add-more-sample" width={20} height={20}/>
              </div>
              <label className="mb-s1 block">Add more samples</label>
            
          
            </div>
      </DottedBorder> 
    </>
  );
};

export default AddMoreComponent;
