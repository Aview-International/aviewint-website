import React from 'react';
import Image from 'next/image';
import TrashIcon from '../../public/img/icons/trash.svg';

const VoiceSample = ({ id, audioData, type, deleteAudioSample }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-gray-1 p-3 text-white md:w-full md:p-4">
      <div className="flex w-full items-center justify-between">
        <p>
          {type == 'record' ? 'Audio Sample' : 'Speaker'} <span>{id}</span>
        </p>
        <div
          onClick={() => deleteAudioSample(audioData)}
          className="cursor-pointer"
        >
          <Image src={TrashIcon} alt="Delete-Voice" width={20} height={20} />
        </div>
      </div>
      <audio controls className="w-full rounded-full bg-white-transparent">
        <source src={URL.createObjectURL(audioData)} type="audio/webm" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default VoiceSample;
