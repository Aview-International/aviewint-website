import { toast } from 'react-toastify';
import GlobalButton from '../Onboarding/button';
import Insights from './insights/Insights';
import Videos from './Videos';

const SelectVideos = ({
  setIsSelected,
  isLoading,
  setSelectedVideos,
  selectedVideos,
}) => {
  return (
    <>
      <Insights />
      <Videos
        isLoading={isLoading}
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
      />
      <br />
     
    </>
  );
};

export default SelectVideos;
