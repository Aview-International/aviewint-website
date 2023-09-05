import Graphics from '../../../public/img/graphics/translator-landing.png';
import Image from 'next/image';
import OnboardingButton from '../../Onboarding/button';
import { VOICEPROMPTS } from '../../../constants/constants';
import { testVoiceCloning } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import { useRef, useState } from 'react';

const PlayVoiceSample = ({ voiceId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  const audioRef = useRef(null);
  const testVoice = async () => {
    try {
      setIsLoading(true);
      const singleVoiceId = Object.values(voiceId)[0];
      const source = await testVoiceCloning(VOICEPROMPTS[0], singleVoiceId);
      setShowPlayer(true);
      let blob = new Blob([source.data], { type: 'audio/mp3' });
      const audioPlayer = audioRef.current;
      audioPlayer.src = URL.createObjectURL(blob);
      audioPlayer.load();
      audioPlayer.play();
      setIsLoading(false);
    } catch (error) {
      setShowPlayer(false);
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <div>
      <div className="mx-auto my-s3 block w-2/5">
        <Image src={Graphics} alt="" layout="responsive" />
      </div>
      <br />

      <p className="text-center text-xl">
        {Object.keys(voiceId).length} voice{' '}
        {Object.keys(voiceId).length > 1 ? 'samples' : 'sample'} currently
        available
      </p>
      <br />

      <div className="mt-s3 flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2 md:mt-0 md:ml-s2">
        <p>{VOICEPROMPTS[0]}</p>

        <div className="mx-auto mt-s2 w-full">
          <OnboardingButton
            theme="light"
            isLoading={isLoading}
            onClick={testVoice}
          >
            Play example of voice clone in English
          </OnboardingButton>
          <div className="mt-s3 flex w-full justify-center">
            <audio hidden={!showPlayer} ref={audioRef} controls></audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVoiceSample;
