import { useRouter } from 'next/router';
import { useState } from 'react';
import { updateRequiredServices } from '../../pages/api/firebase';
import ComingSoon from '../UI/ComingSoon';
import Shadow from '../UI/Shadow';
import { ONBOARDING_STAGE_4 } from '../../constants/constants';
import OnboardingButton from './button';
import Link from 'next/link';
import Cookies from 'js-cookie';

const OnboardingStep3 = () => {
  const router = useRouter();

  const [usage, setUsage] = useState([]);
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

  const handleSelect = (option) => {
    const newArray = [...usage];
    if (newArray.includes(option)) {
      newArray.splice(newArray.indexOf(option), 1);
      setUsage(newArray);
    } else {
      newArray.push(option);
      setUsage(newArray);
    }
  };

  const handleSubmit = async () => {
    try {
      setSideEffects({ ...sideEffects, hasSubmitted: true });
      if (usage.length < 1) return;
      setSideEffects({ ...sideEffects, isLoading: true });
      await updateRequiredServices({ usage }, Cookies.get('uid'));
      router.push('/onboarding?stage=4');
    } catch (error) {
      console.log(error);
    }
  };

  const Option = ({ title, content }) => {
    return content === 'Coming soon!' ? (
      <ComingSoon>
        <div className={`overlay- dark h-full rounded-2xl p-s3 md:p-s4`}>
          <p className={`text-xl font-bold text-white/60 md:text-2xl`}>
            {title}
          </p>
          <p className="mt-s2 text-lg text-white/60 md:text-xl">{content}</p>
        </div>
      </ComingSoon>
    ) : (
      <Shadow>
        <div
          className={`${usage.includes(title) ? 'gradient-1' : `gradient-dark`}
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
        Select all that apply.
      </p>
      <div className="m-auto">
        {ONBOARDING_STAGE_4.map((option, index) => (
          <Option key={`option-${index}`} {...option} />
        ))}
      </div>
      {sideEffects.hasSubmitted && (
        <p className="my-s3 text-center text-xl">
          Please choose an option or skip below
        </p>
      )}
      <div className="m-auto my-s4 w-[min(360px,90%)]">
        <OnboardingButton
          theme="dark"
          onClick={handleSubmit}
          isLoading={sideEffects.isLoading}
        >
          Continue
        </OnboardingButton>
      </div>
      <Link href="/onboarding?stage=4">
        <a className="m-auto block w-[min(360px,90%)] rounded-full border-2 border-solid border-white p-3 text-center text-lg">
          Skip
        </a>
      </Link>
    </div>
  );
};
export default OnboardingStep3;
