import { Fragment, useRef, useState } from 'react';
import record from '../../../public/img/icons/record.svg';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { VOICEPROMPTS } from '../../../constants/constants';
import useWavesurfer from '../../../hooks/useWaveSurfer';

const AudioWave = ({ recordings, setAudioRecord, prompt }) => {
  const containerRef = useRef(null);
  const { recorder } = useWavesurfer(containerRef, {
    waveColor: 'rgb(200, 0, 200)',
    progressColor: 'rgb(100, 0, 100)',
  });
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    try {
      if (recordings.length >= 25) {
        toast('Maximum voice samples reached');
        return;
      }
      recorder.startMic();
      recorder.startRecording().then(() => {
        setIsRecording(true);
      });
      setIsRecording(true);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const stopRecording = () => {
    recorder.on('record-end', (blob) => {
      setAudioRecord(blob);
    });
    recorder.stopRecording();
    setIsRecording(false);
  };

  return (
    <Fragment>
      <p className="my-2 text-lg font-medium" data-aos="zoom-in-up">
        {VOICEPROMPTS[prompt]}
      </p>
      {!isRecording && (
        <Fragment>
          <div
            onClick={startRecording}
            className="relative mx-auto flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-gray-1"
          >
            <div className="gradient-1 h-4/5 w-4/5 animate-ping rounded-full"></div>
            <button className="absolute flex items-center justify-center rounded-full bg-gray-1 p-[4px]">
              <Image src={record} alt="record" width={20} height={20} />
            </button>
          </div>
          <p className="my-1 w-full text-center text-lg">Click to record</p>
        </Fragment>
      )}
      <div className={`w-full ${isRecording ? 'block' : 'hidden'}`}>
        <div ref={containerRef}></div>
        <button className="mx-auto block text-lg" onClick={stopRecording}>
          Stop Recording
        </button>
      </div>
    </Fragment>
  );
};

export default AudioWave;
