import { Fragment, useEffect, useMemo, useState } from 'react';
import AudioWave from './AudioWave';
import OnboardingButton from '../Onboarding/button';
import { uploadNewVoiceSamples } from '../../services/apis';

const AiVoice = () => {
  const [micState, setMicState] = useState('waiting');
  const [isLoading, setIsLoading] = useState(false);
  const [recordings, setIsRecordings] = useState([]);

  const getPermissionInitializeRecorder = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setMicState('allowed');
    } catch (error) {
      setMicState('denied');
    }
  };

  useEffect(() => {
    getPermissionInitializeRecorder();
  }, []);

  const uploadVoiceSamples = async () => {
    try {
      setIsLoading(true);
      await uploadNewVoiceSamples(recordings);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const recordingPercentage = useMemo(() => {
    if (recordings.length < 5) return (recordings.length * 100) / 5;
    else return (recordings.length * 100) / 25;
  }, [recordings]);

  return (
    <>
      <div className="my-5 flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2">
        {micState === 'waiting' && (
          <p data-aos="zoom-in-up" className="m-s3 text-lg font-medium">
            Waiting for microphone usage, please allow microphone access to
            record voice sample 🎙️
          </p>
        )}
        {micState === 'denied' && (
          <p data-aos="zoom-in-up" className="m-s3 text-lg font-medium">
            Unfortunately, we are unable to access the microphone to enable
            voice recording. Please check your privacy settings to allow
            microphone usage 😪🎙️
          </p>
        )}
        {micState === 'allowed' && (
          <AudioWave
            recordings={recordings}
            setIsRecordings={setIsRecordings}
          />
        )}
      </div>

      {micState === 'allowed' && (
        <Fragment>
          <div
            className="gradient-1 my-s1 rounded-2xl p-1 transition-all"
            style={{ width: recordingPercentage + '%' }}
          ></div>
          <div className="flex flex-row justify-between text-xs">
            <p>{recordingPercentage}%</p>
            <p>
              {recordings.length} / {recordings.length < 5 ? '5' : '25'}
            </p>
          </div>
        </Fragment>
      )}

      <div className="grid grid-cols-2 gap-x-s8">
        {recordings.map((blob, i) => (
          <div key={i} className="mx-2">
            <p>Audio Sample {i + 1}</p>
            <audio controls>
              <source src={URL.createObjectURL(blob)} type="audio/webm" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>

      {recordings.length > 0 && (
        <div className="mx-auto my-s3 w-[250px]">
          <OnboardingButton
            disabled={recordings.length < 5}
            onClick={uploadVoiceSamples}
            isLoading={isLoading}
          >
            Save voice samples
          </OnboardingButton>
        </div>
      )}
    </>
  );
};

export default AiVoice;
