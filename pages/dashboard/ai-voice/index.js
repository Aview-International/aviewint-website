import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import VoiceRecordingFromPrompts from '../../../components/dashboard/voice-cloning/VoiceRecordingFromPrompts';
import UploadVoiceSamples from '../../../components/dashboard/voice-cloning/UploadVoiceSamples';
import { useSelector } from 'react-redux';
import PlayVoiceSample from '../../../components/dashboard/voice-cloning/PlayVoiceSample';
import Arrow from '../../../public/img/icons/arrow-right.svg';
import Image from 'next/image';
import Border from '../../../components/UI/Border';
import OnboardingButton from '../../../components/Onboarding/button';
import { useRouter } from 'next/router';

const AiVoiceSteps = [
  {
    title: 'Record',
    description:
      'Record yourself reading through at least five prompts so we can create an AI voice tailored to your own voice. Feel free to do more to achieve a more accurate voice.',
  },
  {
    title: 'Upload',
    description:
      'Uploaded pre-recorded voice samples of you speaking clearly that is devoid of noise and loud background. Upload at least 5 samples to achieve a better voice cloning effect.',
  },
];

const AIvoice = () => {
  const { query, push, back } = useRouter();

  return (
    <>
      <PageTitle title="AI Voice Cloning" />
      <div className="m-horizontal rounded-xl bg-white-transparent">
        <div className="container mx-auto px-s2 py-4 md:py-16 lg:w-[95%]">
          {query.tab && (
            <button
              className="mb-s4 flex items-center hover:underline"
              onClick={back}
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
            {!query.tab && <SelectAIOption push={push} />}
            {query.tab == 'record' && <VoiceRecordingFromPrompts />}
            {query.tab == 'upload' && <UploadVoiceSamples />}
          </div>
        </div>
      </div>
    </>
  );
};

const SelectAIOption = ({ push }) => {
  const { voiceId, uid } = useSelector((state) => state.user);

  return voiceId ? (
    <PlayVoiceSample voiceId={voiceId} uid={uid} />
  ) : (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-s2 md:flex-row md:gap-s4"
      data-aos="zoom-in-up"
    >
      {AiVoiceSteps.map((stepItem, idx) => (
        <div key={idx} className="group w-full p-2 md:w-1/2 md:p-0">
          <Border borderRadius="2xl" fullWidth={true}>
            <div className="rounded-2xl bg-black p-s2 md:p-s4">
              <h3 className="text-4xl">{stepItem.title}</h3>
              <p className="mt-2 text-lg">{stepItem.description}</p>
            </div>
          </Border>
          <div className="mt-s4 w-full md:w-2/5">
            <OnboardingButton
              onClick={() =>
                push(
                  '/dashboard/ai-voice?tab=' +
                    stepItem.title.toLocaleLowerCase()
                )
              }
              theme={stepItem.title === 'Record' ? 'light' : 'dark'}
            >
              Select
            </OnboardingButton>
          </div>
        </div>
      ))}
    </div>
  );
};

AIvoice.getLayout = DashboardLayout;

export default AIvoice;
