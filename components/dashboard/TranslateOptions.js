import {
  DAHSHBOARD_SERVICES,
  DAHSHBOARD_TRANSLATED_LANGUAGES,
} from '../../constants/constants';
import CheckBox from '../FormComponents/CheckBox';
import FormInput from '../FormComponents/FormInput';
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
      <div className="w-full grid grid-cols-2 grid-flow-row place-items-start gap-2">
        {
          DAHSHBOARD_TRANSLATED_LANGUAGES.map((language,index)=>(
          <span 
          className='font-light text-lg ' 
          key={`language-${index}`} 
          onClick={() => handleLanguages(language)}
          >
            <input type='radio' value={language} className='mr-2 w-4 h-4 cursor-pointer' name="action" id={language}/>
            <label htmlFor={language} className='cursor-pointer'>{language}</label>
          </span>
          ))
        }
      </div>
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
      <p className="mt-s4 text-xl">What services do you need?</p>
      <div className="mt-s2 mb-s4 w-full grid  gap-2 place-content-start">
        {DAHSHBOARD_SERVICES.map((service, index) => (
          <span 
           className='font-light text-lg text-start' 
           key={`language-${index}`} 
           onClick={() => handleServices(service)} 
          >
           <input type='radio' value={service} className='mr-2 w-4 h-4 cursor-pointer' name="act" id={service}/>
            <label htmlFor={service} className='cursor-pointer'>{service}</label>
          </span>
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
        <OnboardingButton isLoading={isLoading} onClick={handleSubmit} disabled={true}>
          Submit
        </OnboardingButton>
      </div>
    </div>
  );
};

export default TranslateOptions;
