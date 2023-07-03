import Image from 'next/image';
import DashboardLayout from './DashboardLayout';
import Arrow from '../../public/img/icons/arrow-back.svg';
import { useRouter } from 'next/router';
import TranslateOptions from './TranslateOptions';
import YoutubeVideoFrame from './YoutubeVideoFrame';

const SubmitVideos = ({
  isLoading,
  setIsSelected,
  selectedVideos,
  setPayload,
  payload,
  handleSubmit,
}) => {
  const router = useRouter();
  const handleLanguages = (value) => {
    const newLanguages = [...payload.languages];
    if (newLanguages.includes(value))
      newLanguages.splice(newLanguages.indexOf(value), 1);
    else newLanguages.push(value);
    setPayload({ ...payload, languages: newLanguages });
  };

  const handleServices = (value) => {
    const newServices = [...payload.services];
    if (newServices.includes(value))
      newServices.splice(newServices.indexOf(value), 1);
    else newServices.push(value);
    setPayload({ ...payload, services: newServices });
  };

  return (
    <div className="flex flex-col p-s4 text-white md:flex-row">
      <div className="w-full md:w-1/2">
        <SelectedVideos
          router={router}
          setIsSelected={setIsSelected}
          selectedVideos={selectedVideos}
        />
      </div>
      <div className="w-full md:w-1/2">
        <TranslateOptions
          handleServices={handleServices}
          handleLanguages={handleLanguages}
          handleSubmit={handleSubmit}
          payload={payload}
          setPayload={setPayload}
          isLoading={isLoading}
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
        <span className="ml-s3 mr-s2 brightness-0 invert">
          <Image src={Arrow} alt="" width={8} height={16} />
        </span>
        <span>Videos Selected</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {selectedVideos.map((item, index) => (
          <YoutubeVideoFrame
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
