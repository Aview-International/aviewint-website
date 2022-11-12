import Image from 'next/image';
import CheckMark from '../../public/img/icons/white-check-circle.svg';

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
        <Image
          loader={() => thumbnail}
          src={thumbnail}
          alt={'Youtube'}
          width={250}
          height={150}
        />
        {selected && (
          <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]">
            <Image src={CheckMark} alt={'Youtube'} width={24} height={24} />
          </div>
        )}
      </div>
      <div className="flex">
        <div className="mr-s1 h-10 w-10">
          <Image
            loader={() => 'https://i.ytimg.com/vi/oy5eJnWWAT4/mqdefault.jpg'}
            src={'https://i.ytimg.com/vi/oy5eJnWWAT4/mqdefault.jpg'}
            alt={'Youtube'}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="mb-s1 text-lg">
            {title.substring(0, 17)}
            {title.length > 17 && '...'}
          </p>
          <p className="text-sm">{channelTitle}</p>
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
