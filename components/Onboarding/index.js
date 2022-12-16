import Border from '../UI/Border';
import Shadow from '../UI/Shadow';
import Image from 'next/image';
import OnboardingButton from './button';
import { useContext, useEffect, useState } from 'react';
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
import {
  addYoutubeChannelId,
  createNewUser,
  getUserProfile,
  InstagramAuthenticationLink,
  signInWithFacebook,
  signInWithGoogle,
  updateAviewUsage,
  updateRequiredServices,
  updateUserBio,
  updateUserInstagram,
  YoutubeAuthenticationLink,
} from '../../pages/api/onboarding';
import Loader from '../UI/loader';
import axios from 'axios';
import { UserContext } from '../../store/user-profile';
import FormInput from '../FormComponents/FormInput';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import MultipleSelectInput from '../FormComponents/MultipleSelectInput';

// Onboarding stage 1
export const OnboardingStep1 = () => {
  const { user } = useContext(UserContext);

  const router = useRouter();

  const [data, setData] = useState({
    role: '',
    hasSubmitted: false,
    isLoading: false,
  });

  const handleSubmit = async () => {
    setData({ ...data, hasSubmitted: true });
    if (!data.role) return;
    setData({ ...data, isLoading: true });
    try {
      await updateAviewUsage(data.role, localStorage.getItem('uid'));
      localStorage.setItem('role', data.role);
      router.push('/onboarding?stage=2');
    } catch (error) {
      console.error(error);
    }
  };

  const Options = [
    {
      image: Team,
      title: 'For my content creators',
      desc: 'I manage a team of content creators.',
      data: 'Content Manager',
    },
    {
      image: Personal,
      title: 'For myself',
      desc: 'Get access to translations for your online content.',
      data: 'Content Creator',
    },
  ];
  return (
    <div className="m-auto w-[min(630px,90%)]">
      <h2 className="text-3xl md:text-center md:text-4xl">
        {user?.firstName}, how are you planning to use Aview?
      </h2>
      <p className="mt-4 mb-8 text-lg md:text-center md:text-xl">
        We&#8217;ll streamline your setup experience accordingly.
      </p>
      <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-0">
        {Options.map((item, index) => (
          <Shadow
            classes="md:w-[300px] w-full mr-s4 cursor-pointer"
            key={`option-${index}`}
          >
            <Border borderRadius="2xl" classes="h-full w-full">
              <div
                className={`transition-300 h-full rounded-2xl bg-black p-s2 text-center md:p-s3 ${
                  data.role === item.data && 'gradient-1'
                }`}
                onClick={() => setData({ ...data, role: item.data })}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={250}
                />
                <h3 className="text-xl md:text-2xl">{item.title}</h3>
                <p className="mt-s2 text-lg md:text-xl">{item.desc}</p>
              </div>
            </Border>
          </Shadow>
        ))}
      </div>
      {data.hasSubmitted && !data.role && (
        <p className="my-s3 text-center text-xl">Please select an option</p>
      )}
      <div className="mx-auto my-s4 w-full md:w-[360px]">
        <OnboardingButton
          disabled={!data.role}
          onClick={handleSubmit}
          isLoading={data.isLoading}
          theme="dark"
        >
          Continue
        </OnboardingButton>
      </div>
    </div>
  );
};

// Onboarding stage 2
export const OnboardingStep2 = () => {
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
      await updateRequiredServices(usage, localStorage.getItem('uid'));
      router.push('/onboarding?stage=3');
    } catch (error) {
      console.log(error);
    }
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
          theme="dark"
          onClick={handleSubmit}
          isLoading={sideEffects.isLoading}
        >
          Continue
        </OnboardingButton>
      </div>
      <Link href="/onboarding?stage=3">
        <a className="m-auto block w-full rounded-full border-2 border-solid border-white p-3 text-center text-lg md:w-[360px]">
          Skip
        </a>
      </Link>
    </div>
  );
};

// Onboarding stage 3
export const OnboardingStep3 = () => {
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

  const ONBOARDING_STAGE_3_INPUT = [
    {
      name: 'monthlyView',
      label: 'What are your average monthly views?',
    },
    {
      name: 'languages',
      label: 'What languages do you need translations for?',
    },
    {
      name: 'averageVideoDuration',
      label: 'How long is your average duration of videos?',
    },
  ];
  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (
      !payload.monthlyView ||
      payload.languages.length < 1 ||
      !payload.averageVideoDuration
    )
      return;
    setSideEffects({ ...sideEffects, isLoading: true });
    try {
      await updateUserBio(payload, localStorage.getItem('uid'));
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

  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-4xl md:text-center md:text-6xl">
        Tell us about yourself
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        We&#8217;ll customize your Aview experience based on your choices
      </p>
      <div>
        {/* <div className="m-auto flex max-w-[1144px] flex-col items-center lg:flex-row lg:gap-8">
          {ONBOARDING_STAGE_3_INPUT.map((item, index) => (
            <FormInput
              key={`input-${index}`}
              onChange={handleChange}
              hasSubmitted={sideEffects.hasSubmitted}
              placeholder="Your Response"
              {...item}
            />
          ))}
        </div> */}
        <div className="m-auto flex max-w-[1144px] flex-col items-stretch lg:flex-row lg:gap-8">
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
        </div>
        <div className="m-auto w-full md:w-[360px]">
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
  );
};

