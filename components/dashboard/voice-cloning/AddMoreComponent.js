import React from 'react';
import DottedBorder from '../../UI/DottedBorder';
import PlusIcon from '../../../public/img/icons/plus.svg';
import Image from 'next/image';

const AddMoreComponent = ({ addVoiceOrSpeaker }) => {
  return (
    <div
      className="h-full max-h-[298px] w-full max-w-[225px] cursor-pointer"
      onClick={addVoiceOrSpeaker}
    >
      <DottedBorder classes="w-full h-full">
        <div className="flex h-full w-full flex-col place-content-center">
          <Image src={PlusIcon} alt="add-more-sample" width={30} height={30} />
          <p className="mb-s1 text-center text-lg mt-s2">Add another speaker</p>
        </div>
      </DottedBorder>
    </div>
  );
};

export default AddMoreComponent;
