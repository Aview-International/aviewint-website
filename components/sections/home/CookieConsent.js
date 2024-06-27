import React, { useState, useEffect } from 'react';
import OnboardingButton from '../../Onboarding/button';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <button>
      <div className="bg-black fixed bottom-5 w-8/12 left-1/2 -translate-x-1/2 flex justify-center rounded-3xl items-center z-50">
        <div className="text-white bg-white-transparent text-center py-4 rounded-3xl flex justify-center items-center w-full">
          <p className="mr-2">
            By using this website, you agree to our{' '}
            <a href="/terms-of-service" className="underline text-blue/80">use of cookies</a>. We use cookies to give you a great browsing experience.
          </p>
          <div className="">
            <OnboardingButton
              pb="pb-s0"
              pt="pt-s0"
              theme='light'
              onClick={handleClose}
              className="text-black px-2 rounded-lg"
            >
              Continue
            </OnboardingButton>
          </div>
        </div>
      </div>
    </button>
  );
};

export default CookieConsent;
