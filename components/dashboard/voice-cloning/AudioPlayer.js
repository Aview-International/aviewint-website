import React, { Fragment, useRef, useEffect } from 'react';
import Button from '../../UI/Button';

const AudioPlayer = ({
  audioBlob,
  recordings,
  setRecordings,
  setPrompt,
  setAudioRecord,
}) => {
  const audioRef = useRef(null);

  const approveHandler = () => {
    let array = [...recordings];
    array.push(audioBlob);
    setRecordings(array);
    setPrompt((prompt) => prompt + 1);
    setAudioRecord(null);
  };

  const retryHandler = () => {
    setAudioRecord(null);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = URL.createObjectURL(audioBlob);
    }

    return () => {
      URL.revokeObjectURL(audioRef.current?.src);
    };
  }, [audioBlob]);

  return (
    <Fragment>
      <div className="flex h-full w-full flex-col items-center justify-center gap-y-8">
        <audio ref={audioRef} className="w-80 md:w-96" controls />
        <div className="flex w-full flex-row items-center justify-between md:w-5/6 md:justify-around">
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
    </Fragment>
  );
};

export default AudioPlayer;
