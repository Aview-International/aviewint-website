import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Correct from '../../public/img/icons/correct.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';

const UploadFile = ({ data, setData, isValid, hasSubmitted }) => {
  return (
    <DottedBorder classes="relative block md:inline-block">
      <label className="flex cursor-pointer flex-col items-center py-s6 md:px-s10">
        <Image src={UploadIcon} alt="Upload" />
        <p className="pt-s1 text-xl text-white">
          {data.resume === null ? 'Upload Resume' : data.resume.name}
        </p>
        <input
          type="file"
          name="resume"
          className="hidden"
          accept="application/doc, application/docx, application/pdf"
          onChange={(e) => setData({ ...data, resume: e.target.files[0] })}
        />
      </label>
      <span className="absolute right-[10px] top-[15px]">
        {isValid && (
          <Image src={Correct} alt="Correct" width={25} height={25} />
        )}
        {hasSubmitted && !isValid && (
          <Image src={Incorrect} alt="Incorrect" width={25} height={25} />
        )}
      </span>
    </DottedBorder>
  );
};

export default UploadFile;
