import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import MoreSettings from './MoreSettings';
import VideoStatusModal from './VideoStatusModal';
import getWidthPercentage from './GetWidthPercentage';

const ModalOnVideoStatus = ({ video, maxheight, index }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const statusSettings = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div
      className={`relative ${
        maxheight && index === 0 ? 'mb-s5 mt-2.5' : 'mb-s2'
      }`}
    >
      <div
        className={`${maxheight ? 'my-1.5' : 'my-0.5'} flex justify-between`}
      >
        <h4 className="w-[85%] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold">
          {video.videoData?.caption?.replace(/\.mp4$/i, '')}
        </h4>
        <MoreSettings handler={statusSettings} />
      </div>
      <div
        className={`relative ${
          maxheight ? 'my-1.5' : 'my-0.5'
        } h-1.5 w-full rounded-2xl`}
      >
        <span
          className={`gradient-1 absolute z-10 block ${
            maxheight ? 'h-2' : 'h-1'
          } rounded-2xl`}
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
      {isModalOpen && (
        <OutsideClickHandler onOutsideClick={statusSettings}>
          <VideoStatusModal
            video={video}
            handler={statusSettings}
            modalStatus={isModalOpen}
          />
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default ModalOnVideoStatus;
