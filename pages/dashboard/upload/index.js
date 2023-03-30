import { useState, useMemo } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import TranslateOptions from '../../../components/dashboard/TranslateOptions';
import UploadVideo from '../../../components/dashboard/UploadVideo';
import PageTitle from '../../../components/SEO/PageTitle';

const Upload = () => {
  const uploadOptions = {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
    sources: ['local', 'instagram', 'facebook'],
    instagramClientId: process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID,
    clientAllowedFormats: ['video'],
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    theme: 'minimal',
  };

  const uploadCallback = (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('Done! Here is the image info: ', result.info);
      document
        .getElementById('uploadedimage')
        .setAttribute('src', result.info.secure_url);
    }
  };
  
  const myWidget = useMemo(() => {
    return window?.cloudinary?.createUploadWidget(
      uploadOptions,
      uploadCallback
    );
  }, [window.cloudinary]);
  const [video, setVideo] = useState(undefined);
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
              setData={(e) => setVideo(e.target.files[0])}
              data={video}
              myWidget={myWidget}
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
