import { useState } from 'react';
import CircleLoader from '../../public/loaders/CircleLoader';
import VideoFrame from './VideoFrame';
import Link from 'next/link';
import GlobalButton from '../UI/GlobalButton';

const STATUS_BUTTONS = [
  { title: 'All', param: 'all' },
  { title: 'Pending', param: 'pending' },
  { title: 'Completed', param: 'completed' },
  { title: 'Recommended', param: 'recommended' },
];

const SOCIAL_BUTTONS = [
  { title: 'YouTube', param: 'youtube' },
  { title: 'TikTok', param: 'tiktok' },
  { title: 'Instagram', param: 'instagram' },
  { title: 'Facebook', param: 'facebook' },
];

const Videos = ({
  setSelectedVideos,
  selectedVideos,
  isLoading,
  allVideos,
  updatePageQuery,
  handleTranslate,
  ytPages,
}) => {
  console.log(ytPages);
  const [buttonState, setButtonState] = useState('all');

  const handleVideos = (value) => {
    const newArray = [...selectedVideos];
    const findVideo = newArray.find((v) => v.id === value.id);
    if (!findVideo) {
      newArray.push(value);
      setSelectedVideos(newArray);
    } else {
      const existingVideoIndex = newArray.findIndex(
        (v) => findVideo.id === v.id
      );
      newArray.splice(existingVideoIndex, 1);
      setSelectedVideos(newArray);
    }
  };

  return (
    <div className="rounded-2xl py-s2 text-white">
      <div className="mb-s3 flex w-full justify-between overflow-x-auto">
        <FilterHeader
          filterData={STATUS_BUTTONS}
          buttonState={buttonState}
          buttonHndler={setButtonState}
        />
        <div className="flex items-center">
          <FilterHeader
            filterData={SOCIAL_BUTTONS}
            buttonState={buttonState}
            buttonHndler={setButtonState}
          />
          <Link href="/dashboard/settings/distribution-accounts">
            <a className="ml-2 min-w-fit rounded-md bg-white bg-opacity-10 px-2 pt-1 text-lg">
              +
            </a>
          </Link>
        </div>
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
                    {...item}
                  />
                ))
              : allVideos
                  .filter((vid) => vid.type === buttonState)
                  .map((item, index) => (
                    <VideoFrame
                      handleVideos={handleVideos}
                      selected={selectedVideos.find((v) => v?.id === item?.id)}
                      key={`video-${index}`}
                      {...item}
                    />
                  ))}
          </div>
        )}
      </div>
      <div className=" bottom-0 flex h-[12%] w-full items-center justify-between rounded-lg rounded-t-none bg-white-transparent  px-s2 py-2 backdrop-blur-lg">
        {selectedVideos && <p>({selectedVideos.length}) videos selected</p>}

        <div className="flex w-full justify-center text-white">
          <div className="grid grid-cols-5 gap-3">
            <button
              onClick={() => updatePageQuery('prev')}
              className="bg-blue-500 flex items-center rounded-lg bg-white-transparent  p-2 disabled:opacity-50"
            >
              <span className="mr-1">&lt;</span>
            </button>
            {Array.from({ length: ytPages }).map((_, i) => (
              <p key={i}>{i + 1}</p>
            ))}
            <button
              onClick={() => updatePageQuery('next')}
              className="bg-blue-500 flex items-center rounded-lg bg-white-transparent p-2 disabled:opacity-50"
            >
              <span className="ml-1">&gt;</span>
            </button>
          </div>
        </div>
        <div className="ml-auto w-full md:w-[155px]">
          <GlobalButton onClick={handleTranslate}>Next</GlobalButton>
        </div>
      </div>
    </div>
  );
};

const FilterHeader = ({ filterData, buttonState, buttonHndler }) => {
  return (
    <div>
      {filterData.map((button, index) => (
        <button
          key={`button-${index}`}
          className={`mr-2 min-w-fit rounded-md bg-white p-2 text-lg ${
            button.param === buttonState ? 'text-black' : 'bg-opacity-10'
          }`}
          onClick={() => buttonHndler(button.param)}
        >
          {button.title}
        </button>
      ))}
    </div>
  );
};

export default Videos;
