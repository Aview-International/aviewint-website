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
  const getYoutubeVideos = async (youtube_oauth) => {
    try {
      const getVideos = await axios.post(
        '/api/onboarding/link-youtube?get=videos',
        { token: youtube_oauth, youtubeChannelId: user.youtubeChannelId }
      );
      console.log(getVideos.data.items);
      setVideos(getVideos.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const youtube_oauth = localStorage.getItem('youtube_oauth');
    getYoutubeVideos(youtube_oauth);
  }, []);

  const handleVideos = (value) => {
    console.log(value);
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
              thumbnail={item.snippet.thumbnails.default.url}
              channelTitle={item.snippet.channelTitle}
              publishedAt={item.snippet.publishedAt}
              title={item.snippet.title}
              handleVideos={handleVideos}
              key={`video-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
