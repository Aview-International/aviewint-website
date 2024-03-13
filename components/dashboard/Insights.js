import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Video_Status from '../../public/img/graphics/team-building.png';
import closeIcon from '../../public/img/icons/close.svg';
import VideoStatusSection from '../sections/reused/VideoStatusSection';

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

const Counters = ({ value, description }) => (
  <div className="flex flex-col-reverse items-start justify-center rounded-2xl bg-white-transparent px-s1 py-s3 text-left md:flex-col md:items-center md:py-s6 md:px-s2 md:text-center">
    <div className="text-xl md:text-8xl">{value}</div>
    <p className="font-medium">{description}</p>
  </div>
);

const GoalComponent = ({ videos }) => {
  const twentyFourHours = 24 * 60 * 60 * 1000;

  return (
    <div className="gradient-dark h-[170px] w-full rounded-2xl">
      <div className="p-s1.5">
        {videos
          .filter((item) => Date.now() - item.timestamp > twentyFourHours)
          .slice(0, 2)
          .map((video, index) => {
            return <ModalOnVideoStatus key={index} video={video} />;
          })}
      </div>
    </div>
  );
};

const ModalOnVideoStatus = ({ video }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const statusSettings = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between my-1">
        <h4 className="w-[85%] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold">
          {video.videoData.caption.replace(/\.mp4$/i, '')}
        </h4>
        <MoreSettings handler={statusSettings} />
      </div>
      <div className="relative my-2 h-1.5 w-full rounded-2xl">
        <span
          className={`gradient-1 absolute z-10 block h-1.5 rounded-2xl`}
          style={{ width: `${getWidthPercentage(video.status)}%` }}
        ></span>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <p>{getWidthPercentage(video.status)} %</p>
        <p>
          <span className="font-medium">status{` :`}</span>
          <span className="ml-1 rounded-md bg-white-transparent p-1">
            {video.status}
          </span>
        </p>
      </div>
      <VideoStatusModal
        video={video}
        handler={statusSettings}
        modalStatus={isModalOpen}
      />
    </div>
  );
};

const VideoStatusModal = ({ handler, modalStatus, video }) => {
  if (!modalStatus) {
    return null;
  }

  return (
    <div
      className={`${
        modalStatus ? 'block' : 'hidden'
      } transition-300 absolute top-0 -right-1 z-20 h-auto w-[365px] rounded-2xl bg-black p-3 duration-300 ease-out`}
    >
      <div className="flex h-8 flex-grow-0 items-center justify-between">
        <p className="text-lg font-semibold">Details</p>
        <div className="mr-3 h-4 w-4 cursor-pointer" onClick={handler}>
          <Image src={closeIcon} width={20} height={20} alt="close icon" />
        </div>
      </div>
      <div>
        <VideoStatusSection title="video title">
          <p className="font-medium">
            {video.videoData.caption.replace(/\.mp4$/i, '')}
          </p>
        </VideoStatusSection>
        <VideoStatusSection title="Video progress">
          <p className="font-medium">
            {getWidthPercentage(video.status)}
            {` %`}
          </p>
        </VideoStatusSection>
        <VideoStatusSection title="Video Status">
          <p className="font-medium">{video.status}</p>
        </VideoStatusSection>
        <VideoStatusSection title="language">
          <p
            className={`mr-s1 mt-1 mb-s1 rounded-md bg-white-transparent py-s1 px-s2 text-lg font-medium`}
          >
            {video.translatedLanguage}
          </p>
        </VideoStatusSection>
      </div>
    </div>
  );
};

const getWidthPercentage = (currentStage) => {
  let percentage = 0;

  const options = [
    'Queued',
    'transcription',
    'translation',
    'dubbing',
    'audio-separation',
    'editing',
    'complete',
  ];

  const getStageNumber = (status) => {
    return options.findIndex(
      (option) => option.toLowerCase() === status.toLowerCase()
    );
  };

  const index = getStageNumber(currentStage);
  if (index > 0) {
    percentage = Math.floor(((index + 1) / 7) * 100);
  }

  return percentage;
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

const EmptyStatus = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-white-transparent p-s0">
      <div className="flex items-center justify-center">
        <Image src={Video_Status} height={100} width={100} alt="Video Status" />
      </div>
      <p className="mt-6 text-center">
        You have no videos currently uploading.
      </p>
    </div>
  );
};

export default Insights;
