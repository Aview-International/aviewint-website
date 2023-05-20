import { useState, useMemo } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import TranslateOptions from '../../../components/dashboard/TranslateOptions';
import UploadVideo from '../../../components/dashboard/UploadVideo';
import PageTitle from '../../../components/SEO/PageTitle';

const Upload = () => {
  const [video, setVideo] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [payload, setPayload] = useState({
    services: [],
    languages: [],
    otherLanguages: '',
    allowUsPostVideo: false,
    saveSettingsForFuture: false,
  });

  const handleServices = (value) => {
    const newServices = [...payload.services];
    if (newServices.includes(value))
      newServices.splice(newServices.indexOf(value), 1);
    else newServices.push(value);
    setPayload({ ...payload, services: newServices });
  };

  const handleLanguages = (value) => {
    const newLanguages = [...payload.languages];
    if (newLanguages.includes(value))
      newLanguages.splice(newLanguages.indexOf(value), 1);
    else newLanguages.push(value);
    setPayload({ ...payload, languages: newLanguages });
  };

  return (
    <>
      <div className="mx-auto h-full max-w-[1200px] rounded-xl bg-white-transparent ">
        <PageTitle title="Upload Video" />
        <div className="flex flex-col p-s4 text-white lg:flex-row">
          <div className="w-full lg:w-1/2">
            <UploadVideo
              setVideo={setVideo}
              video={video}
              setUploadProgress={setUploadProgress}
              uploadProgress={uploadProgress}
            />
          </div>
          <div className="mt-s5 w-full lg:mt-0 lg:w-1/2">
            <TranslateOptions
              handleServices={handleServices}
              handleLanguages={handleLanguages}
              // handleSubmit={handleSubmit}
              payload={payload}
              setPayload={setPayload}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Upload.getLayout = DashboardLayout;

export default Upload;
