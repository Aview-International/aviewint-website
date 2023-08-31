import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import Google from '../../public/img/icons/google.svg';
import Facebook from '../../public/img/icons/facebook-logo-onboarding.svg';
import PageTitle from '../../components/SEO/PageTitle';
import aviewLogo from '../../public/img/aview/logo.svg';
import { checkUserEmail, signInWithGoogle } from '../api/firebase';
import ButtonLoader from '../../public/loaders/ButtonLoader';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/user.reducer';

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    const { _tokenResponse } = await signInWithGoogle();
    const res = await checkUserEmail(_tokenResponse.localId);
    if (!res) router.push('/register?account=false');
    else {
      Cookies.set('token', _tokenResponse.idToken, { expires: 3 });
      Cookies.set('uid', _tokenResponse.localId, { expires: 3 });
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
      const { rdr } = router.query;
      if (rdr) {
        const redirectUrl = Cookies.get('redirectUrl');
        const path = new URL(redirectUrl);
        router.push(path.pathname);
        Cookies.remove('redirectUrl');
      }
    }
  };

  return (
    <>
      <PageTitle title="Login - Aview International" />
      <div>
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
            <p className="my-s3 text-center text-lg md:text-xl">
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
                  onClick={handleSubmit}
                >
                  {isLoading ? (
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
            <Shadow classes="w-full">
              <Border borderRadius="full" classes="w-full">
                <button className="align-center flex w-full justify-center rounded-full bg-black p-2 text-lg text-white md:p-3">
                  <span className="flex items-center justify-center pr-s1">
                    <Image
                      src={Facebook}
                      alt="Facebook"
                      width={20}
                      height={20}
                    />
                  </span>
                  Continue with Facebook
                </button>
              </Border>
            </Shadow>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
