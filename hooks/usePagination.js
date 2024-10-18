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
  
  const { videos, channelDetails, nextPageToken: pageToken, page: currentPage, visitingPage } = useSelector((state) => state.youtube);
  
  const getYoutubeVideos = useCallback(async () => {
    
      const channelId = channelDetails.id
    //   console.log("before sending the request", channelId, pageToken === '' && channelId)
      try{
       const {videos,totalResults,nextPageToken : newPageToken} = await downloadYoutubeVideos(channelId, pageToken)
       dispatch(setIncrementPage())
       dispatch(setYoutubeVideos({ dataFetched: true, videos: videos}));
        if (pageToken !== newPageToken) {
            dispatch(setNextPageToken(newPageToken)); 
            dispatch(setTotalResults(totalResults));
        }
        if(newPageToken==null) {
            dispatch(setNextPageToken(null));
        }
    }
    catch(e){
        console.log(e.message)
    }
  }, [channelDetails.id]);




  const loadPage = useCallback(
    async (page) => {
      if (!videos[page]) {
        // console.count("we are rendering load page")
        await getYoutubeVideos()
      }
      
    },
    [videos, getYoutubeVideos, dispatch]
  );

 

  const preloadNextPage = useCallback(async () => {
    const nextPage = currentPage + 1;
    if (!videos[nextPage]) {
        // console.count("rendering the preloadNextPage");
      await getYoutubeVideos();
    }
  }, [currentPage, videos]);

  

  useEffect(() => {
    preloadNextPage();
    // console.count("we are rendering the useEffect page")
  }, [visitingPage]);



  const goToPage = async (page) => {
    // console.count("we are in got to page")
    await loadPage(page);
    // console.count("we are in about to go next page loading")
    preloadNextPage()
  };

  return {
    
    goToPage,
    // hasNextPage: !!videos[currentPage + 1],
  };
};

export default usePagination;