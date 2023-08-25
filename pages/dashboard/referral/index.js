import Image from 'next/image';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import referralFilled from '../../../public/img/icons/referral-filled.svg';
import info from '../../../public/img/icons/info.svg';
import FormInput from '../../../components/FormComponents/FormInput';
import OnboardingButton from '../../../components/Onboarding/button';
import Border from '../../../components/UI/Border';
import { useRef, useState } from 'react';
import { emailValidator } from '../../../utils/regex';
import { toast } from 'react-toastify';

const Referral = () => {
  return (
    <div className="mx-auto w-[1200px] text-white">
      <Statistics />
      <HowItWorks />
      <div className="flex gap-6">
        <Invite />
        <MonthlyGoals />
      </div>
    </div>
  );
};

export default Referral;

Referral.getLayout = DashboardLayout;

const Statistics = () => {
  return (
    <div className="gradient-dark rounded-2xl p-6">
      <h2 className="mb-10 text-4xl font-bold">Your referral statistics</h2>
      <div className="flex items-center justify-between gap-20">
        <div>
          <div className="mb-2 flex items-center gap-4">
            <div className="-mt-3 grid place-content-center">
              <Image src={referralFilled} alt="referral-filled" width={64} height={64} />
            </div>
            <p className="text-9xl font-bold">1,200</p>
          </div>

          <div className="flex items-center gap-3">
            <p className="text-xl text-white">Aview credits earned</p>
            <div className="-mt-1 grid place-content-center">
              <Image src={info} alt="info" width={20} height={20} />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-8xl font-bold">15</p>
          <div className="flex items-center gap-3">
            <p className="text-xl text-white">Creators referred</p>
            <div className="-mt-1 grid place-content-center">
              <Image src={info} alt="info" width={20} height={20} />
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2 text-8xl font-bold">$3,200</p>
          <div className="flex items-center gap-3">
            <p className="text-xl text-white">Total savings available</p>
            <div className="-mt-1 grid place-content-center">
              <Image src={info} alt="info" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const referralLink = useRef(null);

  const handleClick = async () => {
    referralLink.current.select();
    navigator.clipboard
      .writeText(referralLink.current.value)
      .then(() => {
        toast.success('Copied link to clipboard');
      })
      .catch(() => {
        toast.error('Something went wrong');
      });
  };

  return (
    <div className="gradient-dark my-6 rounded-2xl p-6 text-xl">
      <h3 className="mb-4 text-4xl font-bold">How it works</h3>
      <p className="text-xl">
        Invite other creators to Aview and earn 10% of their revenue you can use
        on your future transactions.{' '}
      </p>
      <a className="gradient-text gradient-1 mb-10">
        <span>Learn more about Aview Referrals.</span>
        <div className="gradient-1 -mt-1 h-0.5 w-full"></div>
      </a>

      <p className="mb-4 text-2xl font-bold">Share your link</p>

      <p className="mb-4 text-xl">
        Share your referral link by copying and sharing it on social media.
      </p>

      <div className="flex items-center gap-4">
        <div className="flex-grow">
          <Border classes="w-full rounded-md">
            <input
              type="text"
              className="w-full rounded-md bg-black p-s1"
              value={'aviewint.com/referral=75927594'}
              readOnly
              ref={referralLink}
            />
          </Border>
        </div>
        <div className="">
          <OnboardingButton onClick={handleClick}>Copy Link</OnboardingButton>
        </div>
      </div>
    </div>
  );
};

const Invite = () => {
  const [email, setEmail] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="gradient-dark rounded-2xl p-6">
      <p className="mb-4 text-2xl font-bold">Invite a creator</p>
      <p className="mb-s4 text-xl">
        Invite a creator and get 500 credits instantly.
      </p>

      <form className="flex gap-4">
        <FormInput
          extraClasses="mb-0"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <OnboardingButton
          disabled={!emailValidator(email)}
          extraClasses="w-[100px] text-center"
          onClick={handleClick}
        >
          Invite
        </OnboardingButton>
      </form>
    </div>
  );
};

const MonthlyGoals = () => {
  return (
    <div className="gradient-dark flex-grow rounded-2xl p-6">
      <p className="mb-4 text-2xl font-bold">Monthly goal</p>
      <p className="mb-9 text-xl">
        You&#39;re almost at your monthly goal! Keep up the good work.
      </p>
      <div className="h-10 w-full rounded-full bg-gray-1">
        <div className="gradient-1 h-full w-[65%] rounded-full" />
      </div>
    </div>
  );
};
