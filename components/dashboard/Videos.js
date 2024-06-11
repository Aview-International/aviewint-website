import { useState } from 'react';
import CircleLoader from '../../public/loaders/CircleLoader';
import VideoFrame from './VideoFrame';
import { useSelector } from 'react-redux';
import { useTranslatedLanguage } from '../../pages/dashboard/history'; // Adjust path if necessary

const Videos = ({ setSelectedVideos, selectedVideos, isLoading }) => {
  const instagramVideos = useSelector((state) => state.instagram.videos);
  const youtubeVideos = useSelector((state) => state.youtube.videos);
  const tiktokVideos = useSelector((state) => state.tiktok.videos);
  const { translatedLanguage } = useTranslatedLanguage();

  const allVideos = [...tiktokVideos, ...instagramVideos, ...youtubeVideos];
  const [buttonState, setButtonState] = useState('all');
  const BUTTONS = [
    { title: 'All Videos', param: 'all' },
    { title: 'YouTube', param: 'youtube' },
    { title: 'Instagram', param: 'instagram' },
    { title: 'TikTok', param: 'tiktok' },
  ];

  const handleVideos = (value) => {
    const newArray = [...selectedVideos];
    const findVideo = newArray.find((v) => v.id === value.id);
    if (!findVideo) {
      newArray.push(value);
      setSelectedVideos(newArray);
    } else {
      const existingVideoIndex = newArray.findIndex((v) => findVideo.id === v.id);
      newArray.splice(existingVideoIndex, 1);
      setSelectedVideos(newArray);
    }
  };

  return (
    <div className="gradient-dark mt-s3 rounded-2xl p-s2">
      <div className="mb-s2 flex w-full gap-4 overflow-x-auto text-white">
        {BUTTONS.map((button, index) => (
          <button
            key={`button-${index}`}
            className={`min-w-fit rounded-full bg-white py-s1 px-s2 text-xl ${
              button.param === buttonState ? 'text-black' : 'bg-opacity-10 text-white'
            }`}
            onClick={() => setButtonState(button.param)}
          >
            {button.title}
          </button>
        ))}
      </div>
      <div className="max-h-[45vh] overflow-y-auto">
        {isLoading ? (
          <CircleLoader />
        ) : (
          <div className="m-auto grid grid-cols-2 items-start gap-10 text-white md:grid-cols-3 lg:grid-cols-4">
            {buttonState === 'all'
              ? allVideos.map((item, index) => (
                  <VideoFrame
                    handleVideos={handleVideos}
                    selected={selectedVideos.find((v) => v.id === item.id)}
                    key={`video-${index}`}
                    translatedLanguage={translatedLanguage}
                    {...item}
                  />
                ))
              : allVideos
                  .filter((vid) => vid.type === buttonState)
                  .map((item, index) => (
                    <VideoFrame
                      handleVideos={handleVideos}
                      selected={selectedVideos.find((v) => v.id === item.id)}
                      key={`video-${index}`}
                      translatedLanguage={translatedLanguage}
                      {...item}
                    />
                  ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
