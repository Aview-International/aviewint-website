import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../store/user-profile';
import YoutubeVideoFrame from '../../dashboard/YoutubeVideoFrame';

const Videos = ({ setSelectedVideos, selectedVideos }) => {
  const { user } = useContext(UserContext);
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
  const [videos, setVideos] = useState([]);
  const getYoutubeVideos = async () => {
    try {
      const getVideos = await axios.post(
        '/api/onboarding/link-youtube?get=videos',
        { youtubeChannelId: user.youtubeChannelId }
      );
      setVideos(getVideos.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getYoutubeVideos();
  }, []);

  const handleVideos = (value) => {
    const videos = [...selectedVideos];
    const findVideo = videos.find((v) => v.videoId === value.videoId);
    if (!findVideo) {
      videos.push(value);
      setSelectedVideos(videos);
    } else {
      const existingVideoIndex = videos.findIndex(
        (v) => findVideo.videoId === v.videoId
      );
      videos.splice(existingVideoIndex, 1);
      setSelectedVideos(videos);
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
      </div>
    </div>
  );
};

export default Videos;
