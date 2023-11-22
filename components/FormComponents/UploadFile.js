import Image from 'next/image';
import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import Correct from '../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';

const UploadFile = ({ data, setData, isValid, hasSubmitted }) => {
  return (
    <DottedBorder classes="relative block md:inline-block border-4">
      <label className={`flex cursor-pointer flex-col items-center ${data.resume && 'py-s1'} py-s6 md:px-s10`}>
        {!data.resume &&<Image src={UploadIcon} alt="Upload" />}
        {data.resume ? (
        <img src={URL.createObjectURL(data.resume)} alt="Uploaded resume" width={250} height={250}/>
        ) :
        <input
          type="file"
          name="resume"
          className="hidden"
          accept="application/doc, application/docx, application/pdf"
          onChange={(e) => setData({ ...data, resume: e.target.files[0] })}
        />
        }
        <p className="pt-s1 text-xl text-white">
          {data.resume === null ? 'Upload Resume' : data.resume.name}
        </p>
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
