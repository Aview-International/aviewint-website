import { useSelector } from 'react-redux';
import Image from 'next/image';
import Video_Status from '../../public/img/graphics/video_status.svg';

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

const MoreSettings = () => {
  return (
    <div className='flex flex-row cursor-pointer justify-start bg-gray-1 px-s1 py-s1 rounded-full mb-1 mr-2 items-center gap-x-[1px]'>
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
    </div>
  )
};

const EmptyStatus = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center px-s1 py-s2'>
     <Image
      src={Video_Status}
      height={140}
      width={110}
      alt='Video Status'
     />
     <p className='text-lg'>You have no videos currently uploading.</p>
    </div>
  );
};

const ModalOnVideoStatus = () => {
  return (
    <div className=''>

    </div>
  );
};

const GoalComponent = () => {
  return (
    <div className="gradient-dark mt-s2 w-full rounded-2xl p-s1.5 md:mt-0 md:ml-s3 md:max-w-[380px] h-[170px]">
       <div className='w-full h-full flex flex-col items-start gap-y-2 overflow-y-scroll'>
        <div className='w-[95%]'>
          <div className='w-full flex flex-row justify-between'>
            <h4 className='text-lg font-semibold'>Logan Paul and KSI Surprise Fa...</h4>
            <MoreSettings />
          </div>
          <div className='rounded-2xl p-1 my-[6px] bg-white'>
          </div>
          <div className='flex flex-row justify-between items-center w-full'>
            <p>35%</p>
            <p>15 mins left</p>
          </div>
        </div>
       </div> 
       {/* render emtystatus component when there is no video uploaded */}
      {/* <EmptyStatus /> */}
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
