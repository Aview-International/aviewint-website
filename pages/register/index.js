import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import { createNewUser, signInWithGoogle } from '../api/firebase';
import aviewLogo from '../../public/img/aview/logo.svg';
import Google from '../../public/img/icons/google.svg';
import Facebook from '../../public/img/icons/facebook-logo-onboarding.svg';
import PageTitle from '../../components/SEO/PageTitle';
import Loader from '../../components/UI/loader';
import Cookies from 'js-cookie';
import { setUser } from '../../store/reducers/user.reducer';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState({
    google: false,
    facebook: false,
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

  const handleGoogle = async (type) => {
    setIsLoading({ ...isLoading, google: true });
    const { _tokenResponse } = await signInWithGoogle();
    updateDatabase(_tokenResponse);
  };

  const handleFacebook = async () => {
    setIsLoading({ ...isLoading, facebook: true });
    const { _tokenResponse } = await signInWithFacebook();
    updateDatabase(_tokenResponse);
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
              <p className="my-s3 text-center text-lg md:text-xl">
                Already have an account?
                <br /> Login{' '}
                <Link href="/login">
                  <a className="underline">here</a>
                </Link>
              </p>
              {account && (
                <p className="mb-s3 text-center text-lg">
                  You don&apos;t have an account yet, begin here
                </p>
              )}
              <Shadow classes="w-full mb-4">
                <Border borderRadius="full" classes="w-full">
                  <button
                    className="flex w-full items-center justify-center rounded-full bg-black p-2 text-lg text-white md:p-3 "
                    onClick={handleGoogle}
                  >
                    {isLoading.google ? (
                      <Loader />
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
              <Shadow classes="w-full">
                <Border borderRadius="full" classes="w-full">
                  <button
                    className="align-center flex w-full justify-center rounded-full bg-black p-2 text-lg text-white md:p-3"
                    onClick={handleFacebook}
                  >
                    {isLoading.facebook ? (
                      <Loader />
                    ) : (
                      <>
                        <span className="flex items-center justify-center pr-s1">
                          <Image
                            src={Facebook}
                            alt="Facebook"
                            width={20}
                            height={20}
                          />
                        </span>
                        Continue with Facebook
                      </>
                    )}
                  </button>
                </Border>
              </Shadow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
