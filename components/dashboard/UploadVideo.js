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
        <div className="flex flex-col items-center py-s6">
          <div className="flex h-[160px] w-[160px] place-content-center rounded-full bg-gray-1">
            <Image src={UploadIcon} alt="Upload" width={80} height={80} />
          </div>

          <div className="mt-s5 w-[220px]">
            <OnboardingButton
              onClick={handleClick}
              theme="light"
              disabled={!myWidget ? true : false}
            >
              Click to upload
            </OnboardingButton>
          </div>
        </div>
      </DottedBorder>
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
