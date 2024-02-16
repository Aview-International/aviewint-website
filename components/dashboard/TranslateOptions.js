import { useSelector } from 'react-redux';
import { SUPPORTED_REGIONS } from '../../constants/constants';
import CheckBox from '../FormComponents/CheckBox';
import RadioInput from '../FormComponents/RadioInput';
import OnboardingButton from '../Onboarding/button';
import Image from 'next/image';
import ToggleButton from '../FormComponents/ToggleButton';
import { useEffect, useState } from 'react';
import Textarea from '../FormComponents/Textarea';
import PlayIcon from '../../public/img/icons/play.svg';

const voiceList = ['Rachel', 'Drew', 'Clyde', 'Paul', 'Domi', 'Dave', 'Fin'];

const TranslateOptions = ({
  handleSubmit,
  payload,
  setPayload,
  isLoading,
  uploadProgress,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const userData = useSelector((state) => state.user);
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

  useEffect(() => {
    if (userData.saveSettings)
      setPayload({ ...payload, languages: userData.preferences });
    else setPayload({ ...payload, languages: userData.languages });
  }, [userData.languages]);

  const handleChange = (language) => {
    let allLanguages = [...payload.languages];
    if (allLanguages.includes(language))
      allLanguages.splice(allLanguages.indexOf(language), 1);
    else allLanguages.push(language);
    setPayload({ ...payload, languages: allLanguages });
  };

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
      <p className="mt-s3  text-xl font-semibold">Select Voice</p>
      <p className="mb-s3 text-xs">Eleven Lab voices.</p>
      <div className="flex flex-wrap items-center justify-center gap-x-6">
        {voiceList.map((voice, index) => {
          return (
            <button
              key={index}
              className={`${
                activeIndex === index
                  ? 'bg-white-transparent px-6 py-1 font-semibold'
                  : ''
              } rounded-md`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="inline-block text-center">{voice}</span>
            </button>
          );
        })}
        <audio controls className="mx-auto mt-4 block w-1/2">
          <source type="audio/webm" />
          <source type="audio/mp3" />
          <source type="audio/mpeg" />
        </audio>
        <p className="mt-1 w-full text-center text-sm">
          Listen vairous above voice sample options
        </p>
      </div>

      <p className="mt-s4 text-lg">
        Is there anything else you would like us to know?
      </p>
      <Textarea
        placeholder="Additional notes"
        onChange={(e) =>
          setPayload({ ...payload, additionalNote: e.target.value })
        }
      />
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, saveSettings: e.target.checked })
        }
        label="Save these settings for future translations"
        labelClasses="text-base"
      />
      <p className="my-s3 w-full border-2 border-x-0 border-t-0 border-white py-1 text-lg">
        Additional Services
      </p>
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, additionalPay: e.target.checked })
        }
        label="Would you like to create shorts for these videos? If yes, a $20 fee will be charged."
        labelClasses="text-base"
      />
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

const VoicePlay = ({ setPayload, payload, voice }) => {
  return (
    <div className="flex flex-row gap-x-3">
      <div className="cursor-pointer">
        <Image src={PlayIcon} alt="play-option" width={24} height={24} />
      </div>
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, selectVoice: e.target.checked })
        }
        label={voice}
        labelClasses="text-sm text-center mt-[2px]"
      />
    </div>
  );
};

export default TranslateOptions;
