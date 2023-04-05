import { useContext, useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import SubmitVideos from '../../components/dashboard/SubmitVideos';
import PageTitle from '../../components/SEO/PageTitle';
import { UserContext } from '../../store/user-profile';
import axios from 'axios';
import { toast } from 'react-toastify';
import SelectVideos from '../../components/dashboard/SelectVideos';
import { createANewJob } from '../api/firebase';

const DashboardHome = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const { userInfo } = useContext(UserContext);
  const [payload, setPayload] = useState({
    services: [],
    languages: [],
    otherLanguages: '',
    additionalNote: '',
    allowUsPostVideo: false,
    saveSettingsForFuture: false,
  });

  const getYoutubeVideos = async () => {
    try {
      const getVideos = await axios.post(
        '/api/onboarding/link-youtube?get=videos',
        { youtubeChannelId: userInfo.youtubeChannelId }
      );
      setVideos(getVideos.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userInfo.youtubeChannelId) getYoutubeVideos();
  }, [userInfo.youtubeChannelId]);

  const handleSubmit = async () => {
    setIsLoading(true);
    if (payload.languages.length < 1) {
      toast.error('Please select a language');
      return;
    }
    if (payload.services.length < 1) {
      toast.error('Please select a service');
      return;
    }
    try {
      await createANewJob(userInfo._id, {
        creatorId: userInfo._id,
        videoData: selectedVideos,
        services: payload.services,
        languages: payload.languages,
        otherLanguages: payload.otherLanguages,
        additionalNote: payload.additionalNote,
        allowUsPostVideo: payload.allowUsPostVideo,
        status: 'pending',
        createdAt: new Date().toISOString(),
      });
      setPayload({
        services: [],
        languages: [],
        otherLanguages: '',
        additionalNote: '',
        allowUsPostVideo: false,
        saveSettingsForFuture: false,
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
