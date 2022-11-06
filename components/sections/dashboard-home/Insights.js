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
    <div className="flex justify-between text-white">
      {summary.map((data, index) => (
        <Counters key={`summary-${index}`} {...data} />
      ))}
      <div className="gradient-dark flex w-[360px] rounded-2xl p-s2">
        <div className="flex flex-col justify-between">
          <h4 className="text-xl">Redemption Code</h4>
          <div>
            <p className="tetx-2xl">10% off</p>
            <small className="text-sm">Your next transaction</small>
          </div>
          <div className="flex items-center text-lg">
            Your Code: Aview123
            <span className="ml-s1">
              <Image
                src={Copy}
                alt="Copy to clipboard"
                width={24}
                height={24}
              />
            </span>
          </div>
        </div>
        <Circle />
      </div>
    </div>
  );
};

const Circle = () => (
  <div className="relative self-end">
    <Border borderRadius="full">
      <div className="h-[120px] w-[120px] rounded-full bg-black">
        <div className="gradient-dark flex h-full w-full items-center justify-center rounded-full text-lg">
          Goal
        </div>
      </div>
    </Border>
  </div>
);
const Counters = ({ value, description }) => (
  <div className="gradient-dark flex flex-col items-center justify-center rounded-2xl px-s2 py-s6">
    <div className="text-8xl">{value}</div>
    <p className="text-sm">{description}</p>
  </div>
);
export default Insights;
