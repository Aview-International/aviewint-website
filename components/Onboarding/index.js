import FormInput from '../FormComponents/FormInput';
import Border from '../UI/Border';
import Shadow from '../UI/Shadow';
import DefaultPicture from '../../public/img/team/default.png';
import Image from 'next/image';
import OnboardingButton from './button';
import { useState } from 'react';
import { emailValidator } from '../../utils/regex';
import Google from '../../public/img/icons/google.svg';
import Facebook from '../../public/img/icons/facebook-logo-onboarding.svg';
import Personal from '../../public/img/graphics/personal-use.png';
import Team from '../../public/img/graphics/team-use.png';
import { useRouter } from 'next/router';
import {
  AVERAGE_MONTHLY_VIEWS,
  AVERAGE_VIDEO_DURATION,
  LANGUAGES,
  ONBOARDING_STAGE_4,
} from '../../constants/constants';
import Link from 'next/link';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import MultipleSelectInput from '../FormComponents/MultipleSelectInput';
import Button from '../UI/Button';

export const OnboardingStep1 = () => {
  const router = useRouter();
  const [email, setEmail] = useState({
    hasSubmitted: false,
    isLoading: false,
    email: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail({ ...email, hasSubmitted: true });
    if (!emailValidator(email.email)) return;
    setEmail({ ...email, isLoading: true });
    setTimeout(() => router.push('/onboarding?stage=2'), 2000);
  };
  return (
    <>
      <div className=" m-auto flex w-[min(380px,90%)] flex-col items-stretch">
        <h2 className="mb-8 text-center text-7xl md:text-8xl">Sign Up</h2>
        <Shadow classes="w-full mb-4">
          <Border borderRadius="full" classes="w-full">
            <button className="flex w-full items-center justify-center rounded-full bg-black p-2 text-white md:p-3">
              <span className="flex items-center justify-center pr-s1">
                <Image src={Google} alt="Google" />
              </span>
              Continue with Google
            </button>
          </Border>
        </Shadow>
        <Shadow classes="w-full">
          <Border borderRadius="full" classes="w-full">
            <button className="align-center flex w-full justify-center rounded-full bg-black p-2 text-white md:p-3">
              <span className="flex items-center justify-center pr-s1">
                <Image src={Facebook} alt="Facebook" />
              </span>
              Continue with Facebook
            </button>
          </Border>
        </Shadow>
        <div className={`gradient-1 my-8 h-[2px] w-full`}></div>
        <FormInput
          label="Email"
          placeholder="Your email"
          _id="email"
          hasSubmitted={email.hasSubmitted}
          onChange={(e) => setEmail({ ...email, email: e.target.value })}
          isValid={emailValidator(email.email)}
        />
        <OnboardingButton isLoading={email.isLoading} onClick={handleSubmit}>
          Continue with email
        </OnboardingButton>
      </div>
    </>
  );
};

export const OnboardingStep2 = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    image: null,
    firstName: '',
    password: '',
  });
  const [sideEffects, setSideEffects] = useState({
    isLoading: false,
    hasSubmitted: false,
  });
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (!payload.image || !payload.firstName || !payload.password) return;
    setSideEffects({ ...sideEffects, isLoading: true });
    setTimeout(() => router.push('/onboarding?stage=3'), 2000);
  };
  return (
    <>
      <div className=" m-auto flex w-[min(380px,90%)] flex-col items-stretch">
        <h2 className="text-center text-3xl md:text-4xl">Welcome to Aview</h2>
        <p className="mt-2 mb-8 text-center text-lg md:text-xl">
          Tell us a litle about yourself
        </p>
        <label className="cursor-pointer">
          <span className="align-center flex justify-center">
            <Image
              src={
                payload.image
                  ? URL.createObjectURL(payload.image)
                  : DefaultPicture
              }
              alt="Photo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) =>
              setPayload({ ...payload, image: e.target.files[0] })
            }
          />
        </label>
        <p className="mt-4 mb-8 text-center text-lg md:text-xl">Add a photo</p>
        <FormInput
          label="What is your name?"
          placeholder="First and last name"
          onChange={handleChange}
          name="firstName"
          isValid={payload.firstName}
          hasSubmitted={sideEffects.hasSubmitted}
        />
        <FormInput
          label="Set a password"
          placeholder="New password"
          onChange={handleChange}
          isValid={payload.password}
          type="password"
          name="password"
          hasSubmitted={sideEffects.hasSubmitted}
        />
        <OnboardingButton
          isLoading={sideEffects.isLoading}
          onClick={handleSubmit}
        >
          Continue
        </OnboardingButton>
      </div>
    </>
  );
};

