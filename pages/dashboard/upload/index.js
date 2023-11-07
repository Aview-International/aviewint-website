import { useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import TranslateOptions from '../../../components/dashboard/TranslateOptions';
import UploadVideo from '../../../components/dashboard/UploadVideo';
import PageTitle from '../../../components/SEO/PageTitle';
import { uploadCreatorVideo } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Upload = () => {
  const router = useRouter();
  const userId = useSelector((el) => el.user._id);
  const [video, setVideo] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    languages: '',
    otherLanguages: '',
    saveSettings: false,
    additionalNote: '',
  });

  const handleLanguages = (value) => {
    // const newLanguages = [...payload.languages];
    // if (newLanguages.includes(value))
    //   newLanguages.splice(newLanguages.indexOf(value), 1);
    // else newLanguages.push(value);
    setPayload((prevState) => ({ ...prevState, languages: value }));
  };

  const handleSubmit = async () => {
    console.log(payload);
    try {
      setIsLoading(true);
      await uploadCreatorVideo(
        video,
        userId,
        payload.languages,
        payload.additionalNote,
        setUploadProgress
      );
      setIsLoading(false);
      toast.success('Tasks subÏmitted succesfully 🚀');
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <>
      <div className="mx-auto h-full max-w-[1200px] rounded-xl bg-white-transparent ">
        <PageTitle title="Upload Video" />
        <div className="flex flex-col p-s5 text-white lg:flex-row">
          <div className="w-full lg:w-1/2">
            <UploadVideo
              setVideo={setVideo}
              video={video}
              uploadProgress={uploadProgress}
            />
          </div>
          <div className="mt-s5 w-full lg:mt-0 lg:w-1/2">
            <TranslateOptions
              handleLanguages={handleLanguages}
              handleSubmit={handleSubmit}
              payload={payload}
              setPayload={setPayload}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Upload.getLayout = DashboardLayout;

export default Upload;
