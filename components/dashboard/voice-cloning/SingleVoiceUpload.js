import DottedBorder from '../../UI/DottedBorder';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import Image from 'next/image';
import { useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import { toast } from 'react-toastify';
import { uploadSingleVoiceSamples } from '../../../services/apis';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const SingleVoiceUpload = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userId = useSelector((state) => state.user.uid);
  const router = useRouter();
  const handleChange = (e) => {
    const total = e.target.files.length + audios.length;
    if (total > 25) {
      toast('Maximum voice samples exceeded');
      return;
    }

    setAudios((prevState) => [...prevState, ...e.target.files]);
  };

  const handleSubmit = async () => {
    if (audios.length < 5) {
      toast.error('Minimum of 5 samples needed');
      return;
    }
    try {
      setIsLoading(true);
      await uploadSingleVoiceSamples(audios, userId);
      setIsLoading(false);
      toast.success('Voices Samples saved successfully');
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
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
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            Upload voice samples
          </OnboardingButton>
        </div>
      )}
    </div>
  );
};

export default SingleVoiceUpload;
