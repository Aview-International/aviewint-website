import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import aviewLogo from '../../public/img/aview/logo.svg';
import Google from '../../public/img/icons/google.svg';
import Cookies from 'js-cookie';
import Link from 'next/link';
import FormInput from '../../components/FormComponents/FormInput';
import GlobalButton from '../../components/Onboarding/button';
import { emailValidator } from '../../utils/regex';
import ErrorHandler from '../../utils/errorHandler';
import { singleSignOnRegister, testAccountLogin } from '../../services/apis';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth, createNewUser, signInWithGoogle } from '../../services/firebase';
import ButtonLoader from '../../components/UI/loader';
import SEO from '../../components/SEO/SEO';

const Register = () => {
  const testMail = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState({
    google: false,
    email: false,
    hasSubmitted: false,
  });

  useEffect(() => {
    const { query } = router;
    if (query.apiKey && query.oobCode && query.mode === 'signIn')
      handleSSOWithCode();
  }, [router.query]);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading({ ...isLoading, google: true });
      const { _tokenResponse } = await signInWithGoogle();
      handleRedirect(_tokenResponse);
    } catch (error) {
      setIsLoading({ ...isLoading, google: false });
      ErrorHandler(null, 'Something went wrong, please try again');
    }
  };

  const handleRedirect = async (_tokenResponse, emailForSignIn) => {
    Cookies.set('session', _tokenResponse.idToken);
    Cookies.set('uid', _tokenResponse.localId);
    if (_tokenResponse.isNewUser) {
      await createNewUser(
        _tokenResponse.localId,
        _tokenResponse?.firstName,
        _tokenResponse?.lastName,
        _tokenResponse?.photoUrl,
        _tokenResponse?.email
      );
      emailForSignIn
        ? router.push('/onboarding?stage=profile')
        : router.push('/onboarding?stage=1');
    } else {
      router.push('/dashboard'); // login if user already exists
    }
  };

  const handleSSOWithCode = () => {
    try {
      setIsLoading({ ...isLoading, email: true });
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email)
          email = window.prompt('Please provide your email for confirmation');

        signInWithEmailLink(auth, email, window.location.href)
          .then(async (result) => {
            window.localStorage.removeItem('emailForSignIn');
            handleRedirect(result._tokenResponse, true);
          })
          .catch((error) => {
            toast.error(
              'Register link has expired or invalid email, please try again'
            );
            return;
          });
      }
    } catch (error) {
      setIsLoading({ ...isLoading, email: false });
    }
  };

  const handleSSO = async (e) => {
    e.preventDefault();
    setIsLoading({ ...isLoading, email: true });
    if (email.trim() === testMail) return testSignIn();
    try {
      localStorage.setItem('emailForSignIn', email);
      await singleSignOnRegister(email, window.location.origin);
      setIsLoading({ ...isLoading, hasSubmitted: true });
    } catch (error) {
      setIsLoading({ ...isLoading, hasSubmitted: false, email: false });
      ErrorHandler(error);
    }
  };

  const { account } = router.query;

  const testSignIn = async () => {
    try {
      const data = await testAccountLogin();
      const user = await signInWithCustomToken(auth, data.idToken);
      Cookies.set('uid', data.uid);
      Cookies.set('session', user.user.accessToken);
      router.push('/onboarding?stage=1');
    } catch (error) {
      ErrorHandler(error.message);
    }
  };

  return (
    <>
      <SEO
        title="Video Translation & Subtitling - AVIEW"
        description="Create an account now and start global distribution"
      />
      <div>
        <div className="flex items-center py-6 pl-s14">
          <Image
            src={aviewLogo}
            alt="AVIEW International logo"
            width={40}
            height={40}
          />
        </div>
        <div className="min-w-2/4 mx-auto mb-s12 mt-s6 text-white  md:mt-s12">
          <div className="fixed left-2/4 top-2/4 w-[min(380px,90%)]  -translate-x-2/4 -translate-y-2/4">
            <div data-aos="zoom-in-up">
              <h2 className="text-center text-7xl font-bold md:text-8xl">
                Sign Up
              </h2>
              {account ? (
                <p className="mb-s3 text-center text-lg">
                  You don&apos;t have an account yet, begin here
                </p>
              ) : (
                <p className="my-s3 text-center text-lg md:text-xl">
                  Already have an account?
                  <br /> Login{' '}
                  <Link href="/login">
                    <a className="underline">here</a>
                  </Link>
                </p>
              )}
              <Shadow classes="w-full mb-4">
                <Border borderRadius="full" classes="w-full">
                  <button
                    className="flex w-full items-center justify-center rounded-full bg-black p-2 text-lg text-white md:p-3 "
                    onClick={handleGoogleSignIn}
                  >
                    {isLoading.google ? (
                      <ButtonLoader />
                    ) : (
                      <>
                        <span className="flex items-center justify-center pr-s1">
                          <Image
                            src={Google}
                            alt="Google"
                            width={20}
                            height={20}
                          />
                        </span>
                        Continue with Google
                      </>
                    )}
                  </button>
                </Border>
              </Shadow>

              <p className="my-s2 text-center">or</p>

              {!isLoading.hasSubmitted ? (
                <form onSubmit={handleSSO}>
                  <FormInput
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isValid={emailValidator(email)}
                    hideCheckmark
                    extraClasses="mb-4"
                    label="Email Address"
                    type="email"
                    name="email"
                  />
                  {emailValidator(email) && (
                    <GlobalButton theme="light" isLoading={isLoading.email}>
                      Continue
                    </GlobalButton>
                  )}
                </form>
              ) : (
                <p className="text-center text-xl">
                  An email is on the way 🚀
                  <br />
                  Check your inbox to proceed
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