export const OnboardingStep3 = () => {
  const router = useRouter();
  const [data, setData] = useState({
    purpose: '',
    hasSubmitted: false,
    isLoading: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, hasSubmitted: true });
    if (!data.purpose) return;
    setData({ ...data, isLoading: true });
    setTimeout(() => router.push('/onboarding?stage=4'), 2000);
  };
  return (
    <div className="m-auto w-[min(630px,90%)]">
      <h2 className="text-3xl md:text-center md:text-4xl">
        How are you planning to use Aview?
      </h2>
      <p className="mt-4 mb-8 text-lg md:text-center md:text-xl">
        We&#8217;ll streamline your setup experience accordingly.
      </p>
      <div className="flex flex-col items-stretch justify-center md:flex-row">
        <Shadow classes="md:w-[300px] w-full mr-s4 cursor-pointer">
          <Border classes="h-full w-full" borderRadius="2xl">
            <div
              className={`transition-300 h-full rounded-2xl bg-black p-s2 text-center md:p-s3 ${
                data.purpose === 'team' && 'gradient-1'
              }`}
              onClick={() => setData({ ...data, purpose: 'team' })}
            >
              <Image src={Team} alt="Team" width={250} height={250} />
              <h3 className="text-xl md:text-2xl">For my content creators</h3>
              <p className="mt-s2 text-lg md:text-xl">
                I manage a team of content creators.
              </p>
            </div>
          </Border>
        </Shadow>
        <Shadow classes="md:w-[300px] w-full cursor-pointer mt-s2 md:mt-0">
          <Border borderRadius="2xl" classes="h-full w-full">
            <div
              className={`transition-300 h-full w-full rounded-2xl bg-black p-s2 text-center md:p-s3 ${
                data.purpose === 'personal' && 'gradient-1'
              }`}
              onClick={() => setData({ ...data, purpose: 'personal' })}
            >
              <Image src={Personal} alt="Personal" width={250} height={250} />
              <h3 className="text-xl md:text-2xl">For myself</h3>
              <p className="mt-s2 text-lg md:text-xl">
                Get access to translations for your online content.
              </p>
            </div>
          </Border>
        </Shadow>
      </div>
      {data.hasSubmitted && !data.purpose && (
        <p className="my-s3 text-center text-xl">Please select an option</p>
      )}
      <div className="mx-auto my-s4 w-full md:w-[360px]">
        <OnboardingButton onClick={handleSubmit} isLoading={data.isLoading}>
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};

export const OnboardingStep4 = () => {
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
  const handleSubmit = () => {
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (usage.length < 1) return;
    setSideEffects({ ...sideEffects, isLoading: true });
    setTimeout(() => router.push('/onboarding?stage=5'), 2000);
  };
  const Option = ({ title, content }) => (
    <Shadow>
      <div
        className={`${
          usage.includes(title) ? 'gradient-1' : 'gradient-dark'
        } h-full cursor-pointer rounded-2xl bg-black p-s3 md:p-s4`}
        onClick={() => handleSelect(title)}
      >
        <p className="text-xl md:text-2xl">{title}</p>
        <p className="mt-s2 text-lg md:text-xl">{content}</p>
      </div>
    </Shadow>
  );

  return (
    <div className="m-auto w-[min(750px,90%)]">
      <h2 className="text-5xl md:text-center md:text-6xl">
        How do you plan to use Aview?
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        Select all that apply.
      </p>
      <div className="m-auto grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2 md:grid-rows-2">
        {ONBOARDING_STAGE_4.map((option, index) => (
          <Option key={`option-${index}`} {...option} />
        ))}
      </div>
      {sideEffects.hasSubmitted && (
        <p className="my-s3 text-center text-xl">
          Please choose an option or skip below
        </p>
      )}
      <div className="mx-auto my-s4 w-full md:w-[360px]">
        <OnboardingButton
          onClick={handleSubmit}
          isLoading={sideEffects.isLoading}
        >
          Continue
        </OnboardingButton>
      </div>
      <Link href="/onboarding?stage=5">
        <a className="block text-center text-xl">Skip</a>
      </Link>
    </div>
  );
};

