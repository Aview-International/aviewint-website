import Image from 'next/image';
import VideoStatusSection from '../../sections/reused/VideoStatusSection';
import closeIcon from '../../../public/img/icons/close.svg';
import getWidthPercentage from './GetWidthPercentage';

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

export default VideoStatusModal;
