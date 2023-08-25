import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useState } from 'react';
import Video_Status from '../../public/img/graphics/video_status.svg';
import closeIcon from '../../public/img/icons/close.svg';
import VideoStatusSection from '../sections/reused/VideoStatusSection';

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

const MoreSettings = ({ handler }) => {
  return (
    <div className='flex flex-row cursor-pointer justify-start bg-gray-1 w-auto h-auto p-1 rounded-full mb-1 mr-2 items-center gap-x-[1px]' onClick={handler}>
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

const ModalOnVideoStatus = ({ handler, modalStatus}) => {
  const languages = ['Spanish', 'Portguese', 'Chinese']
  const postedTo = ['YouTube', 'Facebook']

  return (
    <div className={`${modalStatus ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} h-auto transition-300 absolute md:top-[148px] top-[335px] xs:right-4 md:w-[365px] w-[340px] md:right-8 2xl:right-20 z-10 bg-black rounded-2xl p-3`}>
      <div className="flex h-8 flex-grow-0 items-center justify-between">
          <h2 className='font-semibold text-lg'>Details</h2>
          <div className="h-4 w-4 mr-3 cursor-pointer" onClick={handler}>
             <Image src={closeIcon} width={20} height={20} alt="close icon" />
          </div>
      </div>
      <div className='w-full h-full flex flex-col gap-y-4 items-start justify-between'>
        <VideoStatusSection title="video title">
         <h5>Logan Paul and KSI Surprise Fans With Prime Energy</h5>
        </VideoStatusSection>
        <VideoStatusSection title="upload progress">
         <h5>15 mins left</h5>
        </VideoStatusSection>
        <VideoStatusSection title="languages">
         <div className="flex flex-wrap mt-1">
          {languages.map((language, index) => (
            <span
             className={`mr-s1 mb-s1 cursor-pointer rounded-full py-s1 px-s2 text-lg bg-white-transparent`}
             key={`language-${index}`}
            >
             {language}
            </span>
          ))}
         </div>
        </VideoStatusSection>
        <VideoStatusSection title="posted to" hasHorizontal={false}>
          <div className='flex w-full h-full gap-1'>
           {postedTo.map((language,index)=>{
            return (
              <div key={index}>
                <div className={`text-sm py-s1 px-3 rounded-2xl text-center ${ language === 'YouTube' && 'bg-youtube' } ${ language === 'Facebook' && 'bg-facebook' } ${ language === 'Instagram' && 'bg-red' } `}>
                 {language}
                </div>
              </div>
             )
           })}
          </div>
        </VideoStatusSection>
      </div>
    </div>
  );
};

const GoalComponent = () => {
  const [isModalOpen,setModalOpen] = useState(false);
  
  const statusSettings = () => {
    setModalOpen(!isModalOpen);
  }

  return (
   <div>
     <div className="gradient-dark relative mt-s2 w-full rounded-2xl p-s1.5 md:mt-0 md:ml-s3 md:max-w-[380px] h-[170px]">
       <div className='w-full h-full flex flex-col items-start gap-y-2 overflow-y-auto'>
        <div className='w-[95%]'>
          <div className='w-full flex flex-row justify-between'>
            <h4 className='text-lg font-semibold'>Logan Paul and KSI Surprise Fa...</h4>
            <MoreSettings handler={statusSettings}/>
          </div>
          <div className='rounded-2xl p-1 my-[6px] gradient-1'>
          </div>
          <div className='flex flex-row justify-between items-center w-full'>
            <p>35%</p>
            <p>15 mins left</p>
          </div>
        </div>
       </div> 
     </div>
     <ModalOnVideoStatus handler={statusSettings} modalStatus={isModalOpen}/>
   </div>
  )
};

const Counters = ({ value, description }) => (
  <div className="flex flex-col-reverse items-start justify-center rounded-2xl bg-white-transparent px-s1 py-s3 text-left md:flex-col md:items-center md:py-s6 md:px-s2 md:text-center">
    <div className="text-xl md:text-8xl">{value}</div>
    <p className="text-sm">{description}</p>
  </div>
);
export default Insights;
