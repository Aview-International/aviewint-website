import React,{ useState } from 'react'
import CustomSelectInput from '../../FormComponents/CustomSelectInput';
import FormInput from '../../FormComponents/FormInput';
import CheckBox from '../../FormComponents/CheckBox';
import OnboardingButton from '../../Onboarding/button';
import { 
    AVERAGE_MONTHLY_VIEWS,
    AVERAGE_SOCIAL_FOLLOWERS,
    AVERAGE_VIDEO_DURATION,
    LANGUAGES 
  } from '../../../constants/constants';

const AboutCreator = () => {
    const [payload, setPayload] = useState({
        monthlyView: '',
        totalFollowers: '',
        averageVideoDuration: '',
        primaryLanguage: '',
        instagramURL: '',
        twitterURL: '',
        tiktokURL: '',
        youtubeURL: '',
        isChecked: false,
    });
    const [sideEffects, setSideEffects] = useState({
        hasSubmitted: false,
        isLoading: false,
    });
      
    const isFormValid = () =>
     !!payload.monthlyView &&
     !!payload.totalFollowers &&
     !!payload.averageVideoDuration &&
     !!payload.primaryLanguage&&
     !!payload.youtubeURL;

    const handleSubmit = async () => {
        setSideEffects({ ...sideEffects, hasSubmitted: true });
        if (!isFormValid()) return;
        setSideEffects({ ...sideEffects, isLoading: true });
        try {
         // router.push('/dashboard');
        } catch (error) {
          console.log(error);
        }
    };
    
    
    return (
      <>
        <div className="flex flex-col md:ml-s10">
        <p className="text-lg md:text-xl font-semibold text-white mt-s8 md:mt-0">Tell us about yourself as a creator.</p>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 text-white/90 md:gap-x-8 mt-6 mb-1 max-w-[540px]">
            <CustomSelectInput
              hideCheckmark
              text="Average monthly views?"
              options={AVERAGE_MONTHLY_VIEWS}
              hasSubmitted={sideEffects.hasSubmitted}
              onChange={(option) =>
                setPayload({ ...payload, monthlyView: option })
              }
              value={payload.monthlyView}
            />
            <CustomSelectInput
              hideCheckmark
              text="Total followers?"
              options={AVERAGE_SOCIAL_FOLLOWERS}
              hasSubmitted={sideEffects.hasSubmitted}
              onChange={(option) =>
                setPayload({ ...payload, totalFollowers: option })
              }
              value={payload.totalFollowers}
            />
            <CustomSelectInput
              hideCheckmark
              text="Average video duration?"
              options={AVERAGE_VIDEO_DURATION}
              hasSubmitted={sideEffects.hasSubmitted}
              onChange={(option) =>
                setPayload({ ...payload, averageVideoDuration: option })
              }
              value={payload.averageVideoDuration}
            />
            <CustomSelectInput
              hideCheckmark
              text="Primary Language?"
              options={LANGUAGES}
              hasSubmitted={sideEffects.hasSubmitted}
              onChange={(option) =>
                setPayload({ ...payload, primaryLanguage: option })
              }
              value={payload.primaryLanguage}
            />
            <FormInput 
              _id="istagram_url" 
              label="Instagram URL"
              onChange={(option) =>
                setPayload({ ...payload, instagramURL: option.target.value })
              }
              placeholder="URL response" 
              value={payload.instagramURL} 
              name="instagram" 
              extraClasses="mb-s4" 
              labelClasses="mb-s1"
              hideCheckmark={true} 
            />
            <FormInput 
              _id="twitter_url" 
              label="Twitter URL"
              onChange={(option) =>
                setPayload({ ...payload, twitterURL: option.target.value })
              }
              placeholder="URL response" 
              value={payload.twitter} 
              name="twitter" 
              extraClasses="mb-s4" 
              labelClasses="mb-s1"
              hideCheckmark={true} 
            />
            <FormInput 
              _id="tiktok_url" 
              label="TikTok URL" 
              onChange={(option) =>
                setPayload({ ...payload, tiktokURL: option.target.value})
              }
              placeholder="URL response" 
              value={payload.tiktokURL}
              name="tiktok" 
              extraClasses="mb-s4" 
              labelClasses="mb-s1"
              hideCheckmark={true} 
            />
            <FormInput 
              _id="youtube_url" 
              label="YouTube URL" 
              onChange={(option) =>
                setPayload({ ...payload, youtubeURL: option.target.value })
              }
              placeholder="URL response" 
              value={payload.youtubeURL}
              name="youtube" 
              extraClasses="mb-s4" 
              labelClasses="mb-s1" 
              hideCheckmark={true} 
              isImportant={true}
            />
        </div>
        <div>
         <CheckBox 
           label="I want to stay up to date with news and offers from Aview." 
           onChange={(e)=> setPayload(!payload.isChecked)} 
           name="checkbox" 
           labelClasses="text-sm"
          />
         <div className="md:m-auto mt-s4 md:mt-s2 w-[min(180px,90%)]">
          <OnboardingButton
             onClick={handleSubmit}
             isLoading={sideEffects.isLoading}
             theme="light"
            >
            Submit
          </OnboardingButton>
         </div>
        </div>
        </div>
     </>
 )
}

export default AboutCreator
