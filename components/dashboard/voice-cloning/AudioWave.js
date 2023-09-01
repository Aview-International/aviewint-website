import { Fragment, useEffect, useRef, useState } from 'react';
import record from '../../../public/img/icons/record.svg';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record';
import Image from 'next/image';
import { toast } from 'react-toastify';

const AudioWave = ({ destroyMic, recordings, setIsRecordings }) => {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [recorder, setRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [prompt, setPrompt] = useState(0);
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

  useEffect(() => {
    if (destroyMic) {
      recorder.stopMic();
      wavesurfer.destroy();
    }
  }, [destroyMic]);

  const VOICEPROMPTS = [
    "Cats are like little balls of mystery and charm. Their playful antics and independent personalities bring joy to countless households. Whether they're chasing a laser pointer or curling up for a cozy nap, cats remind us to appreciate the simple pleasures in life",
    "Content creation is the modern art of storytelling. Just like a painter expresses emotions through colors, content creators use words, images, and videos to connect with audiences. Whether it's a blog post, a YouTube video, or a social media update, the goal is to captivate, inform, or entertain.",
    "Our world is a dynamic tapestry of cultures, landscapes, and ideas. It's a place where we can explore, learn, and grow. From the bustling streets of Tokyo to the serene beaches of Fiji, every corner of the world has something unique to offer. It's up to us to embrace diversity and work together to make it a better place for everyone",
    'Imagine creating content centered around the mysterious allure of cats. You could craft engaging blog posts about decoding feline behavior or make hilarious videos capturing their quirky moments. Cats have a universal appeal that can make your content stand out and resonate with a wide audience.',
    'Content creation has the power to shape how we see the world. You could create captivating documentaries that shed light on lesser-known parts of the globe, bringing awareness to important issues. By sharing stories from different cultures and perspectives, you contribute to a more informed and connected world.',
  ];

  const startRecording = async () => {
    try {
      if (recordings.length >= 5) {
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
    setPrompt(prompt + 1);
    recorder.stopRecording();
    setIsRecording(false);
  };

  return (
    <Fragment>
      <p className="text-xl">Prompt {prompt + 1}</p>
      <p className="text-lg font-medium" data-aos="zoom-in-up">
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
