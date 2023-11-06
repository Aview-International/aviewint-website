import React, { useState } from 'react';
import CustomSelectInput from '../../FormComponents/CustomSelectInput';
import FormInput from '../../FormComponents/FormInput';
import CheckBox from '../../FormComponents/CheckBox';
import OnboardingButton from '../../Onboarding/button';
import {
  AVERAGE_MONTHLY_VIEWS,
  AVERAGE_SOCIAL_FOLLOWERS,
  AVERAGE_VIDEO_DURATION,
} from '../../../constants/constants';
import { toast } from 'react-toastify';
import { joinWaitlist } from '../../../services/apis';
import ErrorHandler from '../../../utils/errorHandler';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const AboutCreator = () => {
  const allLanguages = useSelector((el) => el.aview.allLanguages);
  const router = useRouter();
  const [payload, setPayload] = useState({
    monthlyView: '',
    totalFollowers: '',
    averageVideoDuration: '',
    primaryLanguage: '',
    instagramURL: '',
    twitterURL: '',
    email: '',
    youtubeURL: '',
    addToMarketingList: false,
  });
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

  const isFormValid = () =>
    !!payload.monthlyView &&
    !!payload.totalFollowers &&
    !!payload.averageVideoDuration &&
    !!payload.primaryLanguage &&
    !!payload.youtubeURL;

  const handleSubmit = async () => {
    setSideEffects({ ...sideEffects, hasSubmitted: true });
    if (!isFormValid()) {
      toast.error('Fields with asterisk * are required');
      return;
    }
    setSideEffects({ ...sideEffects, isLoading: true });
    try {
      await joinWaitlist(payload);
      setSideEffects({
        ...sideEffects,
        isLoading: false,
      });
      router.push('/success');
    } catch (error) {
      setSideEffects({ ...sideEffects, isLoading: false });
      ErrorHandler(error);
    }
  };

  const handleChange = (target, value) => {
    setPayload((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  return (
    <>
      <div className="mt-s8 flex flex-col lg:ml-s10">
        <p className="text-lg font-semibold text-white md:text-xl">
          Tell us about yourself as a creator.
        </p>
        <div className="mt-6 mb-1 grid h-full w-full grid-cols-1 items-end text-white/90 md:grid-cols-2 md:gap-x-8 lg:max-w-[540px]">
          <FormInput
            _id="email"
            isImportant={true}
            label="Email Address"
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Email Address"
            value={payload.email}
            name="email"
            extraClasses="mb-s4"
            labelClasses="mb-s1"
            type="email"
            hideCheckmark={true}
          />
          <CustomSelectInput
            hideCheckmark
            text="Average monthly views?"
            options={AVERAGE_MONTHLY_VIEWS}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(option) => handleChange('monthlyView', option)}
            value={payload.monthlyView}
          />
          <CustomSelectInput
            hideCheckmark
            text="Total followers?"
            options={AVERAGE_SOCIAL_FOLLOWERS}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(option) => handleChange('totalFollowers', option)}
            value={payload.totalFollowers}
          />
          <CustomSelectInput
            hideCheckmark
            text="Average video duration?"
            options={AVERAGE_VIDEO_DURATION}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(option) => handleChange('averageVideoDuration', option)}
            value={payload.averageVideoDuration}
          />
          <CustomSelectInput
            hideCheckmark
            text="Primary Language?"
            options={allLanguages}
            hasSubmitted={sideEffects.hasSubmitted}
            onChange={(option) => handleChange('primaryLanguage', option)}
            value={payload.primaryLanguage}
          />
          <FormInput
            _id="istagram_url"
            label="Instagram URL"
            onChange={(e) => handleChange('instagramURL', e.target.value)}
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
            onChange={(e) => handleChange('twitterURL', e.target.value)}
            placeholder="URL response"
            value={payload.twitter}
            name="twitter"
            extraClasses="mb-s4"
            labelClasses="mb-s1"
            hideCheckmark={true}
          />
          <FormInput
            _id="youtube_url"
            label="YouTube URL"
            onChange={(e) => handleChange('youtubeURL', e.target.value)}
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
            onChange={(e) =>
              handleChange('addToMarketingList', e.target.checked)
            }
            name="checkbox"
            labelClasses="text-sm"
          />

          <div className="mt-s4 w-[min(180px,90%)] md:m-auto md:mt-s2">
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
  );
};

export default AboutCreator;
