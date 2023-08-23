import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import OnboardingButton from '../../../components/Onboarding/button';
import { useState } from 'react';
import AiVoice from '../../../components/dashboard/AiVoice';

const AIvoice = () => {
  const [trainModal, setTrainModal] = useState(false);

  return (
    <>
      <PageTitle title="Upload Video" />
      <div className="mx-auto h-full max-w-[1200px] rounded-xl bg-white-transparent ">
        <div className="container mx-auto w-[95%] py-10 md:py-16 lg:w-4/5">
          {!trainModal && (
            <div
              className="mt-s8 flex flex-col md:flex-row"
              data-aos="zoom-in-up"
            >
              <div className="flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2">
                <p>
                  Record yourself reading through at least five prompts so we
                  can create an AI voice tailored to your own voice. Feel free
                  to do more to achieve a more accurate voice.
                </p>
                <div className="mx-auto mt-s2 w-[200px]">
                  <OnboardingButton
                    theme="light"
                    onClick={() => setTrainModal(true)}
                  >
                    Record Voice Sample
                  </OnboardingButton>
                </div>
              </div>

              <div className="ml-s2 flex w-full flex-col items-start justify-center gap-3 rounded-2xl border-2 p-s2">
                <p>
                  Uploaded pre-recorded voice samples of you speaking clearly
                  that is devoid of noise and loud background. Upload at least 5
                  samples to achieve a better voice cloning effect.
                </p>
                <div className="mx-auto mt-s2 w-[200px]">
                  <OnboardingButton
                    theme="light"
                    onClick={() => setTrainModal(true)}
                  >
                    Upload Voice Sample
                  </OnboardingButton>
                </div>
              </div>
            </div>
          )}
          {trainModal && <AiVoice />}
        </div>
      </div>
    </>
  );
};

AIvoice.getLayout = DashboardLayout;

export default AIvoice;
