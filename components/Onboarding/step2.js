import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateUserBio } from '../../pages/api/firebase';
import Cookies from 'js-cookie';
import OnboardingButton from './button';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import {
  AVERAGE_MONTHLY_VIEWS,
  AVERAGE_SOCIAL_FOLLOWERS,
  AVERAGE_VIDEO_DURATION,
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
  });

  const isFormValid = () =>
    !!payload.monthlyView &&
    !!payload.totalFollowers &&
    !!payload.averageVideoDuration;

  const handleSubmit = async () => {
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (!isFormValid()) return;

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
        <div className="flex flex-col items-center">
          <div className="flex max-w-[360px] flex-col justify-center gap-5 ">
            <CustomSelectInput
              text="What are your average monthly views?"
              options={AVERAGE_MONTHLY_VIEWS}
              hasSubmitted={sideEffects.hasSubmitted}
              isValid={payload.monthlyView}
              onChange={(option) =>
                setPayload({ ...payload, monthlyView: option })
              }
            />
            <CustomSelectInput
              text="Total followers across all socials? (approx)"
              options={AVERAGE_SOCIAL_FOLLOWERS}
              hasSubmitted={sideEffects.hasSubmitted}
              isValid={payload.totalFollowers}
              onChange={(option) =>
                setPayload({ ...payload, totalFollowers: option })
              }
            />
            <CustomSelectInput
              text="Average duratio of videos ?"
              options={AVERAGE_VIDEO_DURATION}
              hasSubmitted={sideEffects.hasSubmitted}
              isValid={payload.averageVideoDuration}
              onChange={(option) =>
                setPayload({ ...payload, averageVideoDuration: option })
              }
            />
          </div>
          {sideEffects.hasSubmitted && !isFormValid() && (
            <p className="my-s3 text-center text-xl">
              Please fill up the all inputs above to continue
            </p>
          )}
          <div className="m-auto mt-10 w-[min(360px,90%)]">
            <OnboardingButton
              onClick={handleSubmit}
              isLoading={sideEffects.isLoading}
              theme="light"
              disabled={!isFormValid()}
            >
              Continue
            </OnboardingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep2;
