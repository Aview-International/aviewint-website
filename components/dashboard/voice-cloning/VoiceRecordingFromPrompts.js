import { useEffect, useMemo, useState } from 'react';
import AudioWave from './AudioWave';
import VoiceRecordList from './VoiceRecordList';
import AudioPlayer from './AudioPlayer';
import OnboardingButton from '../../Onboarding/button';
import Border from '../../UI/Border';
import Button from '../../UI/Button';

const VoiceRecordingFromPrompts = ({ promptStage = 0, updateVoices }) => {
  const [micState, setMicState] = useState('waiting');
  const [option, setOption] = useState(false);
  const [prompt, setPrompt] = useState(promptStage);
  const [audioRecord, setAudioRecord] = useState(null);
  const [recordings, setRecordings] = useState([]);

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

  const uploadVoiceSamples = () => {
    setOption(!option);
  };

  useEffect(() => {
    getPermissionInitializeRecorder();
  }, []);

  const approveHandler = () => {
    let array = [...recordings];
    array.push(audioRecord);
    setRecordings(array);
    setPrompt((prompt) => prompt + 1);
    setAudioRecord(null);
  };

  const retryHandler = () => {
    setAudioRecord(null);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {!option ? (
        <div className="w-full">
          <div className="mb-4 flex w-full flex-row items-center justify-between">
            <p className=" text-start text-3xl font-semibold">
              Voice Sample {prompt + 1}
            </p>
            <GradientCircle prompt={prompt} />
          </div>
          <Border borderRadius="2xl">
            <div className="flex w-full flex-col items-start justify-center gap-3 rounded-2xl bg-black p-s2">
              {micState === 'waiting' && (
                <p data-aos="zoom-in-up" className="m-s3 text-lg font-medium">
                  Waiting for microphone usage, please allow microphone access
                  to record voice sample 🎙️
                </p>
              )}
              {micState === 'denied' && (
                <p data-aos="zoom-in-up" className="m-s3 text-lg font-medium">
                  Unfortunately, we are unable to access the microphone to
                  enable voice recording. Please check your privacy settings to
                  allow microphone usage 😪🎙️
                </p>
              )}
              {micState === 'allowed' && prompt < 25 && (
                <AudioWave
                  recordings={recordings}
                  setAudioRecord={setAudioRecord}
                  prompt={prompt}
                />
              )}
            </div>
          </Border>
          {audioRecord && (
            <div className={`mx-auto my-s2 md:w-1/2`}>
              <div className="flex flex-col items-center justify-center gap-y-8">
                <AudioPlayer audioRecord={audioRecord} />
                <div className="flex w-full flex-row items-center justify-between gap-2 md:w-5/6 md:justify-around">
                  <Button
                    purpose="onClick"
                    type="secondary"
                    fullWidth={true}
                    onClick={retryHandler}
                  >
                    Retry
                  </Button>
                  <Button
                    purpose="onClick"
                    type="primary"
                    fullWidth={true}
                    onClick={approveHandler}
                  >
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          )}
          {prompt >= 5 && (
            <div className={`mx-auto my-s3 w-[250px]`}>
              <OnboardingButton onClick={uploadVoiceSamples}>
                Preview recordings
              </OnboardingButton>
            </div>
          )}
        </div>
      ) : (
        <VoiceRecordList recordings={recordings} prompt={prompt} updateVoices={updateVoices} />
      )}
    </div>
  );
};

const GradientCircle = ({ prompt }) => {
  const percentage = useMemo(() => {
    const val = (prompt / (prompt < 5 ? 5 : 25)) * 100;
    return Math.round(val);
  }, [prompt]);

  const circumference = 157;

  const offset = useMemo(() => {
    const val = circumference - (percentage / 100) * circumference;
    return Math.round(val);
  }, [percentage]);

  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <p className="text-sm">{`${percentage}%`}</p>
      <svg className="absolute -rotate-90" width="56" height="56">
        <circle
          cx="28"
          cy="28"
          r="25"
          fill="none"
          stroke="#000017"
          strokeWidth="7"
        ></circle>
        <circle
          cx="28"
          cy="28"
          r="25"
          fill="none"
          stroke="#00ffff"
          strokeWidth="7"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
        ></circle>
      </svg>
    </div>
  );
};

export default VoiceRecordingFromPrompts;
