import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Link from 'next/link';
import FormData from 'form-data';
import uploadVideo from '../../services/upload';
import { useContext, useState } from 'react';
import { UserContext } from '../../store/user-profile';
import Border from '../UI/Border';

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
        {video && (
          <button
            onClick={() => setVideo(null)}
            className={`gradient-2 absolute top-4 right-4 z-50 mx-auto block w-[80px] cursor-pointer rounded-full pt-s0 pb-s0 text-center text-sm`}
          >
            Remove
          </button>
        )}
        {video && (
          <button
            onClick={handleUpload}
            className={`gradient-2 absolute bottom-4 right-1/2 left-1/2 z-50 mx-auto block w-[140px] -translate-x-1/2 cursor-pointer rounded-full pt-s1.5 pb-s1 text-center`}
          >
            Proceed
          </button>
        )}
        <input
          type="file"
          className="hidden"
          accept="video/mp4"
          onChange={(e) => setVideo(e.target.files[0])}
          id="video_upload"
        />
        {video ? (
          <video width="400" controls className="h-full w-full">
            <source src={URL.createObjectURL(video)} type="video/mp4" />
          </video>
        ) : (
          <div className="flex flex-col items-center py-s6">
            <div className="flex h-[160px] w-[160px] place-content-center rounded-full bg-gray-1">
              <Image src={UploadIcon} alt="Upload" width={80} height={80} />
            </div>

            <label className="mt-s5" htmlFor="video_upload">
              <Border borderRadius="full">
                <span
                  className={`transition-300 mx-auto block rounded-full bg-black px-s3 pt-s1.5 pb-s1 text-center text-white`}
                >
                  Select files
                </span>
              </Border>
            </label>
          </div>
        )}
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
