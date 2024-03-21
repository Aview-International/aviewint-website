import { toast } from 'react-toastify';
import OnboardingButton from '../Onboarding/button';
import Insights from './insights/Insights';
import Videos from './Videos';
import Cookies from 'js-cookie';
import RecommendVideos from './RecommendVideos';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/user.reducer';
import { getAllPendingJobs } from '../../pages/api/firebase';

const SelectVideos = ({
  setIsSelected,
  isLoading,
  setSelectedVideos,
  selectedVideos,
}) => {
  const dispatch = useDispatch();
  const uid = Cookies.get('uid');
  const [pendingJobs, setPendingJobs] = useState([]);

  const handleTranslate = () => {
    if (selectedVideos.length < 1) {
      toast.error('Please select a video');
    } else {
      setIsSelected(true);
    }
  };

  const getPendingJobs = async () => {
    const res = await getAllPendingJobs(uid);

    const backlogVideos = res
      ? Object.entries(res).map(([key, value]) => ({ ...value, jobId: key }))
      : [];

    setPendingJobs(backlogVideos);
    dispatch(
      setUser({
        pendingVideos: backlogVideos.filter(
          (item) => item.status != 'complete'
        ),
      })
    );
    dispatch(
      setUser({
        completedVideos: backlogVideos.filter(
          (item) => item.status === 'complete'
        ),
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      if (uid) {
        await Promise.all([getPendingJobs()]);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 5000); // Fetch data every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Insights pendingVideos={pendingJobs} />
      <Videos
        isLoading={isLoading}
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
      />
      <br />
      <div className="ml-auto w-full md:w-[155px]">
        <OnboardingButton onClick={handleTranslate}>Next</OnboardingButton>
      </div>
      {/* <RecommendVideos /> */}
    </>
  );
};

export default SelectVideos;
