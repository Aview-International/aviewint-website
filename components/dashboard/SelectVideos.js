import { toast } from 'react-toastify';
import OnboardingButton from '../Onboarding/button';
import Insights from './Insights';
import Videos from './Videos';

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
      <div className="w-full md:w-[155px]">
        <OnboardingButton onClick={handleTranslate}>Translate</OnboardingButton>
      </div>
    </div>
  );
};

export default SelectVideos;
