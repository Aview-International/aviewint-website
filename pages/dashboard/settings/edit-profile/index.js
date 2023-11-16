import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import Correct from '../../../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../../../public/img/icons/incorrect.svg';
import Border from '../../../../components/UI/Border';
import OnboardingButton from '../../../../components/Onboarding/button';
import PhoneNumberInput from '../../../../components/FormComponents/PhoneNumberInput';
import { useSelector } from 'react-redux';
import FormInput from '../../../../components/FormComponents/FormInput';
import OnBoardingAccounts from '../../../../components/sections/reused/OnBoardingAccounts';
import { useRouter } from 'next/router';
import { InstagramAuthenticationLink } from '../../../api/firebase';
import WhiteYoutube from '../../../../public/img/icons/white-youtube.png';

const INPUT_FIELDS = [
  {
    name: 'firstName',
    label: 'First Name',
    _id: 'firstName',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    _id: 'lastName',
  },
  {
    name: 'email',
    label: 'Email Address',
    _id: 'email',
  },
];

const Container = ({ left, right }) => (
  <div className="flex w-full flex-col items-start p-s2 md:mb-s2 md:flex-row md:items-center md:p-0">
    <div className="w-full text-left md:w-2/5 md:text-right">{left}</div>
    <div className="ml-0 w-full md:ml-s5 md:w-2/5">{right}</div>
  </div>
);

const Accounts = ({ userData }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState({
    youtube: false,
    instagram: false,
    tiktok: false,
    facebook: false,
  });

  const linkInstagramAccount = async () => {
    localStorage.setItem('instagramRedirect', window.location.pathname);
    router.push(InstagramAuthenticationLink);
  };

  const linkYoutubeAccount = async () => {
    localStorage.setItem('userId', userData._id);
    setIsLoading((prev) => ({
      ...prev,
      youtube: true,
    }));
    window.location = await authorizeUser();
  };

  return (
    <>
      <Container
        left={<p className={`text-xl`}>YouTube</p>}
        right={
          <OnBoardingAccounts
            classes="bg-[#ff0000]"
            isAccountConnected={userData?.youtube?.youtubeConnected}
            clickEvent={linkYoutubeAccount}
            account={
              <Image
                src={WhiteYoutube}
                alt="connect"
                width={100}
                height={22.5}
              />
            }
            isLoading={isLoading.youtube}
          />
        }
      />
      <Container
        left={<p className={`text-xl`}>Instagram</p>}
        right={
          <OnBoardingAccounts
            isAccountConnected={userData?.instagram_account_id}
            classes="instagram"
            // clickEvent={linkInstagramAccount}
            account="Instagram"
          />
        }
      />
      <Container
        left={<p className={`text-xl`}>Facebook</p>}
        right={
          <OnBoardingAccounts
            isAccountConnected={userData?.facebook}
            classes="bg-[#0054ff]"
            account="Facebook"
          />
        }
      />
      <Container
        left={<p className={`text-xl`}>TikTok</p>}
        right={
          <OnBoardingAccounts
            isAccountConnected={userData?.facebook}
            classes="bg-[#0054ff]"
            account="TikTok"
          />
        }
      />
    </>
  );
};

const EditProfile = () => {
  const userInfo = useSelector((state) => state.user);

  useEffect(() => {
    setPayload({
      ...payload,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phone: userInfo.phone,
      role: userInfo.role,
    });
  }, [userInfo]);

  const [payload, setPayload] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
  });

  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  return (
    <div>
      <Settings_Back_Button title="Edit Profile" />

      <Container
        left={
          <div className="jusify-start flex md:justify-end">
            <Image
              src={userInfo.picture}
              alt={userInfo.firstName}
              width={48}
              height={48}
              unoptimized
              className="rounded-full"
            />
          </div>
        }
        right={
          <>
            <h3 className="text-xl">
              {userInfo.firstName} {userInfo?.lastName}
            </h3>
            <p className="text-sm">Change profile photo</p>
          </>
        }
      />
      <InputField
        value={payload.firstName}
        handleChange={handleChange}
        {...INPUT_FIELDS[0]}
      />
      <InputField
        value={payload.lastName}
        handleChange={handleChange}
        {...INPUT_FIELDS[1]}
      />
      <Container left={<h3 className="my-s1 text-2xl">Accounts</h3>} />
      <Accounts userData={userInfo} />
      <Container
        left={<h3 className="my-s3 text-2xl">Personal Information</h3>}
      />
      <InputField
        value={payload.email}
        handleChange={handleChange}
        {...INPUT_FIELDS[2]}
      />
      {/* <Container
        left={<label className={`text-xl`}>Phone Number</label>}
        right={
          <div className="">
            <PhoneNumberInput
              value={payload.phone}
              onChange={(e) => setPayload({ ...payload, phone: e })}
            />
          </div>
        }
      /> */}

      <div className="mx-auto w-36">
        {/* <OnboardingButton disabled>Submit</OnboardingButton> */}
      </div>
    </div>
  );
};

const InputField = ({
  type,
  _id,
  name,
  placeholder,
  handleChange,
  value,
  isValid,
  label,
  hasSubmitted,
}) => {
  return (
    <Container
      left={
        <label htmlFor={_id} className={`block text-xl`}>
          {label}
        </label>
      }
      right={
        <FormInput
          placeholder={placeholder}
          type={type || 'text'}
          extraClasses=""
          onChange={handleChange}
          value={value}
          id={_id}
          name={name}
        />
      }
    />
  );
};

EditProfile.getLayout = SettingsLayout;
export default EditProfile;
