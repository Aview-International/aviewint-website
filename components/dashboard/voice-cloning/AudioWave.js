import { Fragment, useEffect, useRef, useState } from 'react';
import record from '../../../public/img/icons/record.svg';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record';
import Image from 'next/image';
import { toast } from 'react-toastify';

const AudioWave = ({ recordings, setIsRecordings }) => {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      container: containerRef.current,
      waveColor: 'rgb(200, 0, 200)',
      progressColor: 'rgb(100, 0, 100)',
    });

    setWavesurfer(ws);

    const record = ws.registerPlugin(RecordPlugin.create());
    setRecorder(record);

    return () => {
      record.stopMic();
      ws.destroy();
    };
  }, [containerRef]);

  const startRecording = async () => {
    try {
      if (recordings.length >= 25) {
        toast('Maximum voice samples reached');
        return;
      }
      if (!wavesurfer) return;
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
      let array = [...recordings];
      array.push(blob);
      setIsRecordings(array);
    });
    recorder.stopRecording();
    setIsRecording(false);
  };

  return (
    <Fragment>
      <p className="text-xl">Prompt 1</p>
      <p className="text-lg font-medium" data-aos="zoom-in-up">
        &#8220;Like and subscribe to stay updated whenever I come out with a new
        video.&#8221;
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
          <p className="w-full text-center">Click to record</p>
        </Fragment>
      )}

      <div className={`w-full ${isRecording ? 'block' : 'hidden'}`}>
        <div ref={containerRef} id="mic"></div>
        <button className="mx-auto block" onClick={stopRecording}>
          Stop Recording
        </button>
      </div>
    </Fragment>
  );
};

export default AudioWave;
