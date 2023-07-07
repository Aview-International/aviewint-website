import Image from 'next/image';
import CheckMark from '../../public/img/icons/white-check-circle.svg';
import Youtube from '../../public/img/icons/youtube-red.svg';

const YoutubeVideoFrame = ({
  channelTitle,
  title,
  thumbnail,
  publishedAt,
  videoId,
  handleVideos,
  selected,
}) => {
  return (
    <div
      className="cursor-pointer justify-self-center"
      onClick={() =>
        handleVideos({ videoId, channelTitle, title, thumbnail, publishedAt })
      }
    >
      <div className="relative">
        <div className="mb-s1 flex text-lg">
          <Image src={Youtube} alt="" with={24} height={24} />
          <p className="pl-s1">YouTube Video</p>
        </div>
        <Image
          loader={() => thumbnail}
          src={thumbnail}
          alt={'Youtube'}
          width={250}
          height={150}
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
            {title.substring(0, 17)}
            {title.length > 17 && '...'}
          </p>
          <p className="text-sm">
            <span>
              {new Date(publishedAt).toLocaleString('en-US', {
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

export default YoutubeVideoFrame;
