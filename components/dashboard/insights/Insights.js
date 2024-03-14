import Counters from './Counters';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import GoalComponent from './GoalComponent';
import EmptyStatus from './EmptyStatus';

const Insights = ({ pendingVideos }) => {
  const userInfo = useSelector((state) => state.user);
  const summary = [
    {
      value: userInfo.pendingVideos.length ?? 0,
      description: 'Videos Pending',
    },
    {
      value: userInfo.completedVideos.length ?? 0,
      description: 'Videos Completed',
    },
    // {
    //   value: 'N/A',
    //   description: 'Coming Soon',
    // },
    // {
    //   value: 'N/A',
    //   description: 'Coming Soon',
    // },
  ];

  useEffect(() => {}, [userInfo.pendingVideos, userInfo.completedVideos]);

  return (
    <div className="grid w-full grid-cols-[1fr,1fr,2fr] items-center gap-6">
      {summary.map((data, index) => (
        <Counters key={`summary-${index}`} {...data} />
      ))}
      {pendingVideos.length > 0 ? (
        <GoalComponent videos={pendingVideos} />
      ) : (
        <EmptyStatus />
      )}
    </div>
  );
};

export default Insights;
