import Image from 'next/image';
import CheckMark from '../../public/img/icons/white-check-circle.svg';
import Youtube from '../../public/img/icons/youtube-red.svg';
import Instagram from '../../public/img/icons/instagram-2.svg';
import { Fragment } from 'react';

const VideoFrame = ({
  caption,
  thumbnail,
  timestamp,
  id,
  handleVideos,
  type,
  selected,
  isReel,
}) => {
  return (
    <div
      className="cursor-pointer justify-self-center"
      onClick={() => handleVideos({ id, caption, thumbnail, timestamp })}
    >
      <div className="relative">
        <div className="mb-s1 flex text-lg">
          {type === 'youtube' && (
            <Fragment>
              <Image src={Youtube} alt="" with={24} height={24} />
              <p className="pl-s1">YouTube Video</p>
            </Fragment>
          )}
          {type === 'instagram' && (
            <Fragment>
              <Image src={Instagram} alt="" with={24} height={24} />
              <p className="pl-s1">Instagram {isReel ? 'Reel' : 'Video'}</p>
            </Fragment>
          )}
        </div>
        <Image
          loader={() => thumbnail}
          src={thumbnail}
          alt={type}
          width={250}
          height={150}
          unoptimized
        />
        {selected && (
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]">
            <Image src={CheckMark} alt="" width={24} height={24} />
          </div>
        )}
      </div>
      <div className="flex">
        <div>
          <p className="mb-s1 text-lg">
            {caption.substring(0, 17)}
            {caption.length > 17 && '...'}
          </p>
          <p className="text-sm">
            <span>
              {new Date(timestamp).toLocaleString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;
