import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateUserBio } from '../../pages/api/firebase';
import Cookies from 'js-cookie';
import NumberInput from '../UI/NumberInput';
import OnboardingButton from './button';

const OnboardingStep2 = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    monthlyView: '',
    totalFollowers: '',
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
      payload.monthlyView == '' ||
      payload.totalFollowers == '' ||
      payload.averageVideoDuration == ''
    ) {
      setSideEffects({ ...sideEffects, isEmpty: true });
      return;
    }
    setSideEffects({ ...sideEffects, isLoading: true });

    try {
      await updateUserBio(payload, Cookies.get('uid'));
      router.push('/onboarding?stage=3');
    } catch (error) {
      console.log(error);
    }
  };

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
            <NumberInput
              placeholder="Your Response"
              bgColor="black"
              textColor="white/80"
              name="monthlyView"
              label="How many average monthly views?"
              isValid={payload.monthlyView}
              hasSubmitted={sideEffects.hasSubmitted}
              value={payload.monthlyView}
              onChange={(e) =>
                setPayload({ ...payload, [e.target.name]: e.target.value })
              }
            />
            <NumberInput
              placeholder="Your Response"
              bgColor="black"
              textColor="white/80"
              name="totalFollowers"
              label="Total followers across all socials? (approx)"
              isValid={payload.totalFollowers}
              hasSubmitted={sideEffects.hasSubmitted}
              value={payload.totalFollowers}
              onChange={(e) =>
                setPayload({ ...payload, [e.target.name]: e.target.value })
              }
            />
            <NumberInput
              placeholder="Your Response"
              bgColor="black"
              textColor="white/80"
              name="averageVideoDuration"
              label="Average duratio of videos?"
              isValid={payload.averageVideoDuration}
              hasSubmitted={sideEffects.hasSubmitted}
              value={payload.averageVideoDuration}
              onChange={(e) =>
                setPayload({ ...payload, [e.target.name]: e.target.value })
              }
            />
          </div>
          {sideEffects.isEmpty && (
            <p className="my-s3 text-center text-xl">
              Please fill up the all inputs above to continue
            </p>
          )}
          <div className="m-auto mt-10 w-[min(360px,90%)]">
            <OnboardingButton
              onClick={handleSubmit}
              isLoading={sideEffects.isLoading}
              theme="dark"
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
