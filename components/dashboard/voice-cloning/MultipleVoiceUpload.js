import DottedBorder from '../../UI/DottedBorder';
import EditIcon from '../../../public/img/icons/edit.svg';
import Avatar from '../../../public/img/graphics/user.webp';
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import OnboardingButton from '../../Onboarding/button';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { uploadMultipleVoiceSamples } from '../../../services/apis';
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
      dispatch(setUser({ uploadVoiceSamples: speakers }));
      await uploadMultipleVoiceSamples(speakers, uid);
      setIsLoading(false);
      toast.success('Voice samples saved successfully');
      optionHandler((prevState) => !prevState);
      // router.push('/dashboard');
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };

  const getAudioSampleLength = () => {
    let totalAudioLength = 0;
    for (const speaker of speakers) {
      totalAudioLength = totalAudioLength + speaker.audios.length;
    }
    return totalAudioLength;
  };

  return (
    <div>
      <div className="mt-4 flex h-[450px] w-full flex-wrap items-center justify-center gap-s2 overflow-y-auto md:mt-0 md:h-full">
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
          <AddMoreComponent addVoiceOrSpeaker={addSpeaker} />
        )}
      </div>
      <Fragment>
        <div
          className="gradient-1 my-s2 ml-2 rounded-2xl p-1 transition-all md:ml-0"
          style={{ width: (getAudioSampleLength() * 100) / 25 + '%' }}
        ></div>
        <div className="flex w-full flex-row justify-between text-xs">
          <p className="ml-2">{(getAudioSampleLength() * 100) / 25}%</p>
          <p className="mr-2">{getAudioSampleLength()} / 25</p>
        </div>
      </Fragment>
      <div className="mx-auto  mt-s5 max-w-[310px]">
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
    <div className="max-h-[298px] w-full max-w-[225px]">
      <DottedBorder classes="relative inline-block border-2">
        <div className="p-3">
          <div className="mx-auto flex h-32 w-32 place-content-center">
            <Image src={Avatar} alt="" />
          </div>
          <div className="my-s3 flex w-full flex-row items-center justify-between">
            <div className="relative w-[85%]" onClick={() => toggleInputFocus}>
              <input
                type="text"
                placeholder="Speaker 1"
                className="border-b-4 border-white bg-transparent py-2 text-white outline-none focus:border-b-purple"
                id="speaker"
                ref={inputRef}
                defaultValue={name}
                onChange={handleNameChange}
              />
              <label
                htmlFor="speaker"
                className="absolute top-0 left-0  h-2 cursor-text py-1 text-white transition-all duration-300 ease-in-out"
              ></label>
            </div>
            <button onClick={toggleInputFocus}>
              <Image
                src={EditIcon}
                alt="voice-sample-check-mark"
                width={18}
                height={18}
              />
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
