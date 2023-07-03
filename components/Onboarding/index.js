import Border from '../UI/Border';
import Shadow from '../UI/Shadow';
import Image from 'next/image';
import OnboardingButton from './button';
import { useContext, useEffect, useState } from 'react';
import logan from '../../public/img/creators/logan-2.png'
import trash from '../../public/img/icons/trash.svg';
import { useRouter } from 'next/router';
import {
  AVERAGE_MONTHLY_VIEWS,
  AVERAGE_VIDEO_DURATION,
  ONBOARDING_STAGE_1,
  ONBOARDING_STAGE_4,
  onBoardingRecommends,
  onBoardingRegions,
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
} from '../../pages/api/firebase';
import axios from 'axios';
import { UserContext } from '../../store/user-profile';
import CustomSelectInput from '../FormComponents/CustomSelectInput';
import Button from '../UI/Button';
import OnBoardingAccounts from '../sections/reused/OnBoardingAccounts';
import Cookies from 'js-cookie';
import { usage } from 'browserslist';
import ComingSoon from '../UI/ComingSoon';
import NumberInput from '../UI/NumberInput';

// Onboarding stage 1
export const OnboardingStep1 = () => {
  const { userInfo } = useContext(UserContext);

  const router = useRouter();

  const [userData, setUserData] = useState({
    role: '',
    hasSubmitted: false,
    isLoading: false,
  });

   
  const handleSubmit = async () => {
    setUserData({ ...userData, hasSubmitted: true });
    if (!userData.role) return;
    setUserData({ ...userData, isLoading: true });
    try {
      await updateAviewUsage(userData.role, Cookies.get('uid'));
      router.push('/onboarding?stage=2');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="m-auto w-[min(1000px,90%)]">
      <h2 className="text-3xl md:text-center md:text-4xl">
        How are you planning to use Aview?
      </h2>
      <p className="mt-4 mb-8 text-lg md:text-center md:text-[19px] text-white/90">
        We&#8217;ll streamline your setup experience accordingly.
      </p>
      <div className="flex flex-col items-stretch justify-center gap-4 md:flex-row md:gap-0">
        {ONBOARDING_STAGE_1.map((option, index) => { 
         return (
          <>
          {
            option.desc === 'Coming Soon' ? 
            <ComingSoon stage={1}>
              <Shadow
                 classes="md:w-[300px] md:h-[390px] w-full mr-s4 cursor-pointer"
              >
               <Border borderRadius="2xl" classes="h-full w-full">
                  <div
                    className={`h-full rounded-2xl bg-black pt-s9 text-center`}
                    >
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={172}
                      height={172}
                    />
                   <h3 className="text-xl md:text-2xl mt-7 font-bold">{option.title}</h3>
                  </div>
                </Border>
              </Shadow>
            </ComingSoon>
            : 
            <Shadow
              classes="md:w-[300px] md:h-[390px] w-full mr-s4 cursor-pointer"
            >
              <Border borderRadius="2xl" classes="h-full w-full">
                  <div
                    className={`transition-300 h-full rounded-2xl bg-black p-s2 text-center ${
                      userData.role === option.data && 'gradient-1'
                    }`}
                    onClick={() => setUserData({ ...userData, role: option.data })}
                   >
                    <Image
                      src={option.image}
                      alt={option.title}
                      width={172}
                      height={172}
                    />
                   <div className='md:mt-7 mt-3 flex flex-col md:h-[127px] h-full items-center justify-around'>
                    <h3 className="text-xl md:text-2xl font-bold">{option.title}</h3>
                    <p className="mt-s2 text-lg md:text-xl text-center">{option.desc}</p>
                   </div>
                  </div>
                </Border>
              </Shadow>
          }
          </>
         )
        }
          //<Options key={`option-${index}`} {...option}/>
        )}
      </div>
      <div className="m-auto mt-s4 w-[min(360px,90%)]">
        <OnboardingButton
          disabled={!userData.role}
          onClick={handleSubmit}
          isLoading={userData.isLoading}
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
    console.log(payload)
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
               placeholder='Your Response' 
               bgColor='black' 
               textColor="white/80"
               name='monthlyView' 
               label="How many average monthly views?"
               isValid={payload.monthlyView}
               hasSubmitted={sideEffects.hasSubmitted}
               value={payload.monthlyView}
               onChange={(e) =>
                setPayload({ ...payload, [e.target.name]: e.target.value })
              }
            />
            <NumberInput 
               placeholder='Your Response' 
               bgColor='black' 
               textColor="white/80" 
               name='totalFollowers'
               label="Total followers across all socials? (approx)"
               isValid={payload.totalFollowers}
               hasSubmitted={sideEffects.hasSubmitted}
               value={payload.totalFollowers} 
               onChange={(e) =>
                setPayload({ ...payload, [e.target.name]: e.target.value })
               }
            />
            <NumberInput 
               placeholder='Your Response' 
               bgColor='black' 
               textColor="white/80"
               name='averageVideoDuration' 
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
        <div className="m-auto w-[min(360px,90%)] mt-10">
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
      await updateRequiredServices(usage, Cookies.get('uid'));
      router.push('/onboarding?stage=4');
    } catch (error) {
      console.log(error);
    }
  };

  const Option = ({ title, content }) => {  
  return (
    <>
     {
      content === 'Coming soon!' ? 
      <ComingSoon>
       <div className={`h-full rounded-2xl overlay-dark p-s3 md:p-s4`}>
        <p className={`text-xl font-bold md:text-2xl text-white/60`}>{title}</p>
        <p className="mt-s2 text-lg md:text-xl text-white/60">{content}</p>
       </div> 
      </ComingSoon>
      : 
      <Shadow>
       <div
        className={`${
          usage.includes(title) ? 'gradient-1' : `gradient-dark` }
        } h-full cursor-pointer rounded-2xl bg-black p-s3 md:p-s4 `}
        onClick={() => handleSelect(title)}
        >
        <p className="text-xl font-bold md:text-2xl">{title}</p>
        <p className="mt-s2 text-lg md:text-xl">{content}</p>
       </div>
      </Shadow>
      } 
     </>
  )};
  

  return (
    <div className="m-auto w-[min(800px,90%)]">
      <h2 className="text-5xl font-bold md:text-center md:text-6xl">
        How do you plan to use Aview?
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl">
        Select all that apply.
      </p>
      <div className="m-auto grid grid-cols-1 grid-rows-1 gap-8">
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
        <a className="m-auto block rounded-full border-2 border-solid border-white p-3 text-center text-lg w-[min(360px,90%)]">
          Skip
        </a>
      </Link>
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
        Cookies.get('uid'),
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
      await getUserProfile(Cookies.get('uid'), (resp) => setUserData(resp));
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
        Cookies.get('uid')
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
      <h2 className="text-center text-3xl font-bold md:text-6xl">
        Connect your accounts
      </h2>
      <p className="mx-auto mt-s2 mb-s4 w-[min(610px,100%)] text-center text-lg md:text-xl">
        Connect your socials to get started!
      </p>
      <div className="m-auto w-[min(360px,80%)]">
        <OnBoardingAccounts
          classes={`${
            userData?.ig_access_token && 'instagram'
          } block w-full rounded-full border-2 p-s1.5 text-center`}
          clickEvent={linkInstagramAccount}
          account="Instagram"
        />
        <OnBoardingAccounts
          classes={`block w-full rounded-full border-2 p-s1.5 text-center ${
            userData?.facebook && 'bg-[#0054ff]'
          }`}
          account="Facebook"
        />
        <OnBoardingAccounts
          classes={`block w-full rounded-full border-2 p-s1.5 text-center ${
            userData?.tiktok && 'bg-[#000000]'
          }`}
          account="TikTok"
        />
        <OnBoardingAccounts
          classes={`w-full rounded-full border-2 p-s1.5 text-center ${
            userData?.youtubeChannelId && 'bg-[#ff0000]'
          }`}
          clickEvent={linkYoutubeAccount}
          account="YouTube"
          isLoading={isLoading.youtube}
        />
      </div>
      <div className="mx-auto mt-s4 w-[min(360px,80%)]">
        <OnboardingButton
          theme="dark"
          isLoading={isLoading.continue}
          onClick={() => router.push('/onboarding?stage=5')}
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
  // const [usage,setUsage] = useState([]);
  // const [data, setData] = useState({
  //   region: '',
  //   hasSubmitted: false,
  //   isLoading: false,
  // });

  // const handleSelect = (option) => {
  //   const newArray = [...usage];
  //   if (newArray.includes(option)) {
  //     newArray.splice(newArray.indexOf(option), 1);
  //     setUsage(newArray);
  //   } else {
  //     newArray.push(option);
  //     setUsage(newArray);
  //   }
  // };

  // const handleSubmit = async () => {
  //   try {
  //     setData({ ...data, hasSubmitted: true });
  //     if (usage.length < 1) return;
  //     setData({ ...data, isLoading: true });
  //     await updateRequiredServices(usage, Cookies.get('uid'));
  //   } catch (error) {
    //     console.log(error);
    //   }
        router.push('/onboarding?stage=6');
  // };

  return (
    <div className='w-[90%] m-auto'>
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Select by regions of the world
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl md:w-2/5 mx-auto ">
        Select region based on your location. So we can suggest which languages you should translate for.<span className='underline ml-1 hover:cursor-pointer'>why?</span>
      </p>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-x-12 gap-y-6">
        {onBoardingRegions.map((item,index) => (
          <div key={`option-${index}`} onClick={()=>handleSelect(item.title)}>
          <div className={`flex flex-col`}>
           <h2 className='font-bold text-3xl mb-4 ml-2'>{item.title}</h2>
           <div className={`md:w-[283px] md:h-[332px] w-full cursor-pointer rounded-2xl h-full p-s1 text-center ${ usage.includes(item.title) ? 'gradient-1' : 'gradient-dark'}`}>
            <Image
              src={item.image}
              alt={item.title}
              width={235}
              height={303}
            />
          </div>
         <div className='flex flex-col'>
          <h2 className='font-bold text-3xl ml-2 my-6'>Languages</h2>
          <div className={`md:w-[283px] md:h-[247px] w-full cursor-pointer rounded-2xl p-s3 h-full items-start flex flex-col gap-x-4 gap-y-5 ${ usage.includes(item.title) ? 'gradient-1' : 'gradient-dark'}`}>
            {
             item.data.map((dataItem,index)=>(
              <div className='flex flex-row justify-center items-center' key={index}>
              <Image 
                src={dataItem.image} 
                alt={dataItem.languageName}
                width={18}
                height={18}
                />
               <div className='block items-center'><p className='ml-2 font-medium text-lg'>{dataItem.languageName}</p>
               </div> 
            </div>
            ))}
           </div>
          </div>
        </div>
        </div>
        ))}
      </div>
      {data.hasSubmitted && (
        <p className="my-s3 text-center text-xl">
          Please select an option from above to move to next step.
        </p>
      )}
      <div className="m-auto w-[min(360px,90%)] mt-12">
          <OnboardingButton
            onClick={handleSubmit}
            isLoading=''
            theme="dark"
          >
            Proceed
          </OnboardingButton>
       </div>
    </div>
  )
}

// Onboarding stage 6
export const OnboardingStep6 = () => {
 const router = useRouter();

 const handleSubmit = async () => {
  router.push('/onboarding?stage=7');
 };

 return (
  <div className='w-[90%] m-auto'>
      <h2 className="text-4xl font-bold md:text-center md:text-6xl">
        Received recommended languages
      </h2>
      <p className="mt-s2 mb-s4 text-lg md:text-center md:text-xl md:w-2/5 md:mx-auto">
        We recommend you translate for these languages. Feel free to edit the list as you please!
      </p>
      <div className='grid md:grid-cols-3 gap-2 md:w-[1112px] w-full mx-auto'>
         {
          onBoardingRecommends.map((recommendationItem,index)=>(
            <div className='w-[360px] h-[61px] flex flex-row p-s1.5 justify-between gradient-dark' key={index}>
              <div className='flex flex-row justify-between'>
                <Image 
                  src={logan}
                  alt='profile-image'
                  height={40}
                  width={40}
                />
                <div className='flex flex-col ml-3'>
                   <h2 className='text-lg'>Logan Paul {recommendationItem.language}</h2>
                   <p className='text-sm'>Youtube</p>  
                </div>
              </div>
               <Image 
                 src={trash}
                 alt='trash'
                 width={24}
                 height={24}
                />
            </div>
          ))
         }
      </div>
      <div className='flex flex-col gap-y-4 mt-8'>
       <div className="m-auto w-[min(360px,90%)]">
          <OnboardingButton
            onClick={handleSubmit}
            isLoading=''
            theme="dark"
          >
            Continue
          </OnboardingButton>
       </div>
       <div className="m-auto w-[min(360px,90%)]">
          <Button
            type="tertiary"
            fullWidth={true}
          >
            Add another language
          </Button>
       </div>
      </div>
      
   </div>   
 )
}

// Onboarding success page
export const OnboardingSuccess = () => {
  const router = useRouter();
  return (
    <div className="m-auto w-[90%]">
      <h2 className="text-center text-3xl font-bold md:text-6xl">Success!</h2>
      <p className="mx-auto mt-s2 mb-s4 w-[min(430px,100%)] text-center text-lg md:text-xl">
        You&apos;ve completed the onboarding process. Now let&apos;s take a look
        at your dashboard.
      </p>
      <div className="mx-auto mt-s4 w-[min(360px,80%)]">
        <OnboardingButton
          onClick={() => router.push('/dashboard')}
          theme="dark"
        >
          Proceed to dashboard
        </OnboardingButton>
      </div>
    </div>
  );
};

