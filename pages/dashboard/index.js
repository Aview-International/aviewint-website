import { useContext, useEffect, useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import OnboardingButton from '../../components/Onboarding/button';
import Insights from '../../components/sections/dashboard-home/Insights';
import Videos from '../../components/sections/dashboard-home/Videos';
import SubmitVideos from '../../components/dashboard/SubmitVideos';
import PageTitle from '../../components/SEO/PageTitle';
import { UserContext } from '../../store/user-profile';
import axios from 'axios';

const DashboardHome = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [videos, setVideos] = useState([]);
  const { user } = useContext(UserContext);

  const getYoutubeVideos = async () => {
    try {
      const getVideos = await axios.post(
        '/api/onboarding/link-youtube?get=videos',
        { youtubeChannelId: user.youtubeChannelId }
      );
      setVideos(getVideos.data.items);
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
        />
      ) : (
        <Step1
          videos={videos}
          setIsSelected={setIsSelected}
          selectedVideos={selectedVideos}
          setSelectedVideos={setSelectedVideos}
        />
      )}
    </>
  );
};

const Step1 = ({
  setIsSelected,
  setSelectedVideos,
  selectedVideos,
  videos,
}) => {
  return (
    <div>
      <Insights />
      <Videos
        videos={videos}
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
      />
      <br />
      <div className="w-[155px]">
        <OnboardingButton onClick={() => setIsSelected(true)}>
          Translate
        </OnboardingButton>
      </div>
    </div>
  );
};

DashboardHome.getLayout = DashboardLayout;

export default DashboardHome;
