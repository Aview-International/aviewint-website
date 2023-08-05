import React from 'react'
import record from '../../public/img/icons/record.svg';
import Image from 'next/image';

const AiVoice = () => {
  return (
    <div className='w-2/5 container mx-auto py-32'>
       <p>Record yourself reading through at least five prompts so we can create an AI voice tailored to yur own voice. Feel free to do more to achieve a more accurate voice.</p>
         <div className='w-full border-2 rounded-2xl flex flex-col my-10 gap-3 justify-center items-start p-s2'>
            <p className='text-xl'>Prompt 1</p>
            <p className=" font-medium text-lg">"Like and subscribe to stay updated whenever I come out with a new video."</p>
            <div className='rounded-full bg-gray-1 p-[10px] my-4 mx-auto cursor-pointer'>
                <div className='rounded-full p-[2px] gradient-1'>
                  <div className='bg-gray-1 rounded-full flex justify-center items-center p-[4px]'>
                    <Image src={record} alt="record" width={20} height={20}/>
                  </div>
                </div>
            </div>
         </div>
         <div className='rounded-2xl p-1 my-[6px] gradient-1 w-full'>
         </div>
         <div className='flex flex-row justify-between text-xs'>
            <p>0%</p>
            <p>0 / 5</p>
         </div>
    </div>
  )
}

export default AiVoice
