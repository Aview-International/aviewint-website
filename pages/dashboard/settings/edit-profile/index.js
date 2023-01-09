import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import { UserContext } from '../../../../store/user-profile';
import Correct from '../../../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../../../public/img/icons/incorrect.svg';
import Border from '../../../../components/UI/Border';
import OnboardingButton from '../../../../components/Onboarding/button';
import PhoneInput from 'react-phone-number-input';

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
  <div className="mb-s2 flex w-full items-center">
    <div className="w-2/5 text-right">{left}</div>
    <div className="ml-s5 w-3/5">{right}</div>
  </div>
);

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
          <div className="flex justify-end">
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
      <Container
        left={<h3 className="my-s3 text-2xl">Personal Information</h3>}
      />
      <InputField
        value={payload.email}
        handleChange={handleChange}
        {...INPUT_FIELDS[2]}
      />

      <PhoneNumberInput
        value={payload.phone}
        handleChange={(e) => setPayload({ ...payload, phone: e })}
      />

      <div className="mx-auto w-36">
        <OnboardingButton disabled>Submit</OnboardingButton>
      </div>
    </div>
  );
};

const PhoneNumberInput = ({ value, handleChange, hasSubmitted, isValid }) => (
  <Container
    left={<label className={`block text-right text-xl`}>Phone Number</label>}
    right={
      <Border borderRadius="[5px]" classes="w-full">
        <div
          className={`phone-number rounded-[5px] bg-black text-xl text-white`}
        >
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="US"
            value={value}
            onChange={handleChange}
          />
        </div>
        <span className={`absolute right-[10px] top-[9px]`}>
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
        <label htmlFor={_id} className={`block text-right text-xl`}>
          {label}
        </label>
      }
      right={
        <Border classes="relative" borderRadius="[5px]">
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
