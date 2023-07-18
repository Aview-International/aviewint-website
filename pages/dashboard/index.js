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

const DashboardHome = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);
  const youtubeDataFetched = useSelector(
    (state) => state.instagram.dataFetched
  );
  const instagramDataFetched = useSelector(
    (state) => state.youtube.dataFetched
  );
  const [isSelected, setIsSelected] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [payload, setPayload] = useState({
    languages: [],
    additionalNote: '',
    saveSettings: false,
  });

  const getYoutubeVideos = async () => {
    try {
      const getVideos = await axios.post(
        '/api/onboarding/link-youtube?get=videos',
        { youtubeChannelId: userData.youtubeChannelId }
      );
      const youtubeVideos = getVideos.data.items.map((vid) => ({
        type: 'youtube',
        id: vid.snippet.resourceId.videoId,
        caption: vid.snippet.title,
        timestamp: vid.snippet.publishedAt,
        thumbnail: vid.snippet.thumbnails.default.url,
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
    if (!youtubeDataFetched && userData.youtubeChannelId) getYoutubeVideos();
  }, [userData.youtubeChannelId, userData.instagram_access_token]);

  const handleSubmit = async () => {
    if (payload.languages.length < 1) {
      toast.error('Please select a language');
      return;
    }
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
        status: 'pending',
        createdAt: new Date().toISOString(),
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
      toast('Succesfully submitted tasks');
    } catch (error) {
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
            isLoading={false}
          />
        ) : (
          <SelectVideos
            isLoading={false}
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
