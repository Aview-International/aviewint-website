import Image from 'next/image';
import DashboardLayout from './DashboardLayout';
import Arrow from '../../public/img/icons/arrow-back.svg';
import { useRouter } from 'next/router';
import TranslateOptions from './TranslateOptions';
import VideoFrame from './VideoFrame';

const SubmitVideos = ({
  isLoading,
  setIsSelected,
  selectedVideos,
  setPayload,
  payload,
  handleSubmit,
  videoStats,
}) => {
  const router = useRouter();

  return (
    <div className="gradient-dark flex flex-col rounded-lg p-s4 text-white md:flex-row">
      <div className="w-full md:w-1/2">
        <SelectedVideos
          router={router}
          setIsSelected={setIsSelected}
          selectedVideos={selectedVideos}
        />
      </div>
      <div className="ml-s4 w-full md:w-1/2">
        <TranslateOptions
          handleSubmit={handleSubmit}
          payload={payload}
          setPayload={setPayload}
          isLoading={isLoading}
          videoStats={videoStats}
        />
      </div>
    </div>
  );
};

const SelectedVideos = ({ setIsSelected, selectedVideos }) => {
  return (
    <div>
      <div
        className="mb-s3 flex cursor-pointer items-start text-2xl"
        onClick={() => setIsSelected(false)}
      >
        <span className="mr-s2 brightness-0 invert">
          <Image src={Arrow} alt="Select-Arrow" width={8} height={16} />
        </span>
        <span>Videos Selected</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {selectedVideos.map((item, index) => (
          <VideoFrame
            key={`video-${index}`}
            handleVideos={() => null}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

SubmitVideos.getLayout = DashboardLayout;

export default SubmitVideos;
