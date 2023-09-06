import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import OnboardingButton from '../../../components/Onboarding/button';
import { useState } from 'react';
import AiVoice from '../../../components/dashboard/voice-cloning/AiVoice';
import UploadVoiceSamples from '../../../components/dashboard/voice-cloning/UploadVoiceSamples';
import { useSelector } from 'react-redux';
import PlayVoiceSample from '../../../components/dashboard/voice-cloning/PlayVoiceSample';
import Arrow from '../../../public/img/icons/arrow-right.svg';
import Image from 'next/image';

const AIvoice = () => {
  const [option, setOption] = useState('');

  return (
    <>
      <PageTitle title="AI Voice Cloning" />
      <div className="mx-auto h-full max-w-[1200px] rounded-xl bg-white-transparent ">
        <div className="container mx-auto w-[95%] py-10 md:py-16 lg:w-4/5">
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
          {!option && <SelectAIOption setOption={setOption} />}
          {option === 'record' && <AiVoice />}
          {option === 'upload' && <UploadVoiceSamples />}
        </div>
      </div>
    </>
  );
};

const SelectAIOption = ({ setOption }) => {
  const { voiceId, uid } = useSelector((state) => state.user);

  return (
    <div>
      {voiceId ? (
        <PlayVoiceSample voiceId={voiceId} uid={uid} />
      ) : (
        <div className="mt-s8 flex flex-col md:flex-row" data-aos="zoom-in-up">
          <div className="flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2">
            <p>
              Record yourself reading through at least five prompts so we can
              create an AI voice tailored to your own voice. Feel free to do
              more to achieve a more accurate voice.
            </p>
            <div className="mx-auto mt-s2 w-[200px]">
              <OnboardingButton
                theme="light"
                onClick={() => setOption('record')}
              >
                Record Voice Sample
              </OnboardingButton>
            </div>
          </div>

          <div className="mt-s3 flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2 md:mt-0 md:ml-s2">
            <p>
              Uploaded pre-recorded voice samples of you speaking clearly that
              is devoid of noise and loud background. Upload at least 5 samples
              to achieve a better voice cloning effect.
            </p>
            <div className="mx-auto mt-s2 w-[200px]">
              <OnboardingButton
                theme="light"
                onClick={() => setOption('upload')}
              >
                Upload Voice Sample
              </OnboardingButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

AIvoice.getLayout = DashboardLayout;

export default AIvoice;
