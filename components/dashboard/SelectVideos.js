import { toast } from 'react-toastify';
import GlobalButton from '../Onboarding/button';
import Insights from './insights/Insights';
import Videos from './Videos';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { setYoutubeVideos } from '../../store/reducers/youtube.reducer';

const SelectVideos = ({
  setIsSelected,
  isLoading,
  setSelectedVideos,
  selectedVideos,
  setIsLoading,
}) => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const instagramVideos = useSelector((state) => state.instagram.videos);
  const tiktokVideos = useSelector((state) => state.tiktok.videos);
  const {
    channelDetails,
    totalYoutubeVideos,
    videos: youtubeVideos,
    youtubeNextPageToken,
  } = useSelector((state) => state.youtube);

  const getAllPaginatedYoutubeVideos = async (nextPageToken) => {
    try {
      setIsLoading(true);
      const ytVideos = await getChannelVideos(channelDetails.id, nextPageToken);
      const vids = ytVideos.items.map((vid) => ({
        type: 'youtube',
        id: vid.snippet.resourceId.videoId,
        caption: vid.snippet.title,
        timestamp: vid.snippet.publishedAt,
        thumbnail: vid.snippet.thumbnails.maxres
          ? vid.snippet.thumbnails.maxres.url
          : vid.snippet.thumbnails.default.url,
        permalink: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
        videoUrl: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
      }));
      dispatch(
        setYoutubeVideos({
          dataFetched: true,
          videos: [...vids],
          youtubeNextPageToken: ytVideos.pageInfo.totalResults,
        })
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useMemo(() => {
    // getAllPaginatedYoutubeVideos();
    console.log(typeof +router.query.page === 'number');
    setPage(typeof +router.query.page === 'number' ? +router.query.page : 0);
  }, [router.query]);

  console.log(page);
  // const allVideos = [
  //   ...tiktokVideos,
  //   ...instagramVideos,
  //   ...youtubeVideos[page - 1], // if page is 1, pick items at index 0
  // ];
  const shortYtVids = youtubeVideos[0];
  const handleTranslate = () => {
    if (selectedVideos.length < 1) {
      toast.error('Please select a video');
    } else {
      setIsSelected(true);
    }
  };

  const updatePageQuery = (type) => {
    let videosFectched = 5;
    const totalPages = Math.ceil(totalYoutubeVideos / videosFectched);
    if (type === 'next' && page.page >= totalPages) return;
    if (type === 'prev' && page.page <= 1) return;
    page = type === 'next' ? page.page + 1 : page.page - 1;

    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, page },
      },
      undefined,
      { shallow: true } // This is the key option to prevent data refetch
    );
  };

  return (
    <>
      <Insights />
      <Videos
        isLoading={isLoading}
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
        allVideos={[...tiktokVideos, ...instagramVideos, ...shortYtVids]}
      />
      <br />
      <div className="flex gap-5 text-red">
        <button onClick={() => updatePageQuery('next')}>Next</button>
        <button onClick={() => updatePageQuery('prev')}>Prev</button>
      </div>
      <div className="ml-auto w-full md:w-[155px]">
        <GlobalButton onClick={handleTranslate}>Next</GlobalButton>
      </div>
    </>
  );
};

export default SelectVideos;
