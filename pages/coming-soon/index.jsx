import Image from 'next/image';
import { useState } from 'react';
import Form from '../../components/FormComponents/Form';
import FormInput from '../../components/FormComponents/FormInput';
import Header from '../../components/navigation/Header';
import SEO from '../../components/SEO/SEO';
import GlobalButton from '../../components/UI/GlobalButton';
import comingSoon from '../../public/img/graphics/coming-soon.png';
import { emailValidator } from '../../utils/regex';
import { submitForm } from '../../utils/submit-form';
import ErrorHandler from '../../utils/errorHandler';

export default function ComingSoon() {
  const [mail, setMail] = useState({
    email: '',
    hasSubmitted: false,
  });
  const [showText, setShowText] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setMail({ ...mail, hasSubmitted: true });
      if (!emailValidator(mail.email)) return;
      submitForm('newsletter', { email: mail.email });
      setShowText(true);
    } catch (error) {
      ErrorHandler(error);
    }
  };
  function emailChangeHandler(event) {
    setMail({ ...mail, email: event.target.value });
  }

  return (
    <>
      <SEO title="Coming Soon - AVIEW" />
      <Header />
      <div className="m-horizontal relative mt-s6 md:text-center lg:mt-s10">
        <h1 className="title mb-s2">
          Something big is happening.{' '}
          <span className="gradient-text gradient-2">Coming Soon.</span>
        </h1>
        <p className="body mb-s4">
          In the meantime, sign up for our newsletter to receive updates.
        </p>
        {showText ? (
          <p className="body">
            Submitted successfully, we&apos;ll be in touch 👻
          </p>
        ) : (
          <Form
            name="newsletter"
            submitHandler={handleSubmit}
            className="mx-auto flex flex-col gap-s5 lg:max-w-[580px] lg:flex-row lg:items-center lg:gap-s2"
          >
            <FormInput
              placeholder="Your Email Address"
              onChange={emailChangeHandler}
              value={mail.email}
              hasSubmitted={mail.hasSubmitted}
              isValid={emailValidator(mail.email)}
              name="email"
              bottomMargin="mb-0"
            />
            <div className="mt-s1">
              <GlobalButton type="primary" purpose="submit">
                Sign Up
              </GlobalButton>
            </div>
          </Form>
        )}
      </div>
      <div className="absolute bottom-0 left-1/2 -z-10 w-[250%] -translate-x-1/2 xs:w-[225%] sm:w-[200%] md:w-[125%] lg:w-full 2xl:w-[75%]">
        <Image src={comingSoon} alt="easter egg graphic" />
      </div>
    </>
  );
}
