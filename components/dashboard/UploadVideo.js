import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Border from '../UI/Border';

const UploadVideo = ({ setVideo, video, uploadProgress, isLoading }) => {
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

        <input
          type="file"
          className="hidden"
          accept="video/mp4"
          onChange={(e) => setVideo(e.target.files[0])}
          id="video_upload"
        />
        {video ? (
          <video
            width="400"
            controls
            className="max-h-sm h-full w-full max-w-sm"
          >
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

      <small className="my-s2 block text-sm">
        You acknowledge that you agree to Aview&#39;s &nbsp;
        <span className="gradient-1 gradient-text">
          <a href="/privacy-policy" target="_blank" rel="noferrer">
            Terms of Service
          </a>
        </span>
        &nbsp;and give us permission to post translated content on your behalf.
      </small>
    </div>
  );
};

export default UploadVideo;
