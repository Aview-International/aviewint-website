import {
  DAHSHBOARD_SERVICES,
  DAHSHBOARD_TRANSLATED_LANGUAGES,
} from '../../constants/constants';
import CheckBox from '../FormComponents/CheckBox';
import FormInput from '../FormComponents/FormInput';
import RadioInput from '../FormComponents/RadioInput';
import OnboardingButton from '../Onboarding/button';

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

      <p className="mb-s2 text-xl">
        What languages do you need translations for?
      </p>

      <div className="grid w-full grid-flow-row grid-cols-2 place-items-start gap-2">
        {DAHSHBOARD_TRANSLATED_LANGUAGES.map((language, index) => (
          <RadioInput
            key={index}
            value={language}
            name="Select Languages"
            onChange={() => handleLanguages(language)}
            chosenValue={payload.languages}
          />
        ))}
      </div>

      {payload.languages === 'Other' && (
        <div className="mt-s4">
          <FormInput
            label="If selected Other,please specify which language(s):"
            value={payload.otherLanguages}
            labelClasses="mb-3"
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
      <p className="mt-s4 text-xl">What services do you need?</p>
      <div className="mt-s2 mb-s4 grid w-full place-content-start gap-2">
        {DAHSHBOARD_SERVICES.map((service, index) => (
          <RadioInput
            key={index}
            value={service}
            name="Select Services"
            onChange={() => handleServices(service)}
            chosenValue={payload.services}
          />
        ))}
      </div>
      <CheckBox
        onChange={(e) =>
          setPayload({ ...payload, saveSettingsForFuture: e.target.checked })
        }
        label="Save these settings for future translations"
      />
      <br />
      <div className="w-full md:w-36">
        <OnboardingButton
          isLoading={isLoading}
          onClick={handleSubmit}
          // disabled={true}
        >
          Submit
        </OnboardingButton>
      </div>
    </div>
  );
};

export default TranslateOptions;
