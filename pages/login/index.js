import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import Google from '../../public/img/icons/google.svg';
import Facebook from '../../public/img/icons/facebook-logo-onboarding.svg';
import { checkUserEmail, signInWithGoogle } from '../api/onboarding';
import { UserContext } from '../../store/user-profile';
import ButtonLoader from '../../public/loaders/ButtonLoader';

const Login = () => {
  const router = useRouter();
  const { user, updateUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const { _tokenResponse } = await signInWithGoogle();
    const res = await checkUserEmail(_tokenResponse.localId);
    if (!res) router.push('/onboarding?stage=1&account=false');
    else {
      localStorage.setItem('token', _tokenResponse.idToken);
      localStorage.setItem('uid', _tokenResponse.localId);
      updateUser({
        ...user,
        email: _tokenResponse.email,
        firstName: _tokenResponse.firstName,
        lastName: _tokenResponse.lastName,
        picture: _tokenResponse.photoUrl,
      });
      router.push('/dashboard');
    }
  };

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
          <Shadow classes="w-full mb-4">
            <Border borderRadius="full" classes="w-full">
              <button
                className="flex w-full items-center justify-center rounded-full bg-black p-2 text-white md:p-3"
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <ButtonLoader />
                ) : (
                  <>
                    <span className="flex items-center justify-center pr-s1">
                      <Image src={Google} alt="Google" />
                    </span>
                    Continue with Google
                  </>
                )}
              </button>
            </Border>
          </Shadow>
          <Shadow classes="w-full">
            <Border borderRadius="full" classes="w-full">
              <button className="align-center flex w-full justify-center rounded-full bg-black p-2 text-white md:p-3">
                <span className="flex items-center justify-center pr-s1">
                  <Image src={Facebook} alt="Facebook" />
                </span>
                Continue with Facebook
              </button>
            </Border>
          </Shadow>
        </div>
      </div>
    </>
  );
};

export default Login;
