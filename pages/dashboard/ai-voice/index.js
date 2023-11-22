import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import { useState } from 'react';
import AiVoice from '../../../components/dashboard/voice-cloning/AiVoice';
import UploadVoiceSamples from '../../../components/dashboard/voice-cloning/UploadVoiceSamples';
import { useSelector } from 'react-redux';
import PlayVoiceSample from '../../../components/dashboard/voice-cloning/PlayVoiceSample';
import Arrow from '../../../public/img/icons/arrow-right.svg';
import Image from 'next/image';
import Card from '../../../components/UI/Card';


const AiVoiceSteps = [
  {
   title: 'Record',
   description: 'Record yourself reading through at least five prompts so we can create an AI voice tailored to your own voice. Feel free to do more to achieve a more accurate voice.'
  },
  {
    title: 'Upload',
    description: 'Uploaded pre-recorded voice samples of you speaking clearly that is devoid of noise and loud background. Upload at least 5 samples to achieve a better voice cloning effect.'
   },
];

const AIvoice = () => {
  const [option, setOption] = useState('');

  return (
    <>
      <PageTitle title="AI Voice Cloning" />
      <div className="mx-auto h-full max-w-[1200px] rounded-xl bg-white-transparent">
        <div className="container mx-auto  py-10 md:py-16 lg:w-[95%] flex flex-col h-full justify-start items-start">
          {option && (
            <button
              className="mb-s4 flex w-full items-center hover:underline"
              onClick={() => setOption('')}
            >
              <Image
                src={Arrow}
                alt=""
                className="rotate-180"
                width={18}
                height={18}
              />
              <span>Go back</span>
            </button>
          )}
          <div className='w-full h-full'>
          {!option && <SelectAIOption setOption={setOption} />}
          {option === 'Record' && <AiVoice />}
          {option === 'Upload' && <UploadVoiceSamples />}
          </div>
          
        </div>
      </div>
    </>
  );
};

const SelectAIOption = ({ setOption }) => {
  const { voiceId, uid } = useSelector((state) => state.user);
 
  return (
    <div className='w-full h-full'>
      {voiceId ? (
        <PlayVoiceSample voiceId={voiceId} uid={uid} />
      ) : (
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-s4 w-full h-full" data-aos="zoom-in-up">
          {AiVoiceSteps.map((stepItem, index) => {
            return (
              <div className='flex flex-col justify-start gap-y-8 rounded-xl text-white' key={index}>
              <Card borderRadius="2xl">
                <div className='flex flex-col items-start justify-center px-s5 py-s8 gap-y-3 cursor-pointer' onClick={()=> setOption(stepItem.title)}>
                 <p className='text-4xl'>{stepItem.title}<span>{' '}Voice Sample</span></p>
                 <p className='text-lg'>{stepItem.description}</p>
                </div>
              </Card>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

AIvoice.getLayout = DashboardLayout;

export default AIvoice;
