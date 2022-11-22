import CircleLoader from '../../../public/loaders/CircleLoader';
import YoutubeVideoFrame from '../../dashboard/YoutubeVideoFrame';

const Videos = ({ setSelectedVideos, selectedVideos, videos, isLoading }) => {
  const BUTTONS = [
    {
      title: 'All Videos',
    },
    {
      title: 'Recommended',
    },
    {
      title: 'Most Viewed',
    },
    {
      title: 'Youtube',
    },
    {
      title: 'TikTok',
    },
    {
      title: 'Instagram',
    },
    {
      title: 'Facebook',
    },
  ];

  const handleVideos = (value) => {
    const newArray = [...selectedVideos];
    const findVideo = newArray.find((v) => v.videoId === value.videoId);
    if (!findVideo) {
      newArray.push(value);
      setSelectedVideos(newArray);
    } else {
      const existingVideoIndex = newArray.findIndex(
        (v) => findVideo.videoId === v.videoId
      );
      newArray.splice(existingVideoIndex, 1);
      setSelectedVideos(newArray);
    }
  };

  return (
    <div className="gradient-dark mt-s3 rounded-2xl p-s2">
      <div className="mb-s2 flex justify-between text-white">
        {BUTTONS.map((button, index) => (
          <button
            key={`button-${index}`}
            className="gradient-dark rounded-full py-s1 px-s2 text-xl"
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="max-h-[45vh] overflow-y-auto">
        {isLoading ? (
          <CircleLoader />
        ) : (
          <div className="m-auto grid grid-cols-2 items-center gap-10 text-white md:grid-cols-3 lg:grid-cols-4">
            {videos.map((item, index) => (
              <YoutubeVideoFrame
                thumbnail={item.snippet.thumbnails.medium.url}
                channelTitle={item.snippet.channelTitle}
                publishedAt={item.snippet.publishedAt}
                title={item.snippet.title}
                videoId={item.snippet.resourceId.videoId}
                handleVideos={handleVideos}
                selected={selectedVideos.find(
                  (v) => v.videoId === item.snippet.resourceId.videoId
                )}
                key={`video-${index}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
