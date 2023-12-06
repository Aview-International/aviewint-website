import { Fragment, useEffect, useState } from 'react';
import AudioWave from './AudioWave';
import OnboardingButton from '../../Onboarding/button';
import VoiceRecordList from './VoiceRecordList';

const VoiceRecordingFromPrompts = () => {
  const [micState, setMicState] = useState('waiting');
  const [option, setOption] = useState(false);
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
    <div className="flex w-full flex-col items-center justify-center ">
      {!option ? (
        <div className="w-4/5 md:w-2/5">
          <div className="my-5 flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2 ">
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
            {micState === 'allowed' && recordings.length < 25 ? (
              <AudioWave
                recordings={recordings}
                setRecordings={setRecordings}
                destroyMic={destroyMic}
              />
            ) : null}
          </div>

          {micState === 'allowed' && (
            <Fragment>
              <div
                className="gradient-1 my-s1 rounded-2xl p-1 transition-all"
                style={{
                  width:
                    (recordings.length * 100) /
                      (recordings.length >= 5 ? 25 : 5) +
                    '%',
                }}
              ></div>
              <div className="flex w-full flex-row justify-between text-xs">
                <p>
                  {(recordings.length * 100) /
                    (recordings.length >= 5 ? 25 : 5)}
                  %
                </p>
                <p>
                  {recordings.length} / {recordings.length >= 5 ? 25 : 5}
                </p>
              </div>
            </Fragment>
          )}

          <div className={`mx-auto my-s3 w-[250px]`}>
            <OnboardingButton
              onClick={uploadVoiceSamples}
              disabled={recordings.length < 5}
            >
              Preview recordings
            </OnboardingButton>
          </div>
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

export default VoiceRecordingFromPrompts;
