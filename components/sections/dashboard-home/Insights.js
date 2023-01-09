import Image from 'next/image';
import Copy from '../../../public/img/icons/copy-to-clipboard.svg';
import Border from '../../UI/Border';

const Insights = () => {
  const summary = [
    {
      value: '#',
      description: 'Videos Pending',
    },
    {
      value: '#',
      description: 'Videos Completed',
    },
    {
      value: '#',
      description: 'Recommended Videos',
    },
    {
      value: '#',
      description: 'International Growth',
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
    <div className="gradient-dark mt-s5 ml-0 flex w-full items-center justify-between rounded-2xl p-s2 md:mt-0 md:ml-s3 md:w-[360px]">
      <div className="flex flex-col justify-between">
        <h4 className="text-xl">Redemption Code</h4>
        <div>
          <p className="tetx-2xl">10% off</p>
          <small className="text-sm">Your next transaction</small>
        </div>
        <div className="flex items-center text-lg">
          Your Code: Aview123
          <span className="ml-s1">
            <Image src={Copy} alt="Copy to clipboard" width={24} height={24} />
          </span>
        </div>
      </div>
      <div>
        <Border borderRadius="full">
          <div className="h-[120px] w-[120px] rounded-full bg-black">
            <div className="gradient-dark flex h-full w-full items-center justify-center rounded-full text-lg">
              Goal
            </div>
          </div>
        </Border>
      </div>
    </div>
  );
};

const Counters = ({ value, description }) => (
  <div className="gradient-dark flex flex-col-reverse items-start justify-center rounded-2xl px-s1 py-s3 text-left md:flex-col md:items-center md:py-s6 md:px-s2 md:text-center">
    <div className="text-xl md:text-8xl">{value}</div>
    <p className="text-sm">{description}</p>
  </div>
);
export default Insights;
