import { useEffect, useState } from 'react';
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
    setPayload((prevState) => ({ ...prevState, languages: value }));
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await uploadCreatorVideo(
        video,
        userId,
        payload.languages,
        payload.additionalNote,
        setUploadProgress
      );
      toast.success('Tasks submitted succesfully 🚀');
      setIsLoading(false);
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-[1200px]">
        <PageTitle title="Upload Video" />
        <div className="flex flex-col rounded-xl bg-white-transparent p-s5 text-white lg:flex-row">
          <div className="w-full lg:w-1/2">
            <UploadVideo
              setVideo={setVideo}
              video={video}
              uploadProgress={uploadProgress}
            />
          </div>
          <div className="w-full lg:mt-0 lg:w-1/2">
            <TranslateOptions
              handleLanguages={handleLanguages}
              handleSubmit={handleSubmit}
              payload={payload}
              setPayload={setPayload}
              isLoading={isLoading}
              uploadProgress={uploadProgress}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Upload.getLayout = DashboardLayout;

export default Upload;
