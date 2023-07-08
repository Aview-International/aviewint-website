import { useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import SubmitVideos from '../../components/dashboard/SubmitVideos';
import PageTitle from '../../components/SEO/PageTitle';
import axios from 'axios';
import { toast } from 'react-toastify';
import SelectVideos from '../../components/dashboard/SelectVideos';
import { createANewJob, updateRequiredServices } from '../api/firebase';
import { useSelector } from 'react-redux';

const DashboardHome = () => {
  const userData = useSelector((state) => state.user);
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videos, setVideos] = useState([]);
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
      setVideos(getVideos.data.items);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (userData.youtubeChannelId) getYoutubeVideos();
  }, [userData.youtubeChannelId]);

  const handleSubmit = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
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
            isLoading={isLoading}
          />
        ) : (
          <SelectVideos
            videos={videos}
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
