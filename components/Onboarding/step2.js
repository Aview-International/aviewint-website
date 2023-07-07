import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateUserBio } from '../../pages/api/firebase';
import Cookies from 'js-cookie';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import MultipleSelectInput from '../FormComponents/MultipleSelectInput';
import OnboardingButton from './button';
import {
  AVERAGE_MONTHLY_VIEWS,
  AVERAGE_VIDEO_DURATION,
  LANGUAGES,
} from '../../constants/constants';

export const OnboardingStep2 = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    monthlyView: '',
    languages: '',
    averageVideoDuration: '',
  });
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
    isEmpty: false,
  });
  
  const handleSubmit = async () => {
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (
      !payload.monthlyView ||
      payload.languages.length < 1 ||
      !payload.averageVideoDuration
    ) {
      setSideEffects({ ...sideEffects, isEmpty: true });
      return;
    }
    setSideEffects({ ...sideEffects, isLoading: true });
    try {
      await updateUserBio(payload, Cookies.get('uid'));
      router.push('/onboarding?stage=4');
    } catch (error) {
      console.log(error);
    }
  };

  const handleMultipleSelect = (option) => {
    const newArray = [...payload.languages];
    if (newArray.includes(option)) {
      newArray.splice(newArray.indexOf(option), 1);
      setPayload({ ...payload, languages: newArray });
    } else {
      newArray.push(option);
      setPayload({ ...payload, languages: newArray });
    }
  };

  console.log(sideEffects.isEmpty)
  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Tell us about yourself
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        We&#8217;ll customize your Aview experience based on your choices
      </p>
      <div>
        <div className="ml-12 flex flex-row justify-center">
          <div className="flex max-w-[1144px] flex-col  items-stretch lg:flex-row lg:gap-8">
            <CustomSelectInput
              text="What are your average monthly views ?"
              options={AVERAGE_MONTHLY_VIEWS}
              hasSubmitted={sideEffects.hasSubmitted}
              isValid={payload.monthlyView}
              onChange={(option) =>
                setPayload({ ...payload, monthlyView: option })
              }
            />
            <MultipleSelectInput
              text="What languages do you need translations for ?"
              options={LANGUAGES}
              answer={payload.languages}
              hasSubmitted={sideEffects.hasSubmitted}
              onChange={(event) => handleMultipleSelect(event)}
            />
            <CustomSelectInput
              text="How long is your average duration of videos ?"
              options={AVERAGE_VIDEO_DURATION}
              hasSubmitted={sideEffects.hasSubmitted}
              isValid={payload.averageVideoDuration}
              onChange={(option) =>
                setPayload({ ...payload, averageVideoDuration: option })
              }
            />
          </div>
        </div>
        {/* {sideEffects.isEmpty && (
          <p className="my-s3 text-center text-xl">
            Please select from the options above to continue
          </p>
        )} */}
        <div className="m-auto mt-s4 w-[min(360px,90%)]">
          <OnboardingButton
            disabled={!payload.monthlyView ||
              payload.languages.length < 1 ||
              !payload.averageVideoDuration}
            onClick={handleSubmit}
            isLoading={sideEffects.isLoading}
            theme="dark"
          >
            Continue
          </OnboardingButton>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;
