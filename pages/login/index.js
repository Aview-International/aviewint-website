import Link from 'next/link';
import { useState } from 'react';
import FormInput from '../../components/FormComponents/FormInput';
import OnbaordingButton from '../../components/onboarding/button';
import { LOGIN_INPUT } from '../../constants/constants';

const Login = () => {
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });
  const [sideEffects, setSideEffects] = useState({
    isLoading: false,
    hasSubmitted: false,
  });
  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  return (
    <>
      <div className="fixed top-2/4 left-2/4 w-[min(400px,90%)] -translate-x-2/4 -translate-y-2/4 text-white">
        <div data-aos="zoom-in-up">
          <h2 className="text-center text-7xl md:text-8xl">Log In</h2>
          <p className="my-s3 text-center text-lg md:text-xl">
            Don&apos;t have an account?
            <br /> Get started{' '}
            <Link href="/onboarding?stage=1">
              <a className="underline">here</a>
            </Link>
          </p>
          <form>
            {LOGIN_INPUT.map((item, index) => (
              <FormInput
                onChange={handleChange}
                key={`form-input-${index}`}
                {...item}
              />
            ))}
            <OnbaordingButton isLoading={sideEffects.isLoading}>
              Log in
            </OnbaordingButton>
          </form>
          <p className="mt-s3 text-right text-lg md:text-xl">
            <Link href="/onboarding?stage=1">
              <a className="underline">Forgot Password?</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
