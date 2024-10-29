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

      <div className="relative h-[45vh]">
        {isLoading ? (
          <CircleLoader />
        ) : (
          <div className="relative flex h-full flex-col rounded-xl bg-white-transparent">
            <div className="flex-1 overflow-hidden rounded-xl">
              <div
                className="h-full overflow-y-auto pr-4"
                style={{ paddingRight: '8px' }}
              >
                <div className="m-auto grid grid-cols-2 items-start gap-10 p-4 pb-16 text-white md:grid-cols-3 lg:grid-cols-4">
                  {buttonState === 'all'
                    ? allVideos.map((item, index) => (
                        <VideoFrame
                          handleVideos={handleVideos}
                          selected={selectedVideos.find(
                            (v) => v.id === item.id
                          )}
                          key={`video-${index}`}
                          {...item}
                        />
                      ))
                    : allVideos
                        .filter((vid) => vid.type === buttonState)
                        .map((item, index) => (
                          <VideoFrame
                            handleVideos={handleVideos}
                            selected={selectedVideos.find(
                              (v) => v?.id === item?.id
                            )}
                            key={`video-${index}`}
                            {...item}
                          />
                        ))}
                </div>
              </div>
            </div>

            {allVideos.length > 0 && (
              <div
                className="absolute bottom-0 left-0 right-0 h-14 rounded-xl rounded-t-none before:absolute before:inset-0 before:rounded-xl before:rounded-t-none before:bg-white/10 before:backdrop-blur-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                }}
              >
                <div className="relative z-10 flex h-full items-center justify-between px-6">
                  <div>
                    {selectedVideos && (
                      <p>({selectedVideos.length}) videos selected</p>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updatePageQuery('prev')}
                        className="flex h-8 w-8 items-center justify-center rounded bg-black/20 transition-colors hover:bg-black/30"
                      >
                        &lt;
                      </button>
                      {Array.from({ length: ytPages }).map((_, i) => (
                        <button
                          key={i}
                          className="flex h-8 w-8 items-center justify-center rounded bg-black/20 transition-colors hover:bg-black/30"
                        >
                          {i + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => updatePageQuery('next')}
                        className="flex h-8 w-8 items-center justify-center rounded bg-black/20 transition-colors hover:bg-black/30"
                      >
                        &gt;
                      </button>
                    </div>
                  </div>

                  <div className="w-32">
                    <GlobalButton
                      onClick={handleTranslate}
                      type="secondary"
                      purpose="onClick"
                    >
                      Next
                    </GlobalButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
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
          className={`mr-3 min-w-fit rounded-md bg-white px-2 py-1 text-lg ${
            button.param === buttonState ? 'text-black' : 'bg-opacity-10'
          }`}
          onClick={() => buttonHndler(button.param)}
        >
          <p className="mt-0.5">{button.title}</p>
        </button>
      ))}
    </div>
  );
};

export default Videos;
