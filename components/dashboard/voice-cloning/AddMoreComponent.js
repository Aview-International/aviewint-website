import React from 'react';
import DottedBorder from '../../UI/DottedBorder';
import PlusIcon from '../../../public/img/icons/plus.svg';
import Image from 'next/image';

const AddMoreComponent = ({ addVoiceOrSpeaker }) => {
  return (
    <div className="h-full max-h-[298px] w-full max-w-[225px]">
      <DottedBorder classes="md:inline-block border-2 w-full h-full">
        <div
          className={`flex h-full flex-col place-content-center rounded-2xl`}
          onClick={addVoiceOrSpeaker}
        >
          <div className="mx-auto mt-3 block cursor-pointer">
            <Image
              src={PlusIcon}
              alt="add-more-sample"
              width={20}
              height={20}
            />
          </div>
          <p className="mb-s1 text-center">Add another speaker</p>
        </div>
      </DottedBorder>
    </div>
  );
};

export default AddMoreComponent;
