import Image from 'next/image';
import DashboardLayout from './DashboardLayout';
import VideoFrame from './YoutubeVideoFrame';
import CheckBox from '../FormComponents/CheckBox';
import FormInput from '../FormComponents/FormInput';
import Arrow from '../../public/img/icons/arrow-back.svg';
import Textarea from '../FormComponents/Textarea';
import OnboardingButton from '../Onboarding/button';
import { useRouter } from 'next/router';
import { useState } from 'react';

const TranslateOptions = ({ setIsSelected }) => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    services: [],
    languages: [],
    otherLanguages: '',
    allowUsPostVideo: false,
    saveSettingsForFuture: false,
  });

  const handleLanguages = (value) => {
    const newLanguages = [...payload.languages];
    if (newLanguages.includes(value))
      newLanguages.splice(newLanguages.indexOf(value), 1);
    else newLanguages.push(value);
    setPayload({ ...payload, languages: newLanguages });
  };

  const handleServices = (value) => {
    const newServices = [...payload.services];
    if (newServices.includes(value))
      newServices.splice(newServices.indexOf(value), 1);
    else newServices.push(value);
    setPayload({ ...payload, services: newServices });
  };

  const handleSubmit = () => {
    console.log(payload);
  };
  return (
    <div className="flex p-s4 text-white">
      <div className="w-1/2">
        <SelectedVideos router={router} setIsSelected={setIsSelected} />
      </div>
      <div className="w-1/2">
        <Options
          handleServices={handleServices}
          handleLanguages={handleLanguages}
          handleSubmit={handleSubmit}
          payload={payload}
        />
      </div>
    </div>
  );
};

const SelectedVideos = ({ setIsSelected }) => {
  const array = ['', '', '', ''];
  return (
    <div>
      <div
        className="mb-s3 flex cursor-pointer items-start text-2xl"
        onClick={() => setIsSelected(false)}
      >
        <span className="ml-s3 mr-s2 brightness-0 invert">
          <Image src={Arrow} alt="" width={8} height={16} />
        </span>
        <span>Videos Selected</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {array.map((item, index) => (
          <VideoFrame key={`video-${index}`} />
        ))}
      </div>
    </div>
  );
};

const Options = ({
  handleServices,
  handleLanguages,
  handleSubmit,
  payload,
}) => {
  return (
    <div>
      <h3 className="mb-s3 text-2xl">Translate</h3>
      <p className="mb-s1 text-xl">
        What languages do you need translations for?
      </p>
      <div className="flex flex-wrap">
        {TRANSLATED_LANGUAGES.map((language, index) => (
          <span
            className={`mr-s1 mb-s1 cursor-pointer rounded-full py-s1 px-s3 text-lg ${
              payload.languages.includes(language)
                ? 'bg-white text-black'
                : 'bg-gray-1'
            }`}
            key={`language-${index}`}
            onClick={() => handleLanguages(language)}
          >
            {language}
          </span>
        ))}
      </div>
      <div className="mt-s4 mb-s4">
        <FormInput
          label="If selected Other, please specify which language(s):"
          placeholder="Other language(s)"
        />
      </div>
      <p className="text-xl">What services do you need?</p>
      <div className="mt-s1 mb-s4">
        {SERVICES.map((service, index) => (
          <span
            className={`mr-s1 mb-s1 cursor-pointer rounded-full py-s1 px-s3 text-lg ${
              payload.services.includes(service)
                ? 'bg-white text-black'
                : 'bg-gray-1'
            }`}
            key={`service-${index}`}
            onClick={() => handleServices(service)}
          >
            {service}
          </span>
        ))}
      </div>
      <Textarea
        label="Is there anything else you would like us to know?"
        placeholder="Additional notes"
      />
      <CheckBox label="Save these settings for future translations" />
      <br />
      <CheckBox label="Would you like us to post this video as well?" />
      <br />
      <div className="w-[140px]">
        <OnboardingButton onClick={handleSubmit}>Submit</OnboardingButton>
      </div>
    </div>
  );
};

const TRANSLATED_LANGUAGES = [
  'English',
  'Spanish',
  'Portuguese',
  'French',
  'Hindi',
  'German',
  'Mandarin',
  'Arabic',
  'Other',
];

const SERVICES = ['Subtitle', 'Dubs', 'Shorts', 'Distribution'];

TranslateOptions.getLayout = DashboardLayout;

export default TranslateOptions;
