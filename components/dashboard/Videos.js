import { useCallback, useState } from 'react';
import CircleLoader from '../../public/loaders/CircleLoader';
import VideoFrame from './VideoFrame';
import GlobalButton from '../UI/GlobalButton';
import usePagination from '../../hooks/usePagination';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { setVisitingPage } from '../../store/reducers/youtube.reducer';
import goToPage from '../../hooks/usePagination';

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

const selectAllYoutubeVideos = (videos) => {
  return Object.values(videos).flat();
};

const Videos = ({ setSelectedVideos, selectedVideos, isLoading }) => {
  const instagramVideos = useSelector((state) => state.instagram.videos);

  const {
    videos,
    page: storePage,
    totalResults,
    nextPageToken,
    visitingPage,
  } = useSelector((state) => state.youtube);
  const youtubeVideos = selectAllYoutubeVideos(videos);
  const tiktokVideos = useSelector((state) => state.tiktok.videos);
  const [currentPage, setCurrentPage] = useState(1);

  const allVideos = [...tiktokVideos, ...instagramVideos, ...youtubeVideos];
  const [buttonState, setButtonState] = useState('youtube');

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

  const handleTranslate = () => {
    if (selectedVideos.length < 1) {
      toast.error('Please select a video');
    } else {
      setIsSelected(true);
    }
  };

  const getPageData = (storedData, pageNumber) => {
    if (storedData.hasOwnProperty(pageNumber)) {
      return selectAllYoutubeVideos(storedData[pageNumber]);
    } else {
      console.warn(`Page ${pageNumber} not found in stored data.`);
      return [];
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
      <div className="relative">
        <div className="max-h-[60vh] overflow-y-auto">
          {isLoading ? (
            <CircleLoader />
          ) : (
            <div className="m-auto grid h-full w-full grid-cols-2 items-start gap-4 rounded-lg rounded-b-none bg-white-transparent px-4 py-2 text-white md:grid-cols-3">
              {buttonState === 'all' ? (
                <RenderVideo
                  handleVideos={handleVideos}
                  selectedVideos={selectedVideos}
                  videoData={allVideos}
                />
              ) : buttonState === 'youtube' ? (
                <RenderVideo
                  handleVideos={handleVideos}
                  selectedVideos={selectedVideos}
                  videoData={getPageData(videos, currentPage)}
                />
              ) : (
                allVideos
                  .filter((vid) => vid.type === buttonState)
                  .map((item, index) => (
                    <VideoFrame
                      handleVideos={handleVideos}
                      selected={selectedVideos.find((v) => v?.id === item?.id)}
                      key={`video-${index}`}
                      {...item}
                    />
                  ))
              )}
            </div>
          )}
        </div>
        {Object.keys(videos).length > 0 && (
          <div className=" bottom-0 flex h-[12%] w-full items-center justify-between rounded-lg rounded-t-none bg-white-transparent  px-s2 py-2 backdrop-blur-lg">
            {selectedVideos && (
              <p> ({selectedVideos.length}) videos selected</p>
            )}

            <Pagination
              totalResults={totalResults}
              page={currentPage}
              pageHandler={setCurrentPage}
              videos={videos}
            />
            <div className="ml-auto w-full md:w-[155px]">
              <GlobalButton onClick={handleTranslate}>Next</GlobalButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Pagination = ({ totalResults, page, pageHandler, videos }) => {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalResults / 6);

  const getVisiblePages = (current, total) => {
    if (total <= 3) {
      return [...Array(total).keys()].map((i) => i + 1);
    }

    if (current === 1) {
      return [1, 2, '...'];
    }

    if (current === total) {
      return ['...', total - 1, total];
    }

    return [current - 1, current, current + 1];
  };

  const visiblePages = getVisiblePages(page, totalPages);

  const handleNextPage = (page) => {
    pageHandler(page);
    if (!videos[page + 1]) {
      console.count('calling the preload next page function');
      dispatch(setVisitingPage(page + 1));
    }
  };

  return (
    <div className="flex w-full justify-center text-white">
      <div className="grid grid-cols-5 gap-3">
        <button
          onClick={() => pageHandler(page - 1)}
          disabled={page === 1}
          className="bg-blue-500 flex items-center rounded-lg bg-white-transparent  p-2 disabled:opacity-50"
        >
          <span className="mr-1">&lt;</span>
        </button>
        {visiblePages.map((currentPage, index) => (
          <button
            key={index}
            onClick={() => currentPage !== '...' && handleNextPage(currentPage)}
            disabled={currentPage === page}
            className="bg-blue-500 flex items-center rounded-lg bg-white/40  p-2 text-black disabled:opacity-50"
          >
            {currentPage}
          </button>
        ))}

        <button
          onClick={() => pageHandler(page + 1)}
          // disabled={!hasNextPage}
          className="bg-blue-500 flex items-center rounded-lg bg-white-transparent p-2 disabled:opacity-50"
        >
          <span className="ml-1">&gt;</span>
        </button>
      </div>
    </div>
  );
};

const RenderVideo = ({ handleVideos, selectedVideos, videoData }) => {
  return (
    <>
      {videoData.map((item, index) => (
        <VideoFrame
          handleVideos={handleVideos}
          selected={selectedVideos.find((v) => v?.id === item?.id)}
          key={`video-${index}`}
          {...item}
        />
      ))}
    </>
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