// Onboarding stage 4
export const OnboardingStep4 = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });

  const getInstagramToken = async (ig_access_code) => {
    // get short lived acces token
    try {
      const response = await axios.post(
        '/api/onboarding/link-instagram?get=short_lived_access',
        {
          code: ig_access_code,
        }
      );
      // get long lived token
      const getToken = await axios.post(
        '/api/onboarding/link-instagram?get=long_lived_access',
        {
          code: response.data.access_token,
        }
      );
      // get user instagram data
      const getUserProfile = await axios.post(
        '/api/onboarding/link-instagram?get=user_account_info',
        {
          code: getToken.data.access_token,
        }
      );
      // add current time to expiry date
      const current_milliseconds = new Date().getTime();
      const time = getToken.data.expires_in * 1000;
      const new_expiry_time = +current_milliseconds + time;

      // save all neccessary info to the database
      await updateUserInstagram(
        localStorage.getItem('uid'),
        getUserProfile.data.username,
        getUserProfile.data.id,
        getUserProfile.data.account_type,
        getToken.data.access_token,
        new_expiry_time
      );
      setIsLoading({ ...isLoading, instagram: false });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const { ig_access_code } = router.query;
    if (ig_access_code) getInstagramToken(ig_access_code);
    const token = router.asPath
      ?.split('access_token=')[1]
      ?.split('&token_type')[0];
    if (!token) return;
    else {
      getChannelId(token);
    }
  }, []);

  useEffect(() => {
    async function getProfile() {
      const data = await getUserProfile(localStorage.getItem('uid'));
      setUserData(data);
    }
    getProfile();
  }, []);

  const getChannelId = async (token) => {
    setIsLoading({ ...isLoading, youtube: true });
    try {
      const response = await axios.post(
        'api/onboarding/link-youtube?get=channel',
        {
          token,
        }
      );
      await addYoutubeChannelId(
        response.data.items[0].snippet.title,
        response.data.items[0].id,
        localStorage.getItem('uid')
      );
      setIsLoading({ ...isLoading, youtube: false });
    } catch (error) {
      console.log(error);
    }
  };

  const linkInstagramAccount = async () => {
    router.push(InstagramAuthenticationLink);
  };

  const linkYoutubeAccount = async () => {
    router.push(YoutubeAuthenticationLink);
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
      <div className="m-auto w-[min(360px,80%)]">
        <div className="relative my-s2">
          <button
            className={`${
              userData.ig_access_token && 'instagram'
            } block w-full rounded-full border-2 p-s1.5 text-center`}
            onClick={linkInstagramAccount}
          >
            Instagram
          </button>
        </div>
        <div className="relative my-s2">
          <button
            className={`block w-full rounded-full border-2 p-s1.5 text-center ${
              userData.facebook && 'bg-[#0054ff]'
            }`}
          >
            Facebook
          </button>
        </div>
        <div className="relative my-s2">
          <button
            className={`block w-full rounded-full border-2 p-s1.5 text-center ${
              userData.tiktok && 'bg-[#000000]'
            }`}
          >
            TikTok
          </button>
        </div>
        <div className="relative my-s2">
          <button
            className={`w-full rounded-full border-2 p-s1.5 text-center ${
              userData.youtubeChannelId && 'bg-[#ff0000]'
            }`}
            onClick={linkYoutubeAccount}
          >
            {isLoading.youtube ? <Loader /> : 'Youtube'}
          </button>
        </div>
        <div className="mt-s4">
          <OnboardingButton
            theme="dark"
            isLoading={isLoading.continue}
            onClick={() => router.push('/onboarding?stage=5')}
          >
            Continue
          </OnboardingButton>
        </div>
      </div>
    </div>
  );
};

// Onboarding success page
export const OnboardingSuccess = () => {
  const router = useRouter();
  return (
    <div className="m-auto w-[min(360px,80%)] pt-s5">
      <h2 className="text-5xl md:text-center md:text-6xl">Success!</h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        {/* You&apos;ve completed the onboarding process and joined our waitlist.
        You&apos;ll be contacted soon, thank you */}
        You&apos;ve completed the onboarding process. Now let&apos;s take a look at your
        dashboard.
      </p>
      <div className="w-full">
        <OnboardingButton
          onClick={() => router.push('/dashboard')}
          theme="dark"
        >
          Go back to home
        </OnboardingButton>
      </div>
    </div>
  );
};
