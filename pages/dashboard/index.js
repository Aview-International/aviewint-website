import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import SubmitVideos from '../../components/dashboard/SubmitVideos';
import PageTitle from '../../components/SEO/PageTitle';
import axios from 'axios';
import { toast } from 'react-toastify';
import SelectVideos from '../../components/dashboard/SelectVideos';
import { createANewJob, updateRequiredServices } from '../api/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setYoutubeVideos } from '../../store/reducers/youtube.reducer';
import { setInstagramVideos } from '../../store/reducers/instagram.reducer';
import { getChannelVideos } from '../../services/apis';

const DashboardHome = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const { dataFetched: youtubeDataFetched, channelId } = useSelector(
    (state) => state.youtube
  );
  const instagramDataFetched = useSelector(
    (state) => state.instagram.dataFetched
  );
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
      const getVideos = await getChannelVideos(channelId);
      const youtubeVideos = getVideos.items.map((vid) => ({
        type: 'youtube',
        id: vid.snippet.resourceId.videoId,
        caption: vid.snippet.title,
        timestamp: vid.snippet.publishedAt,
        thumbnail: vid.snippet.thumbnails.maxres
          ? vid.snippet.thumbnails.maxres.url
          : vid.snippet.thumbnails.maxres.default,
        permalink: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
        videoUrl: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
      }));
      dispatch(setYoutubeVideos({ dataFetched: true, videos: youtubeVideos }));
    } catch (error) {
      console.log(error);
    }
  };

  const getInstagramVideos = async () => {
    try {
      const response = await axios.post(
        '/api/onboarding/link-instagram?get=videos',
        { access_token: userData.instagram_access_token }
      );
      const instagramVideos = response.data.data
        .filter((vid) => vid.media_type === 'VIDEO')
        .map((vid) => ({
          type: 'instagram',
          id: vid.id,
          caption: vid.caption,
          timestamp: vid.timestamp,
          thumbnail: vid.thumbnail_url,
          permalink: vid.permalink,
          videoUrl: vid.media_url,
          isReel: !vid.is_shared_to_feed,
        }));
      dispatch(
        setInstagramVideos({ dataFetched: true, videos: instagramVideos })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!instagramDataFetched && userData.instagram_access_token)
      getInstagramVideos();
    if (!youtubeDataFetched && channelId) getYoutubeVideos();
  }, [channelId, userData.instagram_access_token]);

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
      await createANewJob(userData.uid, {
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
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[1200px]">
        <PageTitle title="Dashboard" />
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
