import React, { useState } from 'react';
import Step3 from '../../../public/img/waitlist/Step3.svg';
import HoverShowImageOrText from '../../layout/HoverShowImageOrText';
import StaggeredTextAndImage from '../../layout/StaggeredTextAndImage';
import {
  WAITLIST_HOVER_ITEMS,
  WAITLIST_STAGGERED_ITEMS,
} from '../../../constants/constants';
import FormInput from '../../FormComponents/FormInput';
import Button from '../../UI/Button';
import WaitlistImages from './WaitlistImages';
import AboutCreator from './AboutCreator';

const Waitlist = () => {
  const [userEmail, setUserEmail] = useState('');
  const [sideEffects, setSideEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

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
      <section className="mx-auto my-10 flex h-full w-[90%] flex-col gap-y-24 md:my-28 md:gap-y-40">
        <div className="flex flex-col justify-between md:mx-s6 md:flex-row">
          <div className="mx-auto flex flex-col justify-start gap-y-4 text-white md:gap-y-6">
            <h3 className="text-5xl font-bold md:text-7xl">
              Global Content{' '}
              <span className="md:block">Monetization: Reach</span>{' '}
              <span className="md:block">New Markets with Aview</span>
            </h3>
            <p className="md:mb-8 md:text-lg">
              Break language barriers, grow your fan base, and monetize
              <span className="md:block">
                internationally. Join our exclusive waitlist today!
              </span>
            </p>
            <WaitlistImages image={Step3} width="540" height="385" />
          </div>
          <AboutCreator />
        </div>
        <div className="flex flex-col items-center justify-center text-white">
          <h3 className="mb-10 text-center text-5xl font-bold md:text-6xl">
            Empower your global react with Aview:
            <span className="md:block">
              Your One-Stop Solution for International Success
            </span>
          </h3>
          <HoverShowImageOrText
            items={WAITLIST_HOVER_ITEMS}
            borderStyle="true"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-y-4 text-white">
          <h3 className="mb-5 text-4xl font-bold md:text-6xl">
            Globalize Your Content & Monetize Across Borders:
            <span className="md:block">Aview&#39;s One-Click Solution</span>
          </h3>
          <p className="text-sm md:text-center md:text-base">
            &#8220;Transforming your content for international success is just a
            click away. With Aview, you&#39;re not
            <span className="md:block">
              just translating; you&#39;re unlocking new markets, engaging
              global audiences, and creating lucrative
            </span>
            <span className="md:block">
              opportunities—all in one platform.&#8221;
            </span>
          </p>
          <StaggeredTextAndImage
            items={WAITLIST_STAGGERED_ITEMS}
            staggeredStyle="true"
          />
        </div>
        <div className="gradient-2 h-full w-full rounded-xl p-s1.5 py-s3 md:p-0 md:py-s6">
          <p className="mb-4 p-2 text-center text-3xl font-bold text-white md:p-0 md:text-4xl">
            Want to go global? Join the{' '}
            <span className="md:block">waitlist now to reserve a spot!</span>
          </p>
          <div className="mx-auto flex h-full w-full flex-col items-center justify-center md:w-2/4 md:flex-row md:gap-y-4 md:gap-x-2">
            <FormInput
              _id="waitlist_input"
              onChange={(option) => setUserEmail(option.target.value)}
              placeholder="Enter your email here"
              value={userEmail}
              name="waitlist_input"
              hideCheckmark={true}
            />
            <div>
              <Button type="tertiary" purpose="submit" onClick={handleSubmit}>
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Waitlist;
