import { useState, useEffect } from 'react';
import OnboardingButton from '../../Onboarding/button';
import Cookies from 'js-cookie';
import Link from 'next/link';

const CookieConsent = () => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consentGiven = Cookies.get('cookieConsent');
    if (!consentGiven) {
      setShow(true);
      // Delay setting isVisible to true to allow the component to render first
      setTimeout(() => setIsVisible(true), 100);
    }
  }, []);

  const handleContinue = () => {
    setIsVisible(false);
    // // Wait for the animation to complete before hiding the component
    setTimeout(() => {
      Cookies.set('cookieConsent', 'true');
      setShow(false);
    }, 700); // This should match the transition duration
  };

  if (!show) return null;

  return (
    <div
      className={`
        fixed bottom-5 left-1/2 z-50 w-8/12 max-w-5xl -translate-x-1/2 rounded-3xl bg-black 
        text-center text-white transition-all duration-700 ease-in-out
        ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }
      `}
    >
      <div className="flex items-center justify-center rounded-3xl bg-white-transparent py-2">
        <p className="p-2">
          By using this website, you agree to our{' '}
          <Link href="/terms-of-service">
            <a className="text-blue underline" target="_blank" rel="noreferrer">
              use of cookies.
            </a>
          </Link>{' '}
          We use cookies to give you a great browsing experience.
        </p>
        <div>
          <OnboardingButton
            theme="light"
            onClick={handleContinue}
            className="rounded-lg px-2 text-black"
          >
            Accept
          </OnboardingButton>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
