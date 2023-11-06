import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import aviewLogo from '../../public/img/aview/logo.svg';
import ArrowBack from '../../public/img/icons/arrow-back.svg';
import { PageTransition } from '../../components/animations';
import PageTitle from '../../components/SEO/PageTitle';
import Link from 'next/link';
import OnboardingStep1 from '../../components/Onboarding/step1';
import OnboardingStep2 from '../../components/Onboarding/step2';
import OnboardingStep3 from '../../components/Onboarding/step3';
import OnboardingStep4 from '../../components/Onboarding/step4';
import OnboardingStep5 from '../../components/Onboarding/step5';
import OnboardingSuccess from '../../components/Onboarding/success';
import useUserProfile from '../../hooks/useUserProfile';
import { useSelector } from 'react-redux';
import UserProfileOnboarding from '../../components/Onboarding/profile';

const Onboarding = () => {
  const userData = useSelector((state) => state.user);
  const allLanguages = useSelector((state) => state.aview.allLanguages);

  const router = useRouter();
  const { getProfile } = useUserProfile();

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (window.location.search.split('=')[0].includes('code')) {
      router.push(
        `/onboarding/?stage=7&ig_access_code=${
          window.location.search.split('=')[1].split('#')[0]
        }`
      );
    }
    if (!window.location.search) router.push('/onboarding?stage=1');
  }, []);

  return (
    <>
      <PageTitle title="Aview Onboarding" />
      <div className="m-horizontal ml-8 flex items-center px-0 py-6 md:ml-24">
        {Number(router.query.stage) > 1 && (
          <Link href={`/onboarding/?stage=${+router.query.stage - 1}`}>
            <a className="flex place-content-center pr-4">
              <Image src={ArrowBack} alt="Go back" width={10} height={20} />
            </a>
          </Link>
        )}

        <Image
          src={aviewLogo}
          alt="AVIEW International logo"
          width={40}
          height={40}
        />
      </div>
      <div className="bg-gray-1">
        <div
          style={{ width: `${Math.ceil((+router.query.stage * 100) / 6)}%` }}
          className="gradient-1 h-1 transition-all ease-in-out"
        ></div>
      </div>
      <div className="min-w-2/4 mx-auto mb-s12 mt-s6 text-white md:mt-s12">
        {router.query.stage > 0 && (
          <small className="mb-s2 block text-center text-lg">
            Step {router.query.stage} of 6
          </small>
        )}
        <Stages userData={userData} allLanguages={allLanguages} />
      </div>
    </>
  );
};

export default Onboarding;

const Stages = ({ userData, allLanguages }) => {
  const { query } = useRouter();

  return (
    <>
      {query.stage === 'profile' && (
        <PageTransition>
          <UserProfileOnboarding userData={userData} />
        </PageTransition>
      )}
      {query.stage === '1' && (
        <PageTransition>
          <OnboardingStep1 userData={userData} />
        </PageTransition>
      )}
      {query.stage === '2' && (
        <PageTransition>
          <OnboardingStep2 userData={userData} languages={allLanguages} />
        </PageTransition>
      )}
      {query.stage === '3' && (
        <PageTransition>
          <OnboardingStep3 userData={userData} />
        </PageTransition>
      )}
      {query.stage === '4' && (
        <PageTransition>
          <OnboardingStep4 userData={userData} />
        </PageTransition>
      )}
      {query.stage === '5' && (
        <PageTransition>
          <OnboardingStep5 userData={userData} />
        </PageTransition>
      )}
      {query.stage === '6' && (
        <PageTransition>
          <OnboardingSuccess />
        </PageTransition>
      )}
    </>
  );
};
