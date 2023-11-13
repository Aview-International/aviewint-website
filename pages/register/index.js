import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import { createNewUser, signInWithGoogle } from '../api/firebase';
import aviewLogo from '../../public/img/aview/logo.svg';
import Google from '../../public/img/icons/google.svg';
import PageTitle from '../../components/SEO/PageTitle';
import Cookies from 'js-cookie';
import { setUser } from '../../store/reducers/user.reducer';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import FormInput from '../../components/FormComponents/FormInput';
import OnboardingButton from '../../components/Onboarding/button';
import { emailValidator } from '../../utils/regex';
import ErrorHandler from '../../utils/errorHandler';
import {
  igAccountTest,
  registerUser,
  singleSignOnRegister,
} from '../../services/apis';
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import ButtonLoader from '../../public/loaders/ButtonLoader';

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState({
    google: false,
    email: false,
    hasSubmitted: false,
  });

  const updateDatabase = async (_tokenResponse) => {
    dispatch(
      setUser({
        email: _tokenResponse.email,
        firstName: _tokenResponse.firstName,
        lastName: _tokenResponse.lastName,
        picture: _tokenResponse.photoUrl,
        token: _tokenResponse.idToken,
        uid: _tokenResponse.localId,
      })
    );

    Cookies.set('token', _tokenResponse.idToken);
    Cookies.set('uid', _tokenResponse.localId);
    await createNewUser(
      _tokenResponse.localId,
      _tokenResponse.firstName,
      _tokenResponse.lastName,
      _tokenResponse.photoUrl,
      _tokenResponse?.email
    );
    router.push('/onboarding?stage=1');
  };

  useEffect(() => {
    const { query } = router;
    if (query.apiKey && query.oobCode && query.mode === 'signIn')
      handleSSOWithCode();
  }, [router.query]);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { _tokenResponse } = await signInWithGoogle();
      updateDatabase(_tokenResponse);
    } catch (error) {
      ErrorHandler(null, 'Something went wrong, please try again');
    }
  };

  const handleIgTestLogin = async () => {
    try {
      const res = await igAccountTest();
      Cookies.set('token', res.data.idToken, { expires: 3 });
      Cookies.set('uid', res.data.uid, { expires: 3 });
      router.push('/onboarding?stage=1');
    } catch (error) {
      ErrorHandler(error);
    }
  };

  const handleSSOWithCode = () => {
    const auth = getAuth();
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email)
        email = window.prompt('Please provide your email for confirmation');

      signInWithEmailLink(auth, email, window.location.href)
        .then(async (result) => {
          window.localStorage.removeItem('emailForSignIn');

          Cookies.set('token', result._tokenResponse.idToken, { expires: 3 });
          Cookies.set('uid', result._tokenResponse.localId, { expires: 3 });
          await registerUser(
            result._tokenResponse.localId,
            result._tokenResponse.email
          );
          router.push('/onboarding?stage=profile');
        })
        .catch((error) => {
          toast.error(
            'Register link has expired or invalid email, please try again'
          );
          return;
        });
    }
  };

  const handleSSO = async (e) => {
    e.preventDefault();
    if (email === 'instagramverification@aviewint.com') {
      handleIgTestLogin();
    } else {
      try {
        setIsLoading({ ...isLoading, email: true });
        localStorage.setItem('emailForSignIn', email);
        await singleSignOnRegister(email, window.location.origin);
        setIsLoading({ ...isLoading, hasSubmitted: true });
      } catch (error) {
        setIsLoading({ ...isLoading, hasSubmitted: false });
        ErrorHandler(error);
      }
    }
  };

  const { account } = router.query;

  return (
    <>
      <PageTitle title="Register - Aview International" />
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
                    <OnboardingButton theme="light" isLoading={isLoading.email}>
                      Continue
                    </OnboardingButton>
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
