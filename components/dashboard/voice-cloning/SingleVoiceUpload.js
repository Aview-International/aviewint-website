import DottedBorder from '../../UI/DottedBorder';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import Image from 'next/image';
import { useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import { toast } from 'react-toastify';
import { uploadSingleVoiceSamples } from '../../../services/apis';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ErrorHandler from '../../../utils/errorHandler';
import Border from '../../UI/Border';
import Button from '../../UI/Button'
import DeleteIcon from '../../../public/img/icons/trash.svg'

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

  const deleteSampleHandler = (indexToDelete) => {
    const newAudioesArray = audios.filter(( _, index) => index !== indexToDelete)
    setAudios(newAudioesArray)
  }


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
      ErrorHandler(error);
    }
  };


  return (
    <div className='w-full h-full'>
    <div className='w-2/5 mx-auto'>
      <label
        htmlFor="video_upload"
        className="mx-auto cursor-pointer"
      >
        <DottedBorder classes="relative block md:inline-block w-full h-full mt-s1 border-2">
          
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
            <p className='text-2xl mt-3'>Drag files to upload</p>
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
    <div className="grid grid-cols-3 my-3 gap-3">
        {audios.map((blob, i) => (
          <div key={i} className="mx-2 rounded-2xl bg-gray-1 p-3">
            <div className='flex flex-row justify-between items-center'>

              <p className='mb-2 ml-2'>Audio Sample {i + 1}</p>
              <div className='cursor-pointer' onClick={()=>deleteSampleHandler(i)}>

              <Image src={DeleteIcon} alt="Delete sample" width={20} height={20}/>
              </div>
            </div>
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
        <div className="mx-auto w-full max-w-[350px]">
          <OnboardingButton
            disabled={audios.length < 25}
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
