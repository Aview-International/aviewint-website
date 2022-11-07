import Image from 'next/image';
import DashboardLayout from './DashboardLayout';
import VideoFrame from './YoutubeVideoFrame';
import Arrow from '../../public/img/icons/arrow-back.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TranslateOptions from './TranslateOptions';

const SubmitVideos = ({ setIsSelected }) => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    services: [],
    languages: [],
    otherLanguages: '',
    allowUsPostVideo: false,
    saveSettingsForFuture: false,
  });

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

  const handleSubmit = () => {
    console.log(payload);
  };
  return (
    <div className="flex p-s4 text-white">
      <div className="w-1/2">
        {/* <SelectedVideos router={router} setIsSelected={setIsSelected} /> */}
      </div>
      <div className="w-1/2">
        <TranslateOptions
          handleServices={handleServices}
          handleLanguages={handleLanguages}
          handleSubmit={handleSubmit}
          payload={payload}
        />
      </div>
    </div>
  );
};

const SelectedVideos = ({ setIsSelected }) => {
  const array = ['', '', '', ''];
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
        {array.map((item, index) => (
          <VideoFrame key={`video-${index}`} />
        ))}
      </div>
    </div>
  );
};

SubmitVideos.getLayout = DashboardLayout;

export default SubmitVideos;
