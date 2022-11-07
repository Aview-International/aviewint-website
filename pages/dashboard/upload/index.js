import { useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import TranslateOptions from '../../../components/dashboard/TranslateOptions';
import UploadVideo from '../../../components/dashboard/UploadVideo';
import PageTitle from '../../../components/SEO/PageTitle';

const Upload = () => {
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
      <PageTitle title="Upload Video" />
      <div className="flex p-s4 text-white">
        <div className="w-1/2">
          <UploadVideo />
        </div>
        <div className="w-1/2">
          <TranslateOptions
            handleServices={handleServices}
            handleLanguages={handleLanguages}
            // handleSubmit={handleSubmit}
            payload={payload}
            setPayload={setPayload}
          />
        </div>
      </div>
    </>
  );
};

Upload.getLayout = DashboardLayout;

export default Upload;
