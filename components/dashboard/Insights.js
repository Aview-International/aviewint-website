import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useState } from 'react';
import Video_Status from '../../public/img/graphics/team-building.png';
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
    // {
    //   value: 'N/A',
    //   description: 'Coming Soon',
    // },
    // {
    //   value: 'N/A',
    //   description: 'Coming Soon',
    // },
  ];

  return (
    <div className="grid w-full grid-cols-[1fr,1fr,2fr] items-center gap-6">
      {summary.map((data, index) => (
        <Counters key={`summary-${index}`} {...data} />
      ))}
      <GoalComponent />
    </div>
  );
};

const Counters = ({ value, description }) => (
  <div className="flex flex-col-reverse items-start justify-center rounded-2xl bg-white-transparent px-s1 py-s3 text-left md:flex-col md:items-center md:py-s6 md:px-s2 md:text-center">
    <div className="text-xl md:text-8xl">{value}</div>
    <p className="text-sm">{description}</p>
  </div>
);

const GoalComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1); //step indicates the which stage it is in the processing the video completion like transcription is 1, translation 2 and goes on by increasing the stage to 5

  const statusSettings = () => {
    setModalOpen(!isModalOpen);
  };

  const handleStage = (stage) => {
    setStep(stage);
  };

  const calculateWidth = (stage) => {
    return stage * 20; // Each stage represents 20% of total width
  };

  return (
    <div className="gradient-dark relative h-[170px] w-full rounded-2xl">
      <div className="mb-2 p-s2">
        <div className="flex justify-between">
          <h4 className="w-[85%] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold">
            Logan Paul and KSI Surprise Facxcsdfsfsffdsfasfa...
          </h4>
          <MoreSettings handler={statusSettings} />
        </div>
        <div className="relative my-[6px] h-1.5 w-full rounded-2xl">
          <span
            className={`gradient-1 absolute z-10 block h-1.5 rounded-2xl`}
            style={{ width: `${calculateWidth(step)}%` }}
          ></span>
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <p>{step * 20} %</p>
          <p>status: transcription</p>
        </div>
      </div>

      <ModalOnVideoStatus handler={statusSettings} modalStatus={isModalOpen} />
    </div>
  );
};

const MoreSettings = ({ handler }) => {
  return (
    <div
      className="mb-1 mr-2 flex cursor-pointer flex-row items-center justify-start gap-x-[1px] rounded-full bg-gray-1 p-1"
      onClick={handler}
    >
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
    </div>
  );
};

const ModalOnVideoStatus = ({ handler, modalStatus }) => {
  const languages = ['Spanish', 'Portguese', 'Chinese'];
  const postedTo = ['YouTube', 'Facebook'];

  return (
    <div
      className={`${
        modalStatus ? 'block' : 'hidden'
      } transition-300 absolute top-0 -left-1 z-20 h-auto w-[365px] rounded-2xl bg-black p-3 duration-300 ease-out`}
    >
      <div className="flex h-8 flex-grow-0 items-center justify-between">
        <h2 className="text-lg font-semibold">Details</h2>
        <div className="mr-3 h-4 w-4 cursor-pointer" onClick={handler}>
          <Image src={closeIcon} width={20} height={20} alt="close icon" />
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-start justify-between gap-y-4">
        <VideoStatusSection title="video title">
          <h5>Logan Paul and KSI Surprise Fans With Prime Energy</h5>
        </VideoStatusSection>
        <VideoStatusSection title="Video progress">
          <h5>20%</h5>
        </VideoStatusSection>
        <VideoStatusSection title="languages">
          <div className="mt-1 flex flex-wrap">
            {languages.map((language, index) => (
              <span
                className={`mr-s1 mb-s1 cursor-pointer rounded-full bg-white-transparent py-s1 px-s2 text-lg`}
                key={`language-${index}`}
              >
                {language}
              </span>
            ))}
          </div>
        </VideoStatusSection>
        <VideoStatusSection title="posted to" hasHorizontal={false}>
          <div className="flex h-full w-full gap-1">
            {postedTo.map((language, idx) => (
              <div
                key={idx}
                className={`rounded-2xl py-s1 px-3 text-center text-sm ${
                  language === 'YouTube' && 'bg-youtube'
                } ${language === 'Facebook' && 'bg-facebook'} ${
                  language === 'Instagram' && 'bg-red'
                } `}
              >
                {language}
              </div>
            ))}
          </div>
        </VideoStatusSection>
      </div>
    </div>
  );
};

const EmptyStatus = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-s1 py-s2">
      <Image src={Video_Status} height={140} width={110} alt="Video Status" />
      <p className="text-lg">You have no videos currently uploading.</p>
    </div>
  );
};

export default Insights;