export const OnboardingStep5 = () => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    monthlyView: '',
    languages: [],
    averageVideoDuration: '',
  });
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });
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
  const handleSubmit = () => {
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (
      !payload.monthlyView ||
      payload.languages.length < 1 ||
      !payload.averageVideoDuration
    )
      return;
    setSideEffects({ ...sideEffects, isLoading: true });
    setTimeout(() => router.push('/onboarding?stage=6'), 2000);
  };
  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-4xl md:text-center md:text-6xl">
        Tell us about yourself
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        We&#8217;ll customize your Aview experience based on your choices
      </p>
      <div className="m-auto w-[min(360px,100%)]">
        <CustomSelectInput
          text="What are your average monthly views?"
          options={AVERAGE_MONTHLY_VIEWS}
          hasSubmitted={sideEffects.hasSubmitted}
          isValid={payload.monthlyView}
          onChange={(option) => setPayload({ ...payload, monthlyView: option })}
        />
        <MultipleSelectInput
          text="What languages do you need translations for?"
          options={LANGUAGES}
          answer={payload.languages}
          hasSubmitted={sideEffects.hasSubmitted}
          onChange={(event) => handleMultipleSelect(event)}
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
        <OnboardingButton
          onClick={handleSubmit}
          isLoading={sideEffects.isLoading}
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};

export const OnboardingStep6 = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => router.push('/onboarding?stage=7'), 2000);
  };
  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-center text-3xl md:text-6xl">
        Connect your accounts
      </h2>
      <p className="mx-auto mt-s2 mb-s4 w-[min(600px,100%)] text-center text-lg md:text-xl">
        We&#8217;ll need this information to accurately post on your behalf. You
        can remove them at any point if you like!
      </p>
      <div className="m-auto w-[min(360px,100%)]">
        <button
          className={`instagram my-s2 block w-full rounded-full border-2 p-s1.5 text-center`}
        >
          Instagram
        </button>
        <button
          className={`my-s2 block w-full rounded-full border-2 bg-[#0054ff] p-s1.5 text-center`}
        >
          Facebook
        </button>
        <button
          className={`my-s2 block w-full rounded-full border-2 bg-[#000000] p-s1.5 text-center`}
        >
          TikTok
        </button>
        <button
          className={`my-s2 block w-full rounded-full border-2 bg-[#ff0000] p-s1.5 text-center`}
        >
          Youtube
        </button>
        <div className="mt-s4">
          <OnboardingButton isLoading={isLoading} onClick={handleSubmit}>
            Continue
          </OnboardingButton>
        </div>
      </div>
    </div>
  );
};

export const OnboardingSuccess = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => router.push('/dashboard'), 2000);
  };
  return (
    <div className="m-auto w-[min(360px,80%)] pt-s5">
      <h2 className="text-left text-5xl md:text-6xl">Success!</h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        You&#8217;ve completed the onboarding process. Now let&#8217;s take a
        look at your dashboard.
      </p>
      <div className="w-full">
        <OnboardingButton isLoading={isLoading} onClick={handleSubmit}>
          Go to Dashboard
        </OnboardingButton>
      </div>
    </div>
  );
};
