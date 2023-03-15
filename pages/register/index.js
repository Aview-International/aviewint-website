import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import Border from '../../components/UI/Border';
import Shadow from '../../components/UI/Shadow';
import { createNewUser, signInWithGoogle } from '../api/firebase';
import aviewLogo from '../../public/img/aview/logo.svg';
import Google from '../../public/img/icons/google.svg';
import Facebook from '../../public/img/icons/facebook-logo-onboarding.svg';
import PageTitle from '../../components/SEO/PageTitle';
import Loader from '../../components/UI/loader';
import { UserContext } from '../../store/user-profile';

const Register = () => {
  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState({
    google: false,
    facebook: false,
  });

  const updateDatabase = async (_tokenResponse) => {
    setUserInfo({
      ...userInfo,
      email: _tokenResponse.email,
      firstName: _tokenResponse.firstName,
      lastName: _tokenResponse.lastName,
      picture: _tokenResponse.photoUrl,
    });
    localStorage.setItem('token', _tokenResponse.idToken);
    localStorage.setItem('uid', _tokenResponse.localId);
    await createNewUser(
      _tokenResponse.localId,
      _tokenResponse.firstName,
      _tokenResponse.lastName,
      _tokenResponse.photoUrl,
      _tokenResponse?.email
    );
    router.push('/onboarding?stage=2');
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
      <div className="">
        <div className="flex items-center py-6 pl-s14">
          <Image
            src={aviewLogo}
            alt="AVIEW International logo"
            width={40}
            height={40}
          />
        </div>
        <div className="min-w-2/4 mx-auto mb-s12 mt-s6 text-white  md:mt-s12">
          <div className=" fixed w-[min(380px,90%)] top-2/4 left-2/4  -translate-x-2/4 -translate-y-2/4">
            <h2 className="mb-8 text-center text-7xl md:text-8xl font-bold">Sign Up</h2>
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
                        <Image src={Google} alt="Google" width={20} height={20} />
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
                        <Image src={Facebook} alt="Facebook" width={20} height={20} />
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
    </>
  );
};

export default Register;
