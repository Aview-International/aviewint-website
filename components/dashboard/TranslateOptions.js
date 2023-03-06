import {
  DAHSHBOARD_SERVICES,
  DAHSHBOARD_TRANSLATED_LANGUAGES,
} from '../../constants/constants';
import CheckBox from '../FormComponents/CheckBox';
import FormInput from '../FormComponents/FormInput';
import Textarea from '../FormComponents/Textarea';
import OnboardingButton from '../Onboarding/button';
import TextInput from '../../components/UI/TextInput';

const TranslateOptions = ({
  handleServices,
  handleLanguages,
  handleSubmit,
  payload,
  setPayload,
  isLoading,
}) => {
  return (
    <div>
      <h3 className="mb-s3 text-2xl">Summary</h3>
      <p className="mb-s1 text-xl">
        What languages do you need translations for?
      </p>
      <div className="flex flex-wrap">
        {DAHSHBOARD_TRANSLATED_LANGUAGES.map((language, index) => (
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
      {payload.languages.includes('Others') && (
        <div className="mt-s4">
          <FormInput
            label="Please specify language(s), separated with comma"
            value={payload.otherLanguages}
            placeholder="Other language(s)"
            onChange={(e) =>
              setPayload({
                ...payload,
                otherLanguages: e.target.value,
              })
            }
          />
        </div>
      )}
      <p className="mt-s4 mb-3 text-xl">
        If selected Other, please specify which language(s) :
      </p>
      <div className="w-full">
        <TextInput placeholder="Other language(s)" bgColor="black" />
        {/* <input
          type="text"
          value={payload.inputLanguages}
          onChange={(e) => {
            setPayload({
              ...payload,
              inputLanguages: e.target.value,
            });
          }}
          placeholder="Other language(s)"
          className="h-full w-full rounded-[5px] border-2 px-s2 py-2 text-white focus:outline-none"
        /> */}
      </div>
      <p className="mt-s4 text-xl">What services do you need?</p>
      <div className="mt-s1 mb-s4 flex flex-wrap">
        {DAHSHBOARD_SERVICES.map((service, index) => (
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
        value={payload.additionalNote}
        onChange={(e) =>
          setPayload({
            ...payload,
            additionalNote: e.target.value,
          })
        }
      />
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, saveSettingsForFuture: e.target.checked })
        }
        label="Save these settings for future translations"
      />
      <br />
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, allowUsPostVideo: e.target.checked })
        }
        label="Would you like us to post this video as well?"
      />
      <br />
      <div className="w-full md:w-36">
        <OnboardingButton isLoading={isLoading} onClick={handleSubmit}>
          Submit
        </OnboardingButton>
      </div>
    </div>
  );
};

export default TranslateOptions;
