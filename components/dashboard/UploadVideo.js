import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Link from 'next/link';
import FormData from 'form-data';
import uploadVideo from '../../services/upload';
import { useContext, useState } from 'react';
import { UserContext } from '../../store/user-profile';

const UploadVideo = ({
  setVideo,
  video,
  setUploadProgress,
  uploadProgress,
}) => {
  const { userInfo } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const handleUpload = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append('video', video);
      formData.append('uid', userInfo._id);
      const res = await uploadVideo(formData, setUploadProgress);
      setIsLoading(false);
      window.location.href = res.data.downloadUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-11/12">
      <DottedBorder classes="relative block md:inline-block w-full">
        <div className="flex flex-col items-center py-s3">
          <div className="flex h-[160px] w-[160px] place-content-center rounded-full bg-gray-1">
            <Image src={UploadIcon} alt="Upload" width={80} height={80} />
          </div>
          <p className="mt-s3 text-xl font-normal">
            Drapg and drop videos to upload
          </p>
          <div className="mt-s3 w-[190px]">
            <OnboardingButton
              onClick={handleClick}
              theme="dark"
              disabled={!myWidget ? true : false}
            >
              Select Files
            </OnboardingButton>
          </div>
        </div>
        {/* )} */}
      </DottedBorder>
      <p className="cursor-not-allowed py-s2 text-center text-lg underline opacity-30">
        Download Transcription
      </p>
      {isLoading && (
        <>
          <p>Please wait</p>
          <div className="mt-4 h-3 w-full rounded-full">
            <div
              className="gradient-2 h-full rounded-full"
              style={{ width: uploadProgress + '%' }}
            ></div>
          </div>
        </>
      )}
      <p className="py-s2 text-lg">
        After submission, you will receive your translated content in 1-3
        business days.
      </p>
      <small className="text-sm">
        If you selected Distribution, you acknowledge that you agree to
        Aview&#39;s &nbsp;
        <span className="gradient-1 gradient-text">
          <Link href="/privacy-policy">
            <a>Terms of Service</a>
          </Link>
        </span>
        &nbsp;and give us permission to post translated content on your behalf.
      </small>
    </div>
  );
};

export default UploadVideo;
