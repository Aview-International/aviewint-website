import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { SUPPORTED_REGIONS } from '../../constants/constants';
import CheckBox from '../FormComponents/CheckBox';
import OnboardingButton from '../Onboarding/button';
import Image from 'next/image';
import ToggleButton from '../FormComponents/ToggleButton';
import RadioInput from '../FormComponents/RadioInput';
import PlayIcon from '../../public/img/icons/play.svg';
import PauseIcon from '../../public/img/icons/pause.svg';
import ButtonText from '../sections/reused/ButtonText';
import { getElevenVoices } from '../../services/apis';

const TranslateOptions = ({
  handleSubmit,
  payload,
  setPayload,
  isLoading,
  uploadProgress,
}) => {
  const [chosenValue, setChosenValue] = useState('');
  const [samplesArray, setSamplesArray] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const userData = useSelector((state) => state.user);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRef = useRef(null);

  const youtubePicture = useSelector(
    (state) => state.youtube?.channelDetails?.thumbnail
  );

  const findLocalDialect = (language) => {
    let allLanguages = [];
    SUPPORTED_REGIONS.forEach(({ data }) => {
      data.forEach((el) => allLanguages.push(el));
    });
    return allLanguages.find((el) => el.languageName === language);
  };

  const handleChange = (language) => {
    let allLanguages = [...payload.languages];
    if (allLanguages.includes(language))
      allLanguages.splice(allLanguages.indexOf(language), 1);
    else allLanguages.push(language);
    setPayload({ ...payload, languages: allLanguages });
  };

  const togglePlay = (id, url) => {
    if (id === playingIndex) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(id);
      let audioPlayer = audioRef.current;
      audioPlayer.src = url;
      audioPlayer.load();
      audioPlayer.play();
    }
  };

  const togglePause = (index) => {
    let audioPlayer = audioRef.current;
    if (audioPlayer.paused) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
      setPlayingIndex(null);
    }
  };

  const handleEndOfVoice = () => {
    audioRef.current.pause();
    setPlayingIndex(null);
  };

  useEffect(() => {
    if (userData.saveSettings)
      setPayload({ ...payload, languages: userData.preferences });
    else setPayload({ ...payload, languages: userData.languages });
  }, [userData.languages]);

  useEffect(() => {
    (async () => {
      const samplesData = await getElevenVoices();

      setSamplesArray(samplesData.voices.slice(0, 10));
    })();
  }, [userData.languages]);

  return (
    <>
      <h3 className="my-s3 text-2xl font-bold">Distribution</h3>
      <p className="mb-s4 text-lg">
        Which channels do you want these videos posted on? Want to post in an
        additional language? You can create more international channels.
      </p>
      <div className="max-h-[368px] overflow-y-auto overflow-x-hidden pr-s1.5">
        {userData.languages.map((language, index) => (
          <div
            className="min-w-max(100%,360px) gradient-dark mb-s2 flex items-center justify-between rounded-md p-s1.5"
            key={index}
          >
            <div className="flex items-center justify-between">
              <Image
                src={youtubePicture}
                alt="profile-image"
                height={40}
                width={40}
                className="block rounded-full"
              />
              <div className="ml-3 flex flex-col">
                <h2 className="text-lg">
                  {userData.youtubeChannelName}
                  {findLocalDialect(language)?.['localDialect']}
                </h2>
                <p className="text-sm">YouTube</p>
              </div>
            </div>
            <ToggleButton
              isChecked={payload.languages.includes(language)}
              handleChange={() => handleChange(language)}
            />
          </div>
        ))}
      </div>
      {userData.plan === undefined ? (
        <>
          <audio hidden={true} ref={audioRef} onEnded={handleEndOfVoice} />
          <p className="mt-s3 text-xl font-semibold">Select Voice</p>
          <p className="mb-s1.5 text-xs">Eleven Lab voices.</p>
          <div className="mb-s4 grid grid-cols-2 items-start justify-start gap-y-2">
            {samplesArray.map((voice, index) => {
              return (
                <VoicePlay
                  setPayload={setPayload}
                  payload={payload}
                  name={voice.name}
                  key={index}
                  chosenValue={chosenValue}
                  setChosenValue={setChosenValue}
                  onTogglePlay={() => togglePlay(index, voice.preview_url)}
                  onTogglePause={() => togglePause(index)}
                  isPlaying={index === playingIndex}
                />
              );
            })}
          </div>
        </>
      ) : null}
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, saveSettings: e.target.checked })
        }
        label="Save these settings for future translations"
        labelClasses="text-base"
      />
      <ButtonText
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        labelClasses={`mt-s3 ${isOpen ? 'mb-s3' : ''}`}
      >
        <p className={`text-lg`}>Additional Services</p>
      </ButtonText>
      {isOpen ? (
        <CheckBox
          onChange={(e) =>
            setPayload({ ...payload, additionalPay: e.target.checked })
          }
          label="Would you like to create shorts for these videos? If yes, a $20 fee will be charged."
          labelClasses="text-base"
        />
      ) : null}
      <br />
      {isLoading &&
        (uploadProgress < 100 ? (
          <div className="h-3 w-full rounded-full">
            <div
              className="gradient-2 h-full rounded-full"
              style={{ width: uploadProgress + '%' }}
            ></div>
          </div>
        ) : (
          <p>Processing video please wait</p>
        ))}
      {!isLoading && (
        <div className="w-full md:w-36">
          <OnboardingButton isLoading={isLoading} onClick={handleSubmit}>
            Submit
          </OnboardingButton>
        </div>
      )}
    </>
  );
};

const VoicePlay = ({
  setPayload,
  payload,
  name,
  chosenValue,
  setChosenValue,
  onTogglePause,
  onTogglePlay,
  isPlaying,
}) => {
  return (
    <div className="flex flex-row items-center justify-start gap-x-3">
      {isPlaying ? (
        <button onClick={onTogglePause} className="flex items-center">
          <Image
            src={PauseIcon}
            alt="play-option"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      ) : (
        <button onClick={onTogglePlay} className="flex items-center">
          <Image
            src={PlayIcon}
            alt="play-option"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </button>
      )}
      <RadioInput
        onChange={(e) => {
          setChosenValue(e.target.value);
          setPayload({ ...payload, selectVoice: e.target.value });
        }}
        label={name}
        name="voices"
        value={name}
        chosenValue={chosenValue}
      />
    </div>
  );
};

export default TranslateOptions;
