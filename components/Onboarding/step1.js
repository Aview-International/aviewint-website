import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import MultipleSelectInput from '../FormComponents/MultipleSelectInput';
import OnboardingButton from './button';
import {
  AVERAGE_MONTHLY_VIEWS,
  AVERAGE_VIDEO_DURATION,
  CATEGORIES,
} from '../../constants/constants';
import ErrorHandler from '../../utils/errorHandler';
import {
  authCustomUser,
  updateRequiredServices,
} from '../../services/firebase';

export const OnboardingStep1 = ({ userData, allLanguages }) => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    monthlyView: '',
    categories: [],
    averageVideoDuration: '',
    defaultLanguage: '',
  });
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

  useEffect(() => {
    setPayload({
      monthlyView: userData.monthlyView,
      categories: userData.categories,
      averageVideoDuration: userData.averageVideoDuration,
      defaultLanguage: userData.defaultLanguage,
    });
  }, [userData]);

  useEffect(() => {
    if (
      payload.monthlyView == null &&
      payload.categories == null &&
      payload.averageVideoDuration == null &&
      payload.defaultLanguage == null
    )
      return;
    const handleWarnUser = (event) => {
      event.preventDefault();
      return (event.returnValue = '');
    };
    window.addEventListener('beforeunload', handleWarnUser, { capture: true });
    return () => {
      window.removeEventListener('beforeunload', handleWarnUser, {
        capture: true,
      });
    };
  }, [payload]);

  const isFormValid = () =>
    !!payload.monthlyView &&
    !!payload.categories.length >= 1 &&
    !!payload.defaultLanguage &&
    !!payload.averageVideoDuration;

  const handleSubmit = async () => {
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (!isFormValid()) return;
    setSideEffects({ ...sideEffects, isLoading: true });
    try {
      if (Cookies.get('testUser')) {
        await authCustomUser(
          Cookies.get('session'),
          payload,
          Cookies.get('uid')
        );
        return router.push('/onboarding?stage=2');
      }
      await updateRequiredServices(payload, Cookies.get('uid'));
      router.push('/onboarding?stage=2');
    } catch (error) {
      ErrorHandler(error);
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
      <div className="flex flex-col items-center justify-center ">
        <div className="mt-s5 max-w-[1144px]">
          <CustomSelectInput
            hideCheckmark
            text="What language is your channel?"
            options={allLanguages}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(option) =>
              setPayload({ ...payload, defaultLanguage: option })
            }
            value={payload.defaultLanguage}
          />
          <CustomSelectInput
            hideCheckmark
            text="What are your average monthly views?"
            options={AVERAGE_MONTHLY_VIEWS}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(option) =>
              setPayload({ ...payload, monthlyView: option })
            }
            value={payload.monthlyView}
          />
          <MultipleSelectInput
            hideCheckmark
            text="Which category does your content belongs to?"
            options={CATEGORIES}
            answer={payload.categories}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(event) => handleMultipleLanguages(event)}
          />
          <CustomSelectInput
            hideCheckmark
            text="How long is your average duration of videos?"
            options={AVERAGE_VIDEO_DURATION}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(option) =>
              setPayload({ ...payload, averageVideoDuration: option })
            }
            value={payload.averageVideoDuration}
          />
        </div>
        <div className="m-auto mt-s2.5 w-[min(360px,90%)]">
          <OnboardingButton
            disabled={!isFormValid()}
            onClick={handleSubmit}
            isLoading={sideEffects.isLoading}
            theme="light"
          >
            Continue
          </OnboardingButton>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep1;
