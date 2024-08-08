import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import Google from '../../public/img/icons/google.svg';
import aviewLogo from '../../public/img/aview/logo.svg';
import ButtonLoader from '../../components/UI/loader';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/user.reducer';
import FormInput from '../../components/FormComponents/FormInput';
import { emailValidator } from '../../utils/regex';
import GlobalButton from '../../components/Onboarding/button';
import {
  isSignInWithEmailLink,
  signInWithCustomToken,
  signInWithEmailLink,
} from 'firebase/auth';
import { singleSignOnLogin, testAccountLogin } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import { toast } from 'react-toastify';
import {
  signInWithGoogle,
  checkUserEmail,
  auth,
} from '../../services/firebase';
import SEO from '../../components/SEO/SEO';

const Login = () => {
  const testMail = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;
  const router = useRouter();
  const dispatch = useDispatch();
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

  const handleRedirect = async (_tokenResponse) => {
    Cookies.set('uid', _tokenResponse.localId);
    Cookies.set('session', _tokenResponse.idToken);
    dispatch(
      setUser({
        email: _tokenResponse.email,
        firstName: _tokenResponse.firstName,
        lastName: _tokenResponse.lastName,
        picture: _tokenResponse.photoUrl,
        uid: _tokenResponse.localId,
      })
    );
    const prevRoute = Cookies.get('redirectUrl');
    if (prevRoute) {
      Cookies.remove('redirectUrl');
      window.location.href = decodeURIComponent(prevRoute);
    } else window.location.href = '/dashboard';
  };

  const handleLoginWithGoogle = async () => {
    try {
      setIsLoading({ ...isLoading, google: true });
      const { _tokenResponse } = await signInWithGoogle();
      const res = await checkUserEmail(_tokenResponse.localId);
      if (!res) router.push('/register?account=false');
      else handleRedirect(_tokenResponse);
    } catch (error) {
      setIsLoading({ ...isLoading, google: false });
      ErrorHandler(null, 'Something went wrong, please try again');
    }
  };

  const handleSSOWithCode = () => {
    try {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email)
          email = window.prompt('Please provide your email for confirmation');

        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            window.localStorage.removeItem('emailForSignIn');
            handleRedirect(result._tokenResponse);
          })
          .catch((error) => {
            toast.error(
              'Login link has expired or invalid email, please try again'
            );
            return;
          });
      }
    } catch (error) {
      ErrorHandler(null, 'Something went wrong, please try again');
      setIsLoading({ ...isLoading, google: false });
    }
  };

  const handleSSO = async (e) => {
    e.preventDefault();
    setIsLoading({ ...isLoading, email: true });
    if (email.trim() === testMail) return testSignIn();
    try {
      localStorage.setItem('emailForSignIn', email);
      await singleSignOnLogin(email, window.location.origin);
      setIsLoading({ ...isLoading, hasSubmitted: true });
    } catch (error) {
      setIsLoading({ ...isLoading, hasSubmitted: false });
      ErrorHandler(error);
    }
  };

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
        description="Login to resume global distribution"
      />
      <div className="">
        <div className="flex items-center py-6 pl-s14">
          <Image
            src={aviewLogo}
            alt="AVIEW International logo"
            width={40}
            height={40}
          />
        </div>
        <div className="fixed top-2/4 left-2/4 w-[min(400px,90%)] -translate-x-2/4 -translate-y-2/4 text-white">
          <div data-aos="zoom-in-up">
            <h2 className="text-center text-7xl font-bold md:text-8xl">
              Log In
            </h2>
            <p className="my-s3 text-center text-lg">
              Don&apos;t have an account?
              <br /> Get started{' '}
              <Link href="/register">
                <a className="underline">here</a>
              </Link>
            </p>

            <Shadow classes="w-full mb-4">
              <Border borderRadius="full" classes="w-full">
                <button
                  className="flex w-full items-center justify-center rounded-full bg-black p-2 text-lg text-white md:p-3 "
                  onClick={handleLoginWithGoogle}
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

            <p className="my-s2 text-center text-2xl">or</p>

            {!isLoading.hasSubmitted ? (
              <form onSubmit={handleSSO}>
                <FormInput
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isValid={emailValidator(email)}
                  hideCheckmark
                  // extraClasses="mb-4 text-center"
                  label=""
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
    </>
  );
};

export default Login;
