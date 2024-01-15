import DottedBorder from '../../UI/DottedBorder';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import Image from 'next/image';
import { useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import { toast } from 'react-toastify';
import { uploadSingleVoiceSamples } from '../../../services/apis';
import { useRouter } from 'next/router';
import ErrorHandler from '../../../utils/errorHandler';
import Border from '../../UI/Border';
import DeleteIcon from '../../../public/img/icons/trash.svg';

const SingleVoiceUpload = () => {
  const [audios, setAudios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const total = e.target.files.length + audios.length;
    if (total > 25) {
      toast('Maximum voice samples exceeded');
      return;
    }
    setAudios((prevState) => [...prevState, ...e.target.files]);
  };

  const deleteSampleHandler = (indexToDelete) => {
    const newAudioesArray = audios.filter(
      (_, index) => index !== indexToDelete
    );
    setAudios(newAudioesArray);
  };

  const handleSubmit = async () => {
    if (audios.length < 5) {
      toast.error('Minimum of 5 samples needed');
      return;
    }
    try {
      setIsLoading(true);
      await uploadSingleVoiceSamples(audios);
      setIsLoading(false);
      toast.success('Voices Samples saved successfully');
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  return (
    <div className="h-full w-full overflow-y-auto md:overflow-y-hidden">
      <div className="mx-auto w-3/4 md:w-2/5">
        <label htmlFor="video_upload" className="mx-auto cursor-pointer">
          <DottedBorder classes="relative block md:inline-block w-full h-full mt-s8 md:mt-s1 border-2">
            <div className="flex flex-col items-center py-s3">
              <div className="flex h-[100px] w-[100px] place-content-center rounded-full bg-gray-1">
                <Image src={UploadIcon} alt="Upload" width={60} height={60} />
              </div>
              <input
                type="file"
                accept="audio/mp3, audio/mpeg, audio/wav"
                id="video_upload"
                className="hidden"
                multiple
                onChange={handleChange}
              />
              <p className="mt-3 text-lg">Click below to upload</p>
              <label className="mt-s1 cursor-pointer" htmlFor="video_upload">
                <Border borderRadius="full">
                  <span
                    className={`transition-300 mx-auto block rounded-full bg-gray-1 px-s3 py-s1 text-center text-white`}
                  >
                    Select files
                  </span>
                </Border>
              </label>
            </div>
          </DottedBorder>
        </label>
      </div>
      <div className="my-s3 mx-auto grid grid-cols-[repeat(auto-fill,280px)] justify-center gap-3 overflow-y-auto">
        {audios.map((blob, i) => (
          <div key={i} className="mx-2 rounded-2xl bg-gray-1 p-3">
            <div className="flex flex-row items-center justify-between">
              <p className="mb-2 ml-2">{blob.name}</p>
              <div
                className="cursor-pointer"
                onClick={() => deleteSampleHandler(i)}
              >
                <Image
                  src={DeleteIcon}
                  alt="Delete sample"
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <audio controls className="w-full">
              <source src={URL.createObjectURL(blob)} type="audio/webm" />
              <source src={URL.createObjectURL(blob)} type="audio/mp3" />
              <source src={URL.createObjectURL(blob)} type="audio/mpeg" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ))}
      </div>
      {audios.length > 0 && (
        <div className="mx-auto max-w-[350px]">
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
