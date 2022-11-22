import { useContext, useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import OnboardingButton from '../../components/Onboarding/button';
import Insights from '../../components/sections/dashboard-home/Insights';
import Videos from '../../components/sections/dashboard-home/Videos';
import SubmitVideos from '../../components/dashboard/SubmitVideos';
import PageTitle from '../../components/SEO/PageTitle';
import { UserContext } from '../../store/user-profile';
import axios from 'axios';
import { toast } from 'react-toastify';

const DashboardHome = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const { user } = useContext(UserContext);
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
        { youtubeChannelId: user.youtubeChannelId }
      );
      setVideos(getVideos.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYoutubeVideos();
  }, []);

  return (
    <>
      <PageTitle title="Dashboard" />
      {isSelected ? (
        <SubmitVideos
          setIsSelected={setIsSelected}
          selectedVideos={selectedVideos}
          setPayload={setPayload}
          payload={payload}
          user={user}
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
    </>
  );
};

const SelectVideos = ({
  setIsSelected,
  isLoading,
  setSelectedVideos,
  selectedVideos,
  videos,
}) => {
  const handleTranslate = () => {
    if (selectedVideos.length < 1) {
      toast.error('Please select a video');
    } else {
      setIsSelected(true);
    }
  };
  return (
    <div>
      <Insights />
      <Videos
        videos={videos}
        isLoading={isLoading}
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
      />
      <br />
      <div className="w-[155px]">
        <OnboardingButton onClick={handleTranslate}>Translate</OnboardingButton>
      </div>
    </div>
  );
};

DashboardHome.getLayout = DashboardLayout;

export default DashboardHome;
