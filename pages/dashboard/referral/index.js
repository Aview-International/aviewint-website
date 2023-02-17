import Image from 'next/image';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import referralFilled from '../../../public/img/icons/referral-filled.svg';
import info from '../../../public/img/icons/info.svg';
import FormInput from '../../../components/FormComponents/FormInput';
import OnboardingButton from '../../../components/Onboarding/button';
import Border from '../../../components/UI/Border';
import Shadow from '../../../components/UI/Shadow';
import { useContext, useRef, useState } from 'react';
import { emailValidator } from '../../../utils/regex';
import axios from 'axios';
import { UserContext } from '../../../store/user-profile';
import { toast } from 'react-toastify';

const Referral = () => {
  return (
    <div className="text-white w-[1112px] h-[822px] mx-auto">
      <Statistics />
      <HowItWorks />
      <div className="flex justify-between">
        <div className="w-2/5 h-[200px]">
          <Invite />
        </div>
        <div className="ml-s3 w-[618px] h-[200px]">
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
    <div className="gradient-dark rounded-2xl w-full h-[242px] self-stretch flex flex-col flex-start p-6 gap-10">
      <h2 className=" mt-6  text-4xl font-bold">Your referral statistics</h2>
      <div className="flex justify-between w-[1064px] h-[116px] self-stretch items-center p-0 gap-20">
        <div className='w-[238px] h-[116px] flex flex-col p-0 '>
          <div className="flex w-[238px] h-[81px] items-center p-0 gap-2">
            <Image src={referralFilled} alt="" width={54} height={54}  />
            <p className="text-8xl font-bold">1200</p>
          </div>
          <div className="flex items-center w-[225px] h-[27px] p-0 ml-3 pb-3  gap-1">
            <p>Aview credits earned</p>
            <Image src={info} alt="" width={20} height={20} />
          </div>
        </div>
        <div>
          <p className="text-8xl font-bold">15</p>
          <div className="flex items-center p-0 gap-1">
            <p>Creators referred</p>
            <Image src={info} alt="" width={20} height={20} />
          </div>
        </div>
        <div>
          <p className="text-8xl font-bold">&#36;3,200</p>
          <div className="flex items-center p-0 gap-1">
            <p>Total savings available</p>
            <Image src={info} alt="" width={20} height={20} />
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
    <div className="gradient-dark my-s3 rounded-2xl p-s3 text-xl h-[332px]">
      <h3 className="mb-s2 text-4xl font-bold">How it works</h3>
      <div className='w-[939px] h-[54px]'>
      <p>
        Invite other creators to Aview and earn 10% of their revenue you can use
        on your future transactions.{' '}
      </p>
      <a className="gradient-text gradient-1">
        Learn more about Aview Referrals.
      </a>
      </div>
      <div className='w-full h-[160px]'>
        <div className='w-[1064px] h-[73px]'>
        <p className="mt-s5 mb-s2 text-2xl">Share your link</p>
        <p>Share your referral link by copying and sharing it on social media.</p>
        </div>
      
      <div className="mt-s2 h-[47px] flex items-center">
        <div className="w-9/12">
          <Border classes="w-full">
            <input
              type="text"
              className="w-full bg-black p-s1"
              value={'aviewint.com/referral=75927594'}
              readOnly
              ref={referralLink}
            />
          </Border>
        </div>
        <div className="ml-s4 w-3/12">
          <OnboardingButton onClick={handleClick}>Copy Link</OnboardingButton>
        </div>
      </div>
      </div>
      
    </div>
  );
};

const Invite = () => {
  const [email, setEmail] = useState('');
  const { userInfo } = useContext(UserContext);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/invites', {
        firstName: userInfo?.firstName,
        lastName: userInfo?.lastName,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="gradient-dark flex flex-col items-start rounded-2xl p-s3 gap-8">
      <div className='w-[422px] h-[73px] flex flex-col items-start'>
      <p className="text-2xl">Invite a creator</p>
      <p className="mt-s2 mb-s4">
        Invite a creator and get 500 credits instantly.
      </p>
      </div>
      
      <form className="flex">
        <div className="w-9/12 h-[43px]">
          <FormInput
            extraClasses="mb-0"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="ml-s2 flex w-[127px] h-10">
          <OnboardingButton
            disabled={!emailValidator(email)}
            extraClasses="px-s1"
            onClick={handleClick}
          >
            Invite
          </OnboardingButton>
        </div>
      </form>
    </div>
  );
};

const MonthlyGoals = () => {
  return (
    <div className="gradient-dark rounded-2xl p-s3 flex flex-col items-start gap-9">
      <div className='w-[422px] h-[73px] flex flex-col items-start'>
        <p className="text-2xl">Monthly goal</p>
        <p className="mt-s2 mb-s4">
        You&#39;re almost at your monthly goal! Keep up the good work.
      </p>
      </div>
      <div className="h-10 w-full rounded-[20px] bg-gray-1">
        <Shadow classes={'w-[65%] h-full'}>
          <Border classes={'w-[65%] h-full'} borderRadius="[20px]"></Border>
        </Shadow>
      </div>
    </div>
  );
};
