import { useState } from 'react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import OnboardingButton from '../../components/Onboarding/button';
import Insights from '../../components/sections/dashboard-home/Insights';
import Videos from '../../components/sections/dashboard-home/Videos';
import TranslateOptions from '../../components/dashboard/TranslateOptions';

const DashboardHome = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedVideos, setSelectedVideos] = useState([]);

  return (
    <>
      {isSelected ? (
        <TranslateOptions setIsSelected={setIsSelected} />
      ) : (
        <Step1
          setIsSelected={setIsSelected}
          selectedVideos={selectedVideos}
          setSelectedVideos={setSelectedVideos}
        />
      )}
    </>
  );
};

const Step1 = ({ setIsSelected, setSelectedVideos, selectedVideos }) => {
  return (
    <div>
      <Insights />
      <Videos
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
