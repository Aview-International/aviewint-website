import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import {
  OnboardingStep1,
  OnboardingStep2,
  OnboardingStep3,
  OnboardingStep4,
  OnboardingStep5,
  OnboardingSuccess,
} from '../../components/Onboarding';
import aviewLogo from '../../public/img/aview/logo.svg';
import ArrowBack from '../../public/img/icons/arrow-back.svg';
import { PageTransition } from '../../components/animations';
import { UserData } from '../../store/menu-open-context';
import Head from 'next/head';
import { ProtectedRoutes } from '../../utils/autoLogout';

const Onboarding = () => {
  const { user } = useContext(UserData);
  const router = useRouter();

  useEffect(() => {
    if (window.location.search.split('=')[0].includes('code')) {
      localStorage.setItem(
        'ig_access_code',
        window.location.search.split('=')[1].split('#')[0]
      );
      window.close();
    }
    if (!window.location.search) router.push('/onboarding?stage=1');
  }, []);
  return (
    <>
      <Head>
        <title>Onboarding Process - Aview International</title>
      </Head>
      <div className="">
        <div className="px-5 py-2">
          <Image
            src={aviewLogo}
            alt="AVIEW International logo"
            width={40}
            height={40}
          />
        </div>
        <div
          style={{ width: `${Math.ceil((+router.query.stage * 100) / 6)}%` }}
          className="gradient-1 h-1 transition-all ease-in-out"
        ></div>
        <div className="relative">
          {router.query.stage !== '1' && (
            <button
              className="absolute top-2/4 -left-1/4 z-10 -translate-y-2/4"
              onClick={() => router.back()}
            >
              <Image src={ArrowBack} alt="Go back" width={16} height={32} />
            </button>
          )}
          <div className="min-w-2/4 mx-auto mb-s12 mt-s6 text-white md:mt-s12">
            <Stages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;

const Stages = () => {
  const { query } = useRouter();
  return (
    <>
      {query.stage === '1' && (
        <PageTransition>
          <OnboardingStep1 />
        </PageTransition>
      )}
      {query.stage === '2' && (
        <ProtectedRoutes>
          <PageTransition>
            <OnboardingStep2 />
          </PageTransition>
        </ProtectedRoutes>
      )}
      {query.stage === '3' && (
        <ProtectedRoutes>
          <PageTransition>
            <OnboardingStep3 />
          </PageTransition>
        </ProtectedRoutes>
      )}
      {query.stage === '4' && (
        <ProtectedRoutes>
          <PageTransition>
            <OnboardingStep4 />
          </PageTransition>
        </ProtectedRoutes>
      )}
      {query.stage === '5' && (
        <ProtectedRoutes>
          <PageTransition>
            <OnboardingStep5 />
          </PageTransition>
        </ProtectedRoutes>
      )}
      {query.stage === '6' && (
        <ProtectedRoutes>
          <PageTransition>
            <OnboardingSuccess />
          </PageTransition>
        </ProtectedRoutes>
      )}
    </>
  );
};
