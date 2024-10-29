import { toast } from 'react-toastify';
import Insights from './insights/Insights';
import Videos from './Videos';
import { useDispatch, useSelector } from 'react-redux';
import { setYoutubeVideos } from '../../store/reducers/youtube.reducer';
import ErrorHandler from '../../utils/errorHandler';
import { getChannelVideos } from '../../services/apis';
import { useMemo, useState } from 'react';

const SelectVideos = ({
  setIsSelected,
  isLoading,
  setSelectedVideos,
  selectedVideos,
  setIsLoading,
}) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const instagramVideos = useSelector((state) => state.instagram.videos);
  const tiktokVideos = useSelector((state) => state.tiktok.videos);
  const {
    channelDetails,
    totalYoutubeVideos,
    videos: youtubeVideos,
    youtubeNextPageToken,
  } = useSelector((state) => state.youtube);

  let videosFectched = 5;
  const totalPages = Math.ceil(totalYoutubeVideos / videosFectched);

  const getAllPaginatedYoutubeVideos = async () => {
    try {
      setIsLoading(true);
      const ytVideos = await getChannelVideos(
        channelDetails.id,
        youtubeNextPageToken
      );
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
          videos: [...youtubeVideos, ...vids],
          totalYoutubeVideos: ytVideos.pageInfo.totalResults,
          youtubeNextPageToken: ytVideos.nextPageToken,
        })
      );
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTranslate = () => {
    console.log("error")
    if (selectedVideos.length < 1) {
      toast.error('Please select a video');
    } else {
      setIsSelected(true);
    }
  };

  const updatePageQuery = (type) => {
    if (type === 'next' && page >= totalPages) return;
    if (type === 'prev' && page <= 1) return;
    setPage(page + 1);
    getAllPaginatedYoutubeVideos();
  };

  const ytVids = useMemo(() => {
    const vidsPerPage = 5;
    const startIdx = (page - 1) * vidsPerPage;
    const endIdx = startIdx + vidsPerPage;
    return youtubeVideos.slice(startIdx, endIdx);
  }, [page, youtubeVideos]);

  return (
    <>
      <Insights />
      <Videos
        isLoading={isLoading}
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
        allVideos={[...tiktokVideos, ...instagramVideos, ...ytVids]}
        updatePageQuery={updatePageQuery}
        handleTranslate={handleTranslate}
        ytPages={totalPages}
      />
    </>
  );
};

export default SelectVideos;
