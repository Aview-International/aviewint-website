import { useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RecordPlugin from 'wavesurfer.js/dist/plugins/record';

const useWavesurfer = (containerRef, options) => {
  const [wavesurfer, setWavesurfer] = useState(null);
  const [recorder, setRecorder] = useState(null);

  useEffect(() => {
    if (!containerRef?.current) return;

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWavesurfer(ws);

    const record = ws.registerPlugin(RecordPlugin.create());
    setRecorder(record);

    return () => {
      record.stopMic();
      ws.destroy();
    };
  }, [containerRef]);

  return { wavesurfer, recorder };
};

export default useWavesurfer;
