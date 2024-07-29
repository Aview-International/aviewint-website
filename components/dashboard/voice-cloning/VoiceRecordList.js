import { useState } from 'react';
import GlobalButton from '../../Onboarding/button';
import { useRouter } from 'next/router';
import { uploadRecordedVoice } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import { VOICEPROMPTS } from '../../../constants/constants';
import Border from '../../UI/Border';
import AudioPlayer from './AudioPlayer';
import { useSelector } from 'react-redux';

const VoiceRecordList = ({ recordings, prompt, updateVoices = false }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const voiceIds = useSelector((data) => data.user.voiceId);

  const saveAllRecordedVoiceSamples = async () => {
    try {
      setIsLoading(true);
      updateVoices
        ? await uploadRecordedVoice(recordings, voiceIds, true)
        : await uploadRecordedVoice(recordings);
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <div>
      <p className="text-center text-xl md:text-5xl">
        Review your voice samples
      </p>
      <div className="my-4 flex h-full w-full flex-col items-center justify-center gap-y-s4 px-2 md:gap-y-s8 md:p-0">
        {recordings.map((blob, index) => (
          <div
            key={index}
            className="flex h-full w-full flex-col items-start justify-center gap-y-5 text-white"
          >
            <p className="text-3xl font-normal">
              Voice sample {updateVoices ? index + prompt - 1 : index + 1}
            </p>
            <Border borderRadius="2xl">
              <div className="rounded-2xl bg-black p-s2 text-lg md:p-s4">
                {VOICEPROMPTS[updateVoices ? index + prompt - 2 : index]}
              </div>
            </Border>
            <AudioPlayer audioRecord={blob} />
          </div>
        ))}
      </div>
      <div className="mx-auto mt-s4 w-3/4 max-w-[250px] gap-5">
        <GlobalButton
          disabled={prompt < 5}
          onClick={saveAllRecordedVoiceSamples}
          isLoading={isLoading}
          theme="light"
        >
          Save recordings
        </GlobalButton>
      </div>
    </div>
  );
};

export default VoiceRecordList;
