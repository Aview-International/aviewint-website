import DottedBorder from '../../UI/DottedBorder';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import EditIcon from '../../../public/img/icons/edit.svg';
import PlusIcon from '../../../public/img/icons/plus.svg';
import Avatar from '../../../public/img/graphics/user.webp';
import Image from 'next/image';
import { useRef, useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { uploadMultipleVoiceSamples } from '../../../services/apis';
import { useRouter } from 'next/router';

const MultipleVoiceUpload = () => {
  const router = useRouter();
  const { firstName, lastName, uid } = useSelector((state) => state.user);
  const name = firstName + ' ' + lastName;
  const [isLoading, setIsLoading] = useState(false);
  const [speakers, setSpeakers] = useState([
    {
      name,
      audios: [],
    },
  ]);

  const addSpeaker = () => {
    if (speakers.length >= 5) {
      toast('Maximum number of speakers reached');
      return;
    }
    const allSpeakers = [...speakers];
    allSpeakers.push({
      name: 'Speaker ' + (speakers.length + 1),
      audios: [],
    });
    setSpeakers(allSpeakers);
  };

  const uploadVoiceSamples = async () => {
    for (const speaker of speakers) {
      if (speaker.audios.length < 5) {
        toast.error('All speakers must have at 5 voices!');
        return;
      }
    }
    try {
      setIsLoading(true);
      await uploadMultipleVoiceSamples(speakers, uid);
      setIsLoading(false);
      toast.success('Voice samples saved successfully');
      router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2">
        {speakers.map((speaker, i) => (
          <Speaker
            key={i}
            idx={i}
            speakers={speakers}
            setSpeakers={setSpeakers}
            name={speaker.name}
            audios={speaker.audios}
          />
        ))}

        {speakers.length < 5 && (
          <button className="cursor-pointer text-sm" onClick={addSpeaker}>
            <span className="mb-s1 block">Add Speaker</span>
            <Image src={PlusIcon} alt="Add Voice" width={40} height={40} />
          </button>
        )}
      </div>

      <div className="mx-auto my-s3 w-[250px]">
        <OnboardingButton onClick={uploadVoiceSamples} isLoading={isLoading}>
          Upload voice samples
        </OnboardingButton>
      </div>
    </div>
  );
};

const Speaker = ({ audios, name, setSpeakers, speakers, idx }) => {
  const inputRef = useRef(null);
  const toggleInputFocus = () => {
    inputRef.current.focus();
  };

  const handleNameChange = (e) => {
    const newArray = [...speakers];
    newArray[idx].name = e.target.value;
    setSpeakers(newArray);
  };

  const handleAudioChange = (e) => {
    const total = e.target.files.length + audios.length;
    if (total > 25) {
      toast('25 voice samples per speaker');
      return;
    }

    const newSpeakers = [...speakers];
    newSpeakers[idx].audios = [...newSpeakers[idx].audios, ...e.target.files];
    setSpeakers(newSpeakers);
  };

  return (
    <DottedBorder classes="w-full my-s5 relative mx-auto block max-w-[260px]">
      <small className="absolute left-[85%] top-[10px] text-center">
        {audios.length}/{audios.length > 5 ? 25 : 5}
      </small>
      <div className="relative mx-auto my-s3 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gray-1">
        <Image src={Avatar} alt="Upload" layout="fill" />
      </div>
      <div className="flex items-center justify-between px-s1">
        <input
          type="text"
          className="mb-s1 block bg-transparent text-center"
          defaultValue={name}
          ref={inputRef}
          onChange={handleNameChange}
        />
        <button onClick={toggleInputFocus}>
          <Image src={EditIcon} alt="" width={18} height={18} />
        </button>
      </div>

      <label
        htmlFor={'upload' + idx}
        className="max-w-8/10 my-s3 mx-auto block cursor-pointer"
      >
        <div className="mx-auto my-s3 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-gray-1">
          <Image src={UploadIcon} alt="Upload" width={25} height={25} />
          <input
            type="file"
            accept="audio/mp3, audio/mpeg, audio/wav"
            id={'upload' + idx}
            className="hidden"
            multiple
            onChange={handleAudioChange}
          />
        </div>
        <small className="mb-s1 block text-center">Click to upload</small>

        <div>
          {audios.map((blob, i) => (
            <p key={i} className="pl-2">
              {blob.name}
            </p>
          ))}
        </div>
      </label>
    </DottedBorder>
  );
};

export default MultipleVoiceUpload;
