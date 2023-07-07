import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateRequiredServices } from '../../pages/api/firebase';
import Shadow from '../UI/Shadow';
import { ONBOARDING_STAGE_4 } from '../../constants/constants';
import OnboardingButton from './button';
import Cookies from 'js-cookie';

const OnboardingStep3 = () => {
  const router = useRouter();

  const [usage, setUsage] = useState('');
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

  const handleSelect = (option) => {
    setUsage(option);
  };

  const handleSubmit = async () => {
    try {
      setSideEffects({ ...sideEffects, hasSubmitted: true });
      if (!usage) return;
      setSideEffects({ ...sideEffects, isLoading: true });
      await updateRequiredServices({ usage }, Cookies.get('uid'));
      router.push('/onboarding?stage=4');
    } catch (error) {
      console.log(error);
    }
  };

  const Option = ({ title, content }) => {
    return (
      <Shadow>
        <div
          className={`${
            usage === title ? 'gradient-1' : `gradient-dark`
          } my-4 h-full cursor-pointer rounded-2xl bg-black p-s3 md:p-s4`}
          onClick={() => handleSelect(title)}
        >
          <p className="text-xl font-bold md:text-2xl">{title}</p>
          <p className="mt-s2 text-lg md:text-xl">{content}</p>
        </div>
      </Shadow>
    );
  };

  return (
    <div className="m-auto w-[min(800px,90%)]">
      <h2 className="text-5xl font-bold md:text-center md:text-6xl">
        How do you plan to use Aview?
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        Please choose one option to proceed.
      </p>
      <div className="m-auto">
        {ONBOARDING_STAGE_4.map((option, index) => (
          <Option key={`option-${index}`} {...option} />
        ))}
      </div>
      {/* {sideEffects.hasSubmitted && (
        <p className="my-s3 text-center text-xl">
          Please choose an option or skip below
        </p>
      )} */}
      <div className="m-auto my-s4 w-[min(360px,90%)]">
        <OnboardingButton
          theme="light"
          onClick={handleSubmit}
          isLoading={sideEffects.isLoading}
          disabled={!usage}
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};
export default OnboardingStep3;
