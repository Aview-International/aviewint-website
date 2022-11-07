import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Link from 'next/link';

const UploadVideo = ({ data, setData, isValid, hasSubmitted }) => {
  return (
    <div className="w-11/12 bg-black">
      <DottedBorder classes="relative block md:inline-block w-full">
        <div className="flex flex-col items-center py-s6">
          <div className="flex h-[160px] w-[160px] place-content-center rounded-full bg-gray-1">
            <Image
              src={UploadIcon}
              alt="Upload"
              width={80}
              height={80}
              // layout="responsive"
            />
          </div>
          <p className="py-s2 text-xl text-white">
            {
              //   data.resume === null ?
              'Drag and drop videos files to upload'
              //   : data.resume.name
            }
          </p>
          <label className="cursor-pointer">
            <input
              type="file"
              name="resume"
              className="hidden"
              accept="video/mp4,video/x-m4v,video/*"
              onChange={(e) => setData({ ...data, resume: e.target.files[0] })}
            />
            <span className="gradient-1 rounded-full py-s1 px-s4 text-black">
              Select Files
            </span>
          </label>
          <span className="absolute right-[10px] top-[15px]">
            {isValid && (
              <Image src={Correct} alt="Correct" width={25} height={25} />
            )}
            {hasSubmitted && !isValid && (
              <Image src={Incorrect} alt="Incorrect" width={25} height={25} />
            )}
          </span>
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
