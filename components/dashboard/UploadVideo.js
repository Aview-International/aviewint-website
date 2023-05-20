import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Link from 'next/link';
import OnboardingButton from '../Onboarding/button';

const UploadVideo = ({ myWidget }) => {
  const handleClick = () => {
    myWidget.open();
  };

  return (
    <div className="w-11/12">
      <DottedBorder classes="relative block md:inline-block w-full">
        <div className="flex flex-col items-center py-s3">
          <div className="flex h-[160px] w-[160px] place-content-center rounded-full bg-gray-1">
            <Image src={UploadIcon} alt="Upload" width={80} height={80} />
          </div>
          <p className='font-normal text-xl mt-s3'>Drapg and drop videos to upload</p>
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
      </DottedBorder>
      <p className="py-s2 text-lg underline text-center cursor-not-allowed opacity-30">
        Download Transcription
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
