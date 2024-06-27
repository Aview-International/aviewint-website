import React, { useState, useEffect } from 'react';

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
    <div className="fixed bottom-0 w-full bg-gray-800 text-white text-center p-8 flex justify-center items-center z-50">
      <p className="mr-4">
        By using this website, you agree to our{' '}
        <a href="/terms-of-service" className="underline text-blue-300">use of cookies</a>. We use cookies to give you a great browsing experience.
      </p>
      <button
        onClick={handleClose}
        className="bg-gradient-to-r text-white py-2 px-4 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
};

export default CookieConsent;
