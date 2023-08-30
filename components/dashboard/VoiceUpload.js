import DottedBorder from '../UI/DottedBorder';
import UploadIcon from '../../public/img/icons/upload-icon1.svg';
import EditIcon from '../../public/img/icons/edit.svg';
import Avatar from '../../public/img/graphics/user.webp';
import Image from 'next/image';
import { useState } from 'react';
import OnboardingButton from '../Onboarding/button';
import { toast } from 'react-toastify';
import ToggleButton from '../FormComponents/ToggleButton';

const VoiceUpload = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMultiple, setIsMultiple] = useState(false);

  const handleChange = (e) => {
    if (e.target.files.length + audios.length > 25) {
    }
    if (audios.length >= 25) {
      toast('Maximum voice samples reached');
      return;
    }
    console.log('event!!');
    // const newArray = [...audios];
    // newArray.push(e.target.files);
    console.log(e.target.files);
    setAudios((prevState) => [...prevState, ...e.target.files]);
  };

  const handleMultipleToggle = (e) => {
    setIsMultiple(e.target.checked);
  };

  return (
    <div>
      <p className="text-center text-xl">
        Upload voice samples with clear sound and no background noises.
        <br /> Minimum of 5 voice samples required
      </p>

      <div className="mt-s3 flex items-center justify-center">
        <p className="mr-s3">Upload for voice samples for multiple people</p>
        <ToggleButton
          isChecked={isMultiple}
          handleChange={handleMultipleToggle}
        />
      </div>
      <label
        htmlFor="upload"
        className="my-s5 mx-auto block max-w-[260px] cursor-pointer"
      >
        <DottedBorder classes="w-full">
          <div className="mx-auto my-s3 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gray-1">
            <Image src={UploadIcon} alt="Upload" width={40} height={40} />
            <input
              type="file"
              accept="audio/mp3, audio/mpeg, audio/webm"
              id="upload"
              className="hidden"
              multiple
              onChange={handleChange}
            />
          </div>
          <small className="mb-s1 block text-center">Click to upload</small>
        </DottedBorder>
      </label>

      <label
        htmlFor="upload"
        className="my-s5 mx-auto block max-w-[260px] cursor-pointer"
      >
        <DottedBorder classes="w-full">
          <div className="relative mx-auto my-s3 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gray-1">
            <Image src={Avatar} alt="Upload" layout="fill" />
            <input
              type="file"
              accept="audio/mp3, audio/mpeg, audio/webm"
              id="upload"
              className="hidden"
              multiple
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <p className="mb-s1 block text-center">Name </p>

            <button>
              <Image src={EditIcon} alt="" />
            </button>
          </div>
        </DottedBorder>
      </label>

      <div className="grid grid-cols-2 gap-x-s8">
        {audios.map((blob, i) => (
          <div key={i} className="mx-2">
            <p>Audio Sample {i + 1}</p>
            <audio controls>
              <source src={URL.createObjectURL(blob)} type="audio/webm" />
              <source src={URL.createObjectURL(blob)} type="audio/mp3" />
              <source src={URL.createObjectURL(blob)} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>

      {audios.length > 0 && (
        <div className="mx-auto my-s3 w-[250px]">
          <OnboardingButton
            disabled={audios.length < 5}
            // onClick={uploadVoiceSamples}
            isLoading={isLoading}
          >
            Upload voice samples
          </OnboardingButton>
        </div>
      )}
    </div>
  );
};

export default VoiceUpload;
