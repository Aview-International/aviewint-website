import { useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import TranslateOptions from '../../../components/dashboard/TranslateOptions';
import UploadVideo from '../../../components/dashboard/UploadVideo';
import PageTitle from '../../../components/SEO/PageTitle';
import { cancelVideoUpload, uploadCreatorVideo } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { updateRequiredServices } from '../../../services/firebase';

const Upload = () => {
  const router = useRouter();
  const userId = useSelector((el) => el.user._id);
  const [video, setVideo] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  /**
   * changes to the payload below must also be updated
   * at the /dashboard page
   * for consistency with the backend
   */
  const [payload, setPayload] = useState({
    languages: [],
    additionalNote: '',
    saveSettings: false,
    requestHumanReview: false,
  });

  const handleSubmit = async () => {
    const preferences = {
      preferences: payload.languages,
      saveSettings: payload.saveSettings,
    };

    try {
      setIsLoading(true);
      if (!video) return ErrorHandler(null, 'Please upload a video');
      if (payload.languages.length < 1)
        return ErrorHandler(null, 'Please select a language');
      if (payload.saveSettings) updateRequiredServices(preferences, userId);
      await uploadCreatorVideo({ video, setUploadProgress, ...payload });
      toast.success('Tasks submitted succesfully 🚀');
      router.push('/dashboard');
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelVideoUpload = () => {
    try {
      cancelVideoUpload();
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setIsLoading(false);
      setUploadProgress(0);
    }
  };

  return (
    <>
      <PageTitle title="Upload Video" />
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col rounded-xl bg-white-transparent p-s5 text-white lg:flex-row">
          <div className={video ? '' : 'lg:w-full'}>
            <UploadVideo
              setVideo={setVideo}
              video={video}
              uploadProgress={uploadProgress}
            />
          </div>
          <div className={`w-full ${video ? 'lg:ml-s5' : 'lg:mt-0 lg:w-1/2'}`}>
            <TranslateOptions
              handleSubmit={handleSubmit}
              payload={payload}
              setPayload={setPayload}
              isLoading={isLoading}
              uploadProgress={uploadProgress}
              handleCancelVideoUpload={handleCancelVideoUpload}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Upload.getLayout = DashboardLayout;

export default Upload;
