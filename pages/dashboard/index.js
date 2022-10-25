import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const getYoutubeVideos = async (youtube_oauth) => {
    try {
      const getVideos = await axios.post(
        '/api/onboarding/link-youtube?get=videos',
        { token: youtube_oauth }
      );
      setVideos(getVideos.data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const youtube_oauth = localStorage.getItem('youtube_oauth');
    getYoutubeVideos(youtube_oauth);
  }, []);
  return (
    <>
      <h2 className="mt-s10 text-center text-7xl text-white">
        Welcome to the dashboard
      </h2>
      <p>Youtuber videos available from your channel</p>
      <div className="m-auto grid w-3/4 grid-cols-1 items-center justify-center gap-10 text-white md:grid-cols-2">
        {videos.map((video, index) => (
          <div key={`video-${index}`}>
            <p className="mb-s1.5 text-center text-xl">{video.snippet.title}</p>
            <iframe
              width="100%"
              height="320"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
