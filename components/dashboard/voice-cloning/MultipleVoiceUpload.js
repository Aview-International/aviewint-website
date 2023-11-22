
import DottedBorder from '../../UI/DottedBorder';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import EditIcon from '../../../public/img/icons/edit.svg';
import PlusIcon from '../../../public/img/icons/plus.svg';
import Avatar from '../../../public/img/graphics/user.webp';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { uploadMultipleVoiceSamples } from '../../../services/apis';
import { useRouter } from 'next/router';
import ErrorHandler from '../../../utils/errorHandler';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/reducers/user.reducer';
import AddMoreComponent from './AddMoreComponent';
import Border from '../../UI/Border';

const MultipleVoiceUpload = ({ optionHandler }) => {
  const dispatch = useDispatch();
  //const router = useRouter();
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
      dispatch(setUser({ uploadVoiceSamples : speakers}))
      await uploadMultipleVoiceSamples(speakers, uid);
      setIsLoading(false);
      toast.success('Voice samples saved successfully');
      optionHandler((prevState) => !prevState)
      // router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  const getAudioSampleLength = () => {
    let totalAudioLength = 0;
    for(const speaker of speakers){
      totalAudioLength = totalAudioLength + speaker.audios.length
    }
    return totalAudioLength
  };

  return (
    <div className=''>
      <div className="flex h-full w-full flex-col gap-s3 md:grid md:grid-cols-5 overflow-x-auto">
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
          <AddMoreComponent addVoiceOrSpeaker={addSpeaker} padding={15}/>
        )}
      </div>
     <Fragment>
         <div
            className="gradient-1 my-s1 rounded-2xl p-1 transition-all"
            style={{ width: (getAudioSampleLength() * 100) / 25 + '%' }}
          ></div>
          <div className="flex flex-row justify-between w-full text-xs">
            <p>{(getAudioSampleLength() * 100) / 25}%</p>
            <p>{getAudioSampleLength()} / 25</p>
          </div>
     </Fragment>
      <div className="mx-auto  max-w-[350px] mt-s5">
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
    <div className="flex h-full w-full flex-row items-center justify-start">
      <DottedBorder  classes="relative inline-block border-2">
         <div className='w-full h-full p-3 flex flex-col gap-x-2 gap-y-4'>
           <Image src={Avatar} alt='voice-sample-person' width={150} height={150}/>
           <div className='w-full flex flex-row justify-between items-center'>
              <div class="relative w-[85%]" onClick={()=>toggleInputFocus}>
                 <input
                  type="text"
                  placeholder="Speaker 1" 
                  class="outline-none border-b border-white focus:border-blue-500 py-2  text-white bg-transparent"
                  id="speaker"
                  ref={inputRef}
                  defaultValue={name}
                  onChange={handleNameChange}
                 />
                 <label for="speaker" class="absolute top-0 left-0  py-1 transition-all duration-300 ease-in-out h-2 text-white cursor-text"></label>
              </div>
              <button onClick={toggleInputFocus}>
               <Image src={EditIcon} alt="voice-sample-check-mark" width={18} height={18}  /> 
              </button>
           </div>
            <input
              type="file"
              accept="audio/mp3, audio/mpeg, audio/wav"
              id={'upload' + idx}
              className="hidden"
              multiple
              onChange={handleAudioChange}
            />
            <label className="mt-s1 ml-6 cursor-pointer" htmlFor={'upload' + idx}>
              <Border borderRadius="full">
                <span
                  className={`transition-300 mx-auto block rounded-full bg-gray-1 px-s3 py-s1 text-center text-white`}
                >
                  Upload files
                </span>
              </Border>
            </label>
            <div>
            {audios.map((blob, i) => (
             <p key={i} className="pl-2">
               {blob.name}
             </p>
            ))}
          </div>
       </div>
      </DottedBorder>
    </div>
  );
};

export default MultipleVoiceUpload;
