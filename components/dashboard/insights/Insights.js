import { useSelector } from 'react-redux';
import Counters from './Counters';
import GoalComponent from './GoalComponent';
import EmptyStatus from './EmptyStatus';

const Insights = () => {
  const { completedJobs, pendingJobs } = useSelector((state) => state.history);
  const summary = [
    {
      value: pendingJobs.length ?? 0,
      description: 'Videos Pending',
    },
    {
      value: completedJobs.length ?? 0,
      description: 'Videos Completed',
    },
  ];

  return (
    <div className="grid w-full items-center gap-6 md:grid-cols-[1fr,1fr,2fr]">
      {summary.map((data, idx) => (
        <Counters key={`summary-${idx}`} {...data} />
      ))}
      {pendingJobs.length > 0 ? (
        <GoalComponent videos={[...pendingJobs, ...completedJobs]} />
      ) : (
        <EmptyStatus />
      )}
    </div>
  );
};

export default Insights;
