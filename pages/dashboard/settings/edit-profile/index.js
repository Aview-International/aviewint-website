import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import { UserContext } from '../../../../store/user-profile';
import Correct from '../../../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../../../public/img/icons/incorrect.svg';
import Border from '../../../../components/UI/Border';
import OnboardingButton from '../../../../components/Onboarding/button';
import PhoneNumberInput from '../../../../components/FormComponents/PhoneNumberInput';

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
    <div className="ml-0 w-4/5 md:ml-s5 md:w-2/5">{right}</div>
  </div>
);

const Accounts = ({ userData }) => {
  return (
    <>
      <Container
        left={<p className={`text-xl`}>Instagram</p>}
        right={
          <button
            className={`w-full rounded-full border-2 py-s1 text-center ${
              userData.youtubeChannelId && 'instagram'
            }`}
          >
            Instagram
          </button>
        }
      />
      <Container
        left={<p className={`text-xl`}>Facebook</p>}
        right={
          <button
            className={`w-full rounded-full border-2 py-s1  text-center ${
              userData.youtubeChannelId && 'bg-[#0054ff]'
            }`}
          >
            Facebook
          </button>
        }
      />
      <Container
        left={<p className={`text-xl`}>TikTok</p>}
        right={
          <button
            className={`w-full rounded-full border-2 py-s1 text-center ${
              userData.youtubeChannelId && 'bg-[#000000]'
            }`}
          >
            TikTok
          </button>
        }
      />
      <Container
        left={<p className={`text-xl`}>Youtube</p>}
        right={
          <button
            className={`w-full rounded-full border-2 py-s1 text-center ${
              userData.youtubeChannelId && 'bg-[#ff0000]'
            }`}
          >
            Youtube
          </button>
        }
      />
    </>
  );
};

const EditProfile = () => {
  const { userInfo } = useContext(UserContext);
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
      <Container
        left={<label className={`text-xl`}>Phone Number</label>}
        right={
          <div className="">
            <PhoneNumberInput />
          </div>
        }
      />

      <div className="mx-auto w-36">
        <OnboardingButton disabled>Submit</OnboardingButton>
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
        <Border classes="relative w-full" borderRadius="[5px]">
          <input
            id={_id}
            name={name}
            type={type || 'text'}
            placeholder={placeholder}
            className={`peer w-full rounded-[5px] bg-black px-s2 py-2 text-white focus:outline-none`}
            onChange={handleChange}
            value={value}
          />
          <div
            className={`gradient-1 transition-300 absolute inset-0 -z-10 h-[calc(100%+3px)] w-[calc(100%+3px)] rounded-2xl opacity-0 blur-lg peer-focus:opacity-80`}
          ></div>
          <span className="absolute right-[10px] bottom-[2px]">
            {isValid && (
              <Image src={Correct} alt="Correct" width={30} height={30} />
            )}
            {hasSubmitted && !isValid && (
              <Image src={Incorrect} alt="Incorrect" width={30} height={30} />
            )}
          </span>
        </Border>
      }
    />
  );
};

EditProfile.getLayout = SettingsLayout;
export default EditProfile;
