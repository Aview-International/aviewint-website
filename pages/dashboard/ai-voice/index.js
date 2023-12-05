import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import { useState } from 'react';
import VoiceRecordingFromPrompts from '../../../components/dashboard/voice-cloning/VoiceRecordingFromPrompts';
import UploadVoiceSamples from '../../../components/dashboard/voice-cloning/UploadVoiceSamples';
import { useSelector } from 'react-redux';
import PlayVoiceSample from '../../../components/dashboard/voice-cloning/PlayVoiceSample';
import Arrow from '../../../public/img/icons/arrow-right.svg';
import Image from 'next/image';
import Card from '../../../components/UI/Card';
import OnboardingButton from '../../../components/Onboarding/button';

const AiVoiceSteps = [
  {
    title: 'Record',
    description:
      'Record yourself reading through at least five prompts so we can create an AI voice tailored to your own voice. Feel free to do more to achieve a more accurate voice.',
  },
  // {
  //   title: 'Upload',
  //   description:
  //     'Uploaded pre-recorded voice samples of you speaking clearly that is devoid of noise and loud background. Upload at least 5 samples to achieve a better voice cloning effect.',
  // },
];

const AIvoice = () => {
  const [option, setOption] = useState('');

  return (
    <>
      <PageTitle title="AI Voice Cloning" />
      <div className="mx-auto h-full max-w-[1200px] rounded-xl bg-white-transparent">
        <div className="container mx-auto  flex h-full flex-col items-start justify-start py-10 md:py-16 lg:w-[95%]">
          {option && (
            <button
              className="mb-s4 flex items-center hover:underline"
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
          <div className="h-full w-full">
            {!option && <SelectAIOption setOption={setOption} />}
            {option === 'Record' && <VoiceRecordingFromPrompts />}
            {option === 'Upload' && <UploadVoiceSamples />}
          </div>
        </div>
      </div>
    </>
  );
};

const SelectAIOption = ({ setOption }) => {
  const { voiceId, uid } = useSelector((state) => state.user);

  return voiceId ? (
    <PlayVoiceSample voiceId={voiceId} uid={uid} />
  ) : (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-s2 md:flex-row md:gap-s4"
      data-aos="zoom-in-up"
    >
      {AiVoiceSteps.map((stepItem, idx) => (
        <div key={idx} className="w-1/2">
          <Card borderRadius="2xl">
            <div className="bg-white-transparent p-s4">
              <h3 className="text-4xl">{stepItem.title}</h3>
              <p className="mt-2 text-lg">{stepItem.description}</p>
            </div>
          </Card>
          <div className="mt-s4 w-2/5">
            <OnboardingButton
              onClick={() => setOption(stepItem.title)}
              theme={stepItem.title === 'Record' ? 'light' : 'dark'}
            >
              Begin
            </OnboardingButton>
          </div>
        </div>
      ))}
    </div>
  );
};

AIvoice.getLayout = DashboardLayout;

export default AIvoice;
