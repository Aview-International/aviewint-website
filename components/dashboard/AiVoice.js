import React from 'react';
import record from '../../public/img/icons/record.svg';
import Image from 'next/image';

const AiVoice = () => {
  return (
    <div className="container mx-auto w-2/5 py-32">
      <p>
        Record yourself reading through at least five prompts so we can create
        an AI voice tailored to yur own voice. Feel free to do more to achieve a
        more accurate voice.
      </p>
      <div className="my-10 flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2">
        <p className="text-xl">Prompt 1</p>
        <p className=" text-lg font-medium">
          &#8220;Like and subscribe to stay updated whenever I come out with a
          new video.&#8221;
        </p>
        <div className="my-4 mx-auto cursor-pointer rounded-full bg-gray-1 p-[10px]">
          <div className="gradient-1 rounded-full p-[2px]">
            <div className="flex items-center justify-center rounded-full bg-gray-1 p-[4px]">
              <Image src={record} alt="record" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-1 my-[6px] w-full rounded-2xl p-1"></div>
      <div className="flex flex-row justify-between text-xs">
        <p>0%</p>
        <p>0 / 5</p>
      </div>
    </div>
  );
};

export default AiVoice;
