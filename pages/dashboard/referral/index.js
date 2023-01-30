import Image from 'next/image';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import referralFilled from '../../../public/img/icons/referral-filled.svg';
import info from '../../../public/img/icons/info.svg';
import FormInput from '../../../components/FormComponents/FormInput';
import OnboardingButton from '../../../components/Onboarding/button';
import Border from '../../../components/UI/Border';
import Shadow from '../../../components/UI/Shadow';

const Referral = () => {
  return (
    <div className="text-white">
      <Statistics />
      <HowItWorks />
      <div className="flex justify-between">
        <div className="w-2/5">
          <Invite />
        </div>
        <div className="ml-s3 w-3/5">
          <MonthlyGoals />
        </div>
      </div>
    </div>
  );
};

export default Referral;

Referral.getLayout = DashboardLayout;

const Statistics = () => {
  return (
    <div className="gradient-dark rounded-2xl p-s3">
      <h2 className="mb-s5 text-4xl">Your referral statistics</h2>
      <div className="flex justify-between">
        <div>
          <div className="flex">
            <Image src={referralFilled} alt="" width={64} height={64} />
            <p className="text-8xl font-bold">1200</p>
          </div>
          <div className="flex items-center">
            <p className="mt-s1">Aview credits earned</p>
            <Image src={info} alt="" width={20} height={20} />
          </div>
        </div>
        <div>
          <p className="text-8xl font-bold">15</p>
          <div className="flex items-center">
            <p className="mt-s1">Creators referred</p>
            <Image src={info} alt="" width={20} height={20} />
          </div>
        </div>
        <div>
          <p className="text-8xl font-bold">&#36;3,200</p>
          <div className="flex items-center">
            <p className="mt-s1">Total savings available</p>
            <Image src={info} alt="" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="gradient-dark my-s3 rounded-2xl p-s3 text-xl">
      <h3 className="mb-s2 text-4xl font-bold">How it works</h3>
      <p>
        Invite other creators to Aview and earn 10% of their revenue you can use
        on your future transactions.{' '}
      </p>
      <a className="gradient-text gradient-1">
        Learn more about Aview Referrals.
      </a>
      <p className="mt-s5 mb-s2 text-2xl">Share your link</p>
      <p>Share your referral link by copying and sharing it on social media.</p>
      <div className="mt-s2 flex items-center">
        <div className="w-9/12">
          <Border classes="w-full">
            <div className="bg-black p-s1">aviewint.com/referral=75927594</div>
          </Border>
        </div>
        <div className="ml-s4 w-3/12">
          <OnboardingButton>Copy Link</OnboardingButton>
        </div>
      </div>
    </div>
  );
};

const Invite = () => {
  return (
    <div className="gradient-dark rounded-2xl p-s3">
      <p className="text-2xl">Invite a creator</p>
      <p className="mt-s2 mb-s4">
        Invite a creator and get 500 credits instantly.
      </p>
      <form className="flex">
        <div className="w-9/12">
          <Border classes="w-full">
            <div className="bg-black p-s1">Email Address</div>
          </Border>
        </div>
        <div className="ml-s2 flex w-3/12">
          <Border
            classes={'w-full flex justify-center items-center'}
            borderRadius="[30px]"
          >
            <div>Invite</div>
          </Border>
        </div>
      </form>
    </div>
  );
};

const MonthlyGoals = () => {
  return (
    <div className="gradient-dark rounded-2xl p-s3">
      <p className="text-2xl">Monthly goal</p>
      <p className="mt-s2 mb-s4">
        You&#39;re almost at your monthly goal! Keep up the good work.
      </p>
      <div className="h-10 w-full rounded-[20px] bg-gray-1">
        <Shadow classes={'w-[65%] h-full'}>
          <Border classes={'w-[65%] h-full'} borderRadius="[20px]"></Border>
        </Shadow>
      </div>
    </div>
  );
};
