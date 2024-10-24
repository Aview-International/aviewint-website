import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setYoutubeVideos,
  setNextPageToken,
  setTotalResults,
  setIncrementPage,
} from '../store/reducers/youtube.reducer';
import { getChannelVideos } from '../services/apis';
import downloadYoutubeVideos from '../utils/getYoutube';

const usePagination = () => {
  const dispatch = useDispatch();

  const {
    videos,
    channelDetails,
    isFirstRequest: pageToken,
    page: currentPage,
    visitingPage,
    totalResults,
  } = useSelector((state) => state.youtube);
  console.log(videos, totalResults, pageToken, currentPage);

  const getYoutubeVideos = useCallback(async () => {
    const channelId = channelDetails.id;
    console.log('before sending the request', channelId, pageToken);
    try {
      //  const {videos,totalResults,nextPageToken : newPageToken} = await downloadYoutubeVideos(channelId, pageToken)
      const { videos, totalResults } = await downloadYoutubeVideos(
        channelId,
        pageToken
      );
      dispatch(setIncrementPage());
      dispatch(setYoutubeVideos({ dataFetched: true, videos: videos }));
      dispatch(setNextPageToken(false));
      dispatch(setTotalResults(totalResults));
      // if (pageToken !== newPageToken) {
      // }
      // if(newPageToken==null) {
      //     dispatch(setNextPageToken(null));
      // }
    } catch (e) {
      console.log(e.message);
    }
  }, [channelDetails, pageToken, dispatch]);

  const loadPage = useCallback(
    async (page) => {
      if (!videos[page]) {
        await getYoutubeVideos();
        console.count('we are rendering load page');
      }
    },
    [videos, getYoutubeVideos, pageToken]
  );

  const preloadNextPage = useCallback(async () => {
    const nextPage = currentPage + 1;
    if (!videos[nextPage]) {
      await getYoutubeVideos();
      console.count('rendering the preloadNextPage');
    }
  }, [currentPage, videos, getYoutubeVideos, pageToken]);

  useEffect(() => {
    if (visitingPage > 1) {
      preloadNextPage();
      console.count('we are rendering the useEffect page');
    }
  }, [visitingPage, preloadNextPage]);

  const goToPage = useCallback(
    async (page) => {
      console.count('we are in go to page');
      await loadPage(page);
      console.count('we are about to go next page loading');
      await preloadNextPage();
    },
    [loadPage, preloadNextPage]
  );

  return {
    goToPage,
    // hasNextPage: !!videos[currentPage + 1],
  };
};

export default usePagination;
