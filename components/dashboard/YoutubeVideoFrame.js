import Image from 'next/image';

const YoutubeVideoFrame = ({
  channelTitle,
  title,
  thumbnail,
  publishedAt,
  handleVideos,
}) => {
  return (
    <div className="justify-self-center" onClick={() => handleVideos()}>
      <Image
        loader={() => thumbnail}
        src={thumbnail}
        alt={'Youtube'}
        width={250}
        height={150}
      />
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
          <p className="mb-s1 text-lg">{title.substring(0, 17)}...</p>
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
