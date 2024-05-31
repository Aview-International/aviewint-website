import Image from 'next/image';
import CheckMark from '../../public/img/icons/white-check-circle.svg';
import YouTube from '../../public/img/icons/youtube-red.svg';
import Instagram from '../../public/img/icons/instagram-2.svg';
import TikTok from '../../public/img/icons/tiktok.svg';

const icons = {
  youtube: { title: 'Youtube Video', img: YouTube },
  instagram: { title: 'Instagram Reel', img: Instagram },
  tiktok: { title: 'TikTok Video', img: TikTok },
};
const VideoFrame = ({
  caption,
  thumbnail,
  timestamp,
  id,
  handleVideos,
  type,
  selected,
  videoUrl,
  permalink,
}) => {
  return (
    <div
      className="cursor-pointer justify-self-center"
      onClick={() =>
        handleVideos({
          id,
          caption,
          videoUrl,
          thumbnail,
          timestamp,
          type,
          permalink,
        })
      }
    >
      <div className="mb-s1 flex text-lg">
        <Image src={icons[type].img} alt="Youtube" with={24} height={24} />
        <p className="pl-s1">{icons[type].title}</p>
      </div>
      <div className="relative">
        <div className="relative h-[150px] w-full">
          <Image
            loader={() => thumbnail}
            src={thumbnail}
            alt={type}
            layout="fill"
            objectFit="contain"
            unoptimized
          />
        </div>
        {selected && (
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]">
            <Image src={CheckMark} alt="Checkmark" width={24} height={24} />
          </div>
        )}
      </div>
      <div className="flex">
        <div>
          <p className="mb-s1 text-lg">
            {caption?.substring(0, 51)}
            {caption?.length > 51 && '...'}
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
