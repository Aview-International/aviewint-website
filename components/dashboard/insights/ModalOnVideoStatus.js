import Image from 'next/image';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import closeIcon from '../../../public/img/icons/close.svg';

const getWidthPercentage = (stage) => {
  const stages = [
    'queued',
    'audio-separation',
    'transcription',
    'translation',
    'dubbing',
    'editing',
    'under review',
    'complete',
  ];
  const index = stages.findIndex((s) => s === stage.toLowerCase());
  return index > 0 ? Math.floor(((index + 1) / stages.length) * 100) : 0;
};

const VideoStatusModal = ({ handler, video }) => {
  return (
    <div
      className={`transition-300 absolute top-0 -right-1 z-20 h-auto w-[365px] rounded-2xl bg-black p-3 duration-300 ease-out`}
    >
      <div className="flex h-8 flex-grow-0 items-center justify-between">
        <p className="text-lg font-semibold">Details</p>
        <button className="mr-3 h-4 w-4 cursor-pointer" onClick={handler}>
          <Image src={closeIcon} width={20} height={20} alt="close icon" />
        </button>
      </div>
      <div className="font-medium">
        <h2 className="mt-s2 mb-s0 text-sm text-white/70">VIDEO TITLE</h2>
        <p>{video.videoData.caption.replace(/\.mp4$/i, '')}</p>
        <h2 className="mt-s2 mb-s0 text-sm text-white/70">VIDEO PROGRESS</h2>
        <p>{`${getWidthPercentage(video.status)} %`}</p>
        <h2 className="mt-s2 mb-s0 text-sm text-white/70">VIDEO STATUS</h2>
        <p>{video.status}</p>
        <h2 className="mt-s2 mb-s0 text-sm text-white/70">LANGUAGE</h2>
        <p
          className={`inline-block rounded-md bg-white-transparent py-s1 px-s2`}
        >
          {video.translatedLanguage}
        </p>
      </div>
    </div>
  );
};

const ModalOnVideoStatus = ({ video }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="relative mb-s2">
      <div className="my-0.5 flex justify-between">
        <h4 className="w-[85%] overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold">
          {video.videoData?.caption?.replace(/\.mp4$/i, '')}
        </h4>
        {/* three menu dot button */}
        <button
          className="mb-1 mr-2 flex flex-row items-center gap-x-[1px] rounded-full bg-gray-1 p-1"
          onClick={() => setModal(true)}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-s0 w-s0 rounded-full bg-white"></div>
          ))}
        </button>
      </div>
      <div className="relative my-0.5 h-1.5 w-full rounded-2xl">
        <span
          className={`gradient-1 absolute z-10 block h-1 rounded-2xl`}
          style={{ width: `${getWidthPercentage(video.status)}%` }}
        ></span>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <p>{getWidthPercentage(video.status)} %</p>
        <p>
          <span className="font-medium">status{` :`}</span>
          <span className="ml-1 rounded-md bg-white-transparent p-0.5">
            {video.status}
          </span>
        </p>
      </div>
      {modal && (
        <OutsideClickHandler onOutsideClick={() => setModal(false)}>
          <VideoStatusModal video={video} handler={() => setModal(false)} />
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default ModalOnVideoStatus;
