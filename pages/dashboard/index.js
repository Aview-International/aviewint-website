import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import SubmitVideos from '../../components/dashboard/SubmitVideos';
import PageTitle from '../../components/SEO/PageTitle';
import { toast } from 'react-toastify';
import SelectVideos from '../../components/dashboard/SelectVideos';
import { useDispatch, useSelector } from 'react-redux';
import { setYoutubeVideos } from '../../store/reducers/youtube.reducer';
import { setInstagramVideos } from '../../store/reducers/instagram.reducer';
import {
  getChannelVideos,
  getIgVideos,
  getJobsHistory,
  getTikTokVideos,
  transcribeSocialLink,
} from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import {
  setCompletedJobs,
  setPendingJobs,
} from '../../store/reducers/history.reducer';
import Cookies from 'js-cookie';
import {
  updateRequiredServices,
  subscribeToHistory,
} from '../../services/firebase';
import { setTikTokVideos } from '../../store/reducers/tiktok.reducer';

import downloadYoutubeVideos from '../../utils/getYoutube';

const DashboardHome = () => {
  const dispatch = useDispatch();
 
  const isLoggedIn = useSelector((el) => el.user.isLoggedIn);
  const uid = Cookies.get('uid');
  const userData = useSelector((state) => state.user);
  const { channelDetails } = useSelector((state) => state.youtube);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [payload, setPayload] = useState({
    languages: [],
    additionalNote: '',
    saveSettings: false,
  });

  const getYoutubeVideos = async () => {
    try {
      const getVideos = await getChannelVideos(channelDetails.id);
      const youtubeVideos = getVideos.items.map((vid) => ({
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
          videos: youtubeVideos,
          totalYoutubeVideos: getVideos.pageInfo.totalResults,
          youtubeNextPageToken: getVideos.nextPageToken,
        })
      );
    } catch (error) {
      // ErrorHandler(error);
    }
  };

  const getInstagramVideos = async () => {
    try {
      const response = await getIgVideos();
      dispatch(setInstagramVideos({ dataFetched: true, videos: response }));
    } catch (error) {
      // ErrorHandler(error);
    }
  };

  const getTikTokVids = async () => {
    try {
      const data = await getTikTokVideos();
      const tiktokVideos = data.videos.map((vid) => ({
        type: 'tiktok',
        id: vid.id,
        caption: vid.title,
        thumbnail: vid.cover_image_url,
        timestamp: vid.create_time * 1000,
        permalink: vid.share_url,
        videoUrl: vid.embed_link,
      }));
      dispatch(setTikTokVideos({ dataFetched: true, videos: tiktokVideos }));
    } catch (error) {
      // ErrorHandler(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (userData.tiktok?.tiktokConnected) await getTikTokVids();
        if (channelDetails.id) await getYoutubeVideos();
        if (userData.instagram?.instagramConnected) await getInstagramVideos();
      } catch (error) {
        ErrorHandler(error);
      }
    })();
  }, [channelDetails.id, userData]);

  useEffect(() => {
    (async () => {
      if (isLoggedIn) {
        try {
          const completedArray = await getJobsHistory();
          dispatch(setCompletedJobs(completedArray));
        } catch (error) {
          ErrorHandler(error);
        }
      }
    })();
  }, [isLoggedIn]);

  useEffect(() => {
    const unsubscribe = subscribeToHistory(uid, (data) => {
      const pendingArray = data
        ? Object.values(data).sort(
            (a, b) => parseInt(b.timestamp) - parseInt(a.timestamp)
          )
        : [];
      dispatch(setPendingJobs(pendingArray));
    });

    return () => unsubscribe(); // cleanup
  }, []);

  const handleSubmit = async () => {
    if (payload.languages.length < 1) {
      toast.error('Please select a language');
      return;
    }
    setIsLoading(true);
    const preferences = {
      preferences: payload.languages,
      saveSettings: payload.saveSettings,
    };
    try {
      if (payload.saveSettings)
        updateRequiredServices(preferences, userData.uid);
      await transcribeSocialLink({
        creatorId: userData.uid,
        videoData: selectedVideos,
        languages: payload.languages,
        additionalNote: payload.additionalNote,
      });
      setPayload({
        languages: [],
        additionalNote: '',
        saveSettings: false,
      });
      setSelectedVideos([]);
      setIsSelected(false);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setIsLoading(false);
      toast('Succesfully submitted tasks');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <>
      <PageTitle title="Dashboard" />
      <div className="mx-auto max-w-[1200px]">
        {isSelected ? (
          <SubmitVideos
            setIsSelected={setIsSelected}
            selectedVideos={selectedVideos}
            setPayload={setPayload}
            payload={payload}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
          />
        ) : (
          <SelectVideos
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setIsSelected={setIsSelected}
            selectedVideos={selectedVideos}
            setSelectedVideos={setSelectedVideos}
          />
        )}
      </div>
    </>
  );
};

DashboardHome.getLayout = DashboardLayout;

export default DashboardHome;
