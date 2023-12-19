import { useEffect, useState } from 'react';
import AudioWave from './AudioWave';
import VoiceRecordList from './VoiceRecordList';
import AudioPlayer from './AudioPlayer';
import OnboardingButton from '../../Onboarding/button';
import Border from '../../UI/Border';

const VoiceRecordingFromPrompts = () => {
  const [micState, setMicState] = useState('waiting');
  const [option, setOption] = useState(false);
  const [prompt, setPrompt] = useState(0);
  const [audioRecord, setAudioRecord] = useState(null);
  const [recordings, setRecordings] = useState([]);
  const [destroyMic, setDestroyMic] = useState(false);

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
    setDestroyMic(!destroyMic);
    setOption(!option);
  };

  useEffect(() => {
    getPermissionInitializeRecorder();
    return () => {
      setDestroyMic(true);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      {!option ? (
        <div className="w-full">
          <div className="mb-4 flex w-full flex-row items-center justify-between">
            <p className=" text-start text-3xl font-semibold">
              Voice Sample {prompt + 1}
            </p>
            <GradientCircle array={recordings} />
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
              {micState === 'allowed' && recordings.length < 25 ? (
                <AudioWave
                  recordings={recordings}
                  destroyMic={destroyMic}
                  setAudioRecord={setAudioRecord}
                  setPrompt={setPrompt}
                  prompt={prompt}
                />
              ) : null}
            </div>
          </Border>
          <div className={`mx-auto my-s2 h-full w-full md:w-1/2`}>
            {audioRecord ? (
              <AudioPlayer
                audioBlob={audioRecord}
                recordings={recordings}
                setRecordings={setRecordings}
                setPrompt={setPrompt}
                setAudioRecord={setAudioRecord}
              />
            ) : null}
          </div>
          {recordings.length >= 5 ? (
            <div className={`mx-auto my-s3 w-[250px]`}>
              <OnboardingButton onClick={uploadVoiceSamples}>
                Preview recordings
              </OnboardingButton>
            </div>
          ) : null}
        </div>
      ) : (
        <VoiceRecordList
          recordings={recordings}
          setRecordings={setRecordings}
        />
      )}
    </div>
  );
};

const GradientCircle = ({ array }) => {
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    const filledItems = array.filter((item) => item !== undefined).length;
    const percentage = (filledItems / (array.length >= 5 ? 25 : 5)) * 100;
    setCompletionPercentage(percentage);
  }, [array]);

  return (
    <div className="relative">
      <div className="bg-gray-300 relative h-14 w-14 overflow-hidden rounded-full md:h-20 md:w-20">
        <div
          className="absolute top-0 left-0 h-full w-full rounded-full transition-all"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, #ff8a00 0%, #e52e71 ${completionPercentage}%, #f0f0f0 ${completionPercentage}%)`,
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-sm font-semibold text-black md:text-lg">
          {completionPercentage}%
        </div>
      </div>
    </div>
  );
};

export default VoiceRecordingFromPrompts;
