import { Fragment, useEffect, useState } from 'react';
import AudioWave from './AudioWave';
import OnboardingButton from '../../Onboarding/button';



import VoiceRecordList from './VoiceRecordList';


const AiVoice = ({ prompt=0, initialRecordings=[] }) => {
  
  
  
  
  const [micState, setMicState] = useState('waiting');
  
  const [option, setOption] = useState(false);
 
  const [recordings, setIsRecordings] = useState(initialRecordings);
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

  useEffect(() => {
    getPermissionInitializeRecorder();
    return () => {
      setDestroyMic(true);
    };
  }, []);

  const uploadVoiceSamples = () => {
    setDestroyMic(!destroyMic)
    setOption(!option)
  };

  return (
    <div className='w-full flex flex-col justify-center items-center '>
    {!option ? 
      <div className='w-2/5'>
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
        {micState === 'allowed' && recordings.length < 5 ? (
          <AudioWave
            recordings={recordings}
            setIsRecordings={setIsRecordings}
            destroyMic={destroyMic}
            promptNumber={prompt}
          />
        ) : null}
      </div>

      {micState === 'allowed' && (
        <Fragment>
          <div
            className="gradient-1 my-s1 rounded-2xl p-1 transition-all"
            style={{ width: (recordings.length * 100) / 5 + '%' }}
          ></div>
          <div className="flex flex-row justify-between w-full text-xs">
            <p>{(recordings.length * 100) / 5}%</p>
            <p>{recordings.length} / 5</p>
          </div>
        </Fragment>
      )}
      { 
        <div className={`mx-auto my-s3 w-[250px] ${recordings.length < 5 ? 'hidden' : 'block'}`}>
          <OnboardingButton
            onClick={uploadVoiceSamples}
            
            >
            Save voice samples
          </OnboardingButton>
        </div>
      }
    </div>
    : <VoiceRecordList audioRecordings={recordings} /> }
  </div>
  );
};

export default AiVoice;
