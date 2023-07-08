import { useSelector } from 'react-redux';

const Insights = () => {
  const userInfo = useSelector((state) => state.user);
  const summary = [
    {
      value: userInfo.pendingVideos ?? 0,
      description: 'Videos Pending',
    },
    {
      value: userInfo.completedVideos ?? 0,
      description: 'Videos Completed',
    },
    {
      value: 'N/A',
      description: 'Coming Soon',
    },
    {
      value: 'N/A',
      description: 'Coming Soon',
    },
  ];

  return (
    <div className="flex flex-col justify-between text-white md:flex-row">
      <div className="grid w-full grid-cols-2 gap-4 text-center md:w-[calc(100%-360px)] md:gap-6 xl:grid-cols-4">
        {summary.map((data, index) => (
          <Counters key={`summary-${index}`} {...data} />
        ))}
      </div>
      <GoalComponent />
    </div>
  );
};

const GoalComponent = () => {
  return (
    <div className="gradient-dark mt-s2 ml-0 w-full items-center justify-between rounded-2xl p-s2 md:mt-0 md:ml-s3 md:w-[360px]">
      <h4 className="mb-s2 text-2xl">Referrals are Coming Soon</h4>
      <p className="text-lg">
        By sharing your referral code, you can get your next translations at a
        discount! To share the love, check back soon.
      </p>
    </div>
  );
};

const Counters = ({ value, description }) => (
  <div className="flex flex-col-reverse items-start justify-center rounded-2xl bg-white-transparent px-s1 py-s3 text-left md:flex-col md:items-center md:py-s6 md:px-s2 md:text-center">
    <div className="text-xl md:text-8xl">{value}</div>
    <p className="text-sm">{description}</p>
  </div>
);
export default Insights;
