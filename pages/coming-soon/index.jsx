import Image from 'next/image';
import { useState } from 'react';
import FormInput from '../../components/FormComponents/FormInput';
import Header from '../../components/navigation/Header';
import Button from '../../components/UI/Button';
import easterEgg from '../../public/img/graphics/easter-egg.png';

export default function ComingSoon() {
  const [email, setEmail] = useState('');

  function emailChangeHandler(event) {
    setEmail(event.target.value);
  }

  return (
    <>
      <Header />
      <div className="m-horizontal relative mt-s6 md:text-center lg:mt-s10">
        <h1 className="title mb-s2">
          Something big is happening.{' '}
          <span className="gradient-text gradient-2">Coming Soon.</span>
        </h1>
        <p className="body mb-s4">
          In the meantime, sign up for our newsletter to receive updates.
        </p>
        <div className="mx-auto flex flex-col gap-s5 lg:max-w-[580px] lg:flex-row lg:items-center">
          <FormInput
            placeholder="Your Email Address"
            onChange={emailChangeHandler}
            value={email}
            noBottomMargin={true}
          />
          <div className="mt-s1">
            <Button type="primary">Sign Up</Button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 -z-10">
        <Image src={easterEgg} alt="easter egg graphic" />
      </div>
    </>
  );
}
