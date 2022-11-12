import Border from '../UI/Border';
import Shadow from '../UI/Shadow';
import Image from 'next/image';
import OnboardingButton from './button';
import { useContext, useEffect, useMemo, useState } from 'react';
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
import Correct from '../../public/img/icons/green-check-circle.svg';

// Onboarding stage 1
export const OnboardingStep1 = () => {
  const router = useRouter();
  const { user, updateUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState({
    google: false,
    facebook: false,
  });

  const updateDatabase = async (_tokenResponse) => {
    updateUser({
      ...user,
      email: _tokenResponse.email,
      firstName: _tokenResponse.firstName,
      lastName: _tokenResponse.lastName,
      picture: _tokenResponse.photoUrl,
    });
    localStorage.setItem('token', _tokenResponse.idToken);
    localStorage.setItem('uid', _tokenResponse.localId);
    await createNewUser(
      _tokenResponse.localId,
      _tokenResponse.firstName,
      _tokenResponse.lastName,
      _tokenResponse.photoUrl,
      _tokenResponse?.email
    );
    router.push('/onboarding?stage=2');
  };

  const handleGoogle = async (type) => {
    setIsLoading({ ...isLoading, google: true });
    const { _tokenResponse } = await signInWithGoogle();
    updateDatabase(_tokenResponse);
  };

  const handleFacebook = async () => {
    setIsLoading({ ...isLoading, facebook: true });
    const { _tokenResponse } = await signInWithFacebook();
    updateDatabase(_tokenResponse);
  };

  const { account } = router.query;
  return (
    <>
      <div className=" m-auto flex w-[min(380px,90%)] flex-col items-stretch">
        <h2 className="mb-8 text-center text-7xl md:text-8xl">Sign Up</h2>
        {account && (
          <p className="mb-s3 text-center text-lg">
            You don&apos;t have an account yet, begin here
          </p>
        )}
        <Shadow classes="w-full mb-4">
          <Border borderRadius="full" classes="w-full">
            <button
              className="flex w-full items-center justify-center rounded-full bg-black p-2 text-white md:p-3"
              onClick={handleGoogle}
            >
              {isLoading.google ? (
                <Loader />
              ) : (
                <>
                  <span className="flex items-center justify-center pr-s1">
                    <Image src={Google} alt="Google" />
                  </span>
                  Continue with Google
                </>
              )}
            </button>
          </Border>
        </Shadow>
        <Shadow classes="w-full">
          <Border borderRadius="full" classes="w-full">
            <button
              className="align-center flex w-full justify-center rounded-full bg-black p-2 text-white md:p-3"
              onClick={handleFacebook}
            >
              {isLoading.facebook ? (
                <Loader />
              ) : (
                <>
                  <span className="flex items-center justify-center pr-s1">
                    <Image src={Facebook} alt="Facebook" />
                  </span>
                  Continue with Facebook
                </>
              )}
            </button>
          </Border>
        </Shadow>
      </div>
    </>
  );
};

// Onboarding stage 2
export const OnboardingStep2 = () => {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [data, setData] = useState({
    purpose: '',
    hasSubmitted: false,
    isLoading: false,
  });
  const handleSubmit = async () => {
    setData({ ...data, hasSubmitted: true });
    if (!data.purpose) return;
    setData({ ...data, isLoading: true });
    try {
      await updateAviewUsage(data.purpose, localStorage.getItem('uid'));
    } catch (error) {
      console.error(error);
    }
    router.push('/onboarding?stage=3');
  };
  return (
    <div className="m-auto w-[min(630px,90%)]">
      <h2 className="text-3xl md:text-center md:text-4xl">
        {user?.firstName}, how are you planning to use Aview?
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

// Onboarding stage 3
export const OnboardingStep3 = () => {
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
      router.push('/onboarding?stage=4');
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

// Onboarding stage 4
export const OnboardingStep4 = () => {
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
      router.push('/onboarding?stage=5');
    } catch (error) {
      console.log(error);
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

// Onboarding stage 5
export const OnboardingStep5 = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const [isComplete, setIsComplete] = useState(undefined);
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
      localStorage.setItem('isComplete', isComplete);
      setIsComplete(Math.random());
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
      localStorage.setItem('youtube_oauth', token);
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
      console.log(response);
      // await addYoutubeChannelId(
      //   response.data.items[0].id,
      //   localStorage.getItem('uid')
      // );
      // setIsComplete(Math.random());
      // setIsLoading({ ...isLoading, youtube: false });
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
            className={`instagram block w-full rounded-full border-2 p-s1.5 text-center`}
            onClick={linkInstagramAccount}
          >
            Instagram
          </button>
          {userData.ig_access_token && (
            <span className="absolute -right-[40px] top-1/2 flex -translate-y-2/4">
              <Image src={Correct} alt="Correct" width={35} height={35} />
            </span>
          )}
        </div>
        <div className="relative my-s2">
          <button
            className={`block w-full rounded-full border-2 bg-[#0054ff] p-s1.5 text-center`}
          >
            Facebook
          </button>
          {userData.facebook && (
            <span className="absolute -right-[40px] top-1/2 flex -translate-y-2/4">
              <Image src={Correct} alt="Correct" width={35} height={35} />
            </span>
          )}
        </div>
        <div className="relative my-s2">
          <button
            className={`block w-full rounded-full border-2 bg-[#000000] p-s1.5 text-center`}
          >
            TikTok
          </button>
          {userData.tiktok && (
            <span className="absolute -right-[40px] top-1/2 flex -translate-y-2/4">
              <Image src={Correct} alt="Correct" width={35} height={35} />
            </span>
          )}
        </div>
        <div className="relative my-s2">
          <button
            className={`w-full rounded-full border-2 bg-[#ff0000] p-s1.5 text-center`}
            onClick={linkYoutubeAccount}
          >
            {isLoading.youtube ? <Loader /> : 'Youtube'}
          </button>
          {userData.youtubeChannelId && (
            <span className="absolute -right-[40px] top-1/2 flex -translate-y-2/4">
              <Image src={Correct} alt="Correct" width={35} height={35} />
            </span>
          )}
        </div>
        <div className="mt-s4">
          <OnboardingButton
            isLoading={isLoading.continue}
            onClick={() => router.push('/onboarding?stage=6')}
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
        You&#8217;ve completed the onboarding process. Now let&#8217;s take a
        look at your dashboard.
      </p>
      <div className="w-full">
        <OnboardingButton onClick={() => router.push('/dashboard')}>
          Go to Dashboard
        </OnboardingButton>
      </div>
    </div>
  );
};
