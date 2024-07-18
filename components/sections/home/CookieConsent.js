import React, { useState, useEffect } from 'react';
import OnboardingButton from '../../Onboarding/button';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the consent cookie is set
    const consentGiven = Cookies.get('cookieConsent');
    if (!consentGiven) {
      setShow(true);
    }
  }, []);

  const handleContinue = () => {
    // Set the consent cookie when the user presses continue
    Cookies.set('cookieConsent', 'true', { expires: 7 }); // Expires in a week
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="bg-black fixed bottom-5 w-8/12 left-1/2 -translate-x-1/2 flex justify-center rounded-3xl items-center z-50">
      <div className="text-white bg-white-transparent text-center py-2 rounded-3xl flex justify-center items-center w-full">
        <p className="mr-2">
          By using this website, you agree to our{' '}
          <Link href="/terms-of-service">
            <a className="underline text-blue/80">use of cookies</a>
          </Link>
          . We use cookies to give you a great browsing experience.
        </p>
        <div className="">
          <OnboardingButton
            pb="pb-s0"
            pt="pt-s0"
            theme='light'
            onClick={handleContinue}
            className="text-black px-2 rounded-lg"
          >
            Continue
          </OnboardingButton>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
