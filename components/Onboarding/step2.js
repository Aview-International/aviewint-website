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
  CATEGORIES,
} from '../../constants/constants';

export const OnboardingStep2 = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    monthlyView: '',
    categories: [],
    averageVideoDuration: '',
  });
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });
  
  const isFormValid = () =>	
    !!payload.monthlyView &&	
    !!payload.categories.length >= 1 &&	
    !!payload.averageVideoDuration;

  const handleSubmit = async () => {	
      setSideEffects({ ...sideEffects, hasSubmitted: true });	
      if (!isFormValid()) return;	
      setSideEffects({ ...sideEffects, isLoading: true });	
      try {	
        await updateUserBio(payload, Cookies.get('uid'));	
        router.push('/onboarding?stage=3');	
      } catch (error) {	
        console.log(error);	
      }	
  };

  const handleMultipleLanguages = (option) => {
    const newArray = [...payload.categories];
    if (newArray.includes(option)) {
      newArray.splice(newArray.indexOf(option), 1);
      setPayload({ ...payload, categories: newArray });
    } else {
      newArray.push(option);
      setPayload({ ...payload, categories: newArray });
    }
  };

  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Tell us about yourself
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        We&#8217;ll customize your Aview experience based on your choices.
      </p>
      <div>
        <div className="flex flex-row justify-center">
          <div className="grid max-w-[1144px] grid-cols-1 lg:grid-cols-3 lg:gap-8">
            <CustomSelectInput
              text="What are your average monthly views?"
              options={AVERAGE_MONTHLY_VIEWS}
              hasSubmitted={sideEffects.hasSubmitted}
              isValid={payload.monthlyView}
              onChange={(option) =>
                setPayload({ ...payload, monthlyView: option })
              }
            />
            <MultipleSelectInput
              text="Which category does your content belongs to?"
              options={CATEGORIES}
              answer={payload.categories}
              hasSubmitted={sideEffects.hasSubmitted}
              onChange={(event) => handleMultipleLanguages(event)}
            />
            <CustomSelectInput
              text="How long is your average duration of videos?"
              options={AVERAGE_VIDEO_DURATION}
              hasSubmitted={sideEffects.hasSubmitted}
              isValid={payload.averageVideoDuration}
              onChange={(option) =>
                setPayload({ ...payload, averageVideoDuration: option })
              }
            />
          </div>
        </div>
        <div className="m-auto mt-s4 w-[min(360px,90%)]">
          <OnboardingButton
            disabled={!isFormValid()}
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