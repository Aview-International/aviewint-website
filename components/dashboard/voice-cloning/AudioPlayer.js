import { useRef, useEffect, useState, useCallback } from 'react';
import useWavesurfer from '../../../hooks/useWaveSurfer';
import PlayIcon from '../../../public/img/icons/play.svg';
import PauseIcon from '../../../public/img/icons/pause.svg';
import Image from 'next/image';

const AudioPlayer = ({ audioRecord }) => {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { wavesurfer } = useWavesurfer(containerRef, {
    waveColor: 'rgb(153, 153, 156)',
    progressColor: 'rgb(200, 0, 200)',
    height: 40,
    url: URL.createObjectURL(audioRecord),
    barGap: 2,
    barHeight: 3,
    barMinHeight: 1,
    barRadius: 3,
    barWidth: 4,
  });

  const onPlayClick = useCallback(() => {
    wavesurfer.isPlaying() ? wavesurfer.pause() : wavesurfer.play();
  }, [wavesurfer]);

  // initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on('play', () => setIsPlaying(true)),
      wavesurfer.on('pause', () => setIsPlaying(false)),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);

  return (
    <div className="flex w-full items-center justify-center rounded-full bg-white-transparent p-2">
      <button
        onClick={onPlayClick}
        className="mr-s3 flex items-center justify-center"
      >
        <Image
          src={isPlaying ? PauseIcon : PlayIcon}
          alt=""
          width={40}
          height={40}
        />
      </button>
      <div ref={containerRef} className="w-full" />
    </div>
  );
};

export default AudioPlayer;
