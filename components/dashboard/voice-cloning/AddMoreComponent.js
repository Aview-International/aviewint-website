import React from 'react';
import DottedBorder from '../../UI/DottedBorder';
import PlusIcon from '../../../public/img/icons/plus.svg';
import Image from 'next/image';

const AddMoreComponent = ({ addVoiceOrSpeaker, padding }) => {
  return (
    <div>
      <DottedBorder classes="relative md:inline-block border-2 w-full h-full">
        <div
          className={`flex flex-col items-center rounded-2xl py-[${padding}px] justify-center`}
          onClick={addVoiceOrSpeaker}
        >
          <div onClick={() => 'added sample'} className="mt-3 cursor-pointer">
            <Image
              src={PlusIcon}
              alt="add-more-sample"
              width={20}
              height={20}
            />
          </div>
          <p className="mb-s1 block">Add more samples</p>
        </div>
      </DottedBorder>
    </div>
  );
};

export default AddMoreComponent;
