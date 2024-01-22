import Image from 'next/image';
import { useEffect, useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import Container from '../../../../components/UI/Container';
import Button from '../../../../components/UI/Button';
import { useSelector } from 'react-redux';
import FormInput from '../../../../components/FormComponents/FormInput';

const INPUT_FIELDS = [
  {
    name: 'Username',
    label: 'Username',
    _id: 'Username',
  },
  {
    name: 'Email',
    label: 'Email',
    _id: 'email',
  },
  {
    name: 'Old Password',
    label: 'Old Password',
    _id: 'old_password',
  },
  {
    name: 'New Password',
    label: 'New Password',
    _id: 'new_password',
  },
];

const EditProfile = () => {
  const userInfo = useSelector((state) => state.user);
  const [newEmail, setNewEmail] = useState(false);

  const [payload, setPayload] = useState({
    userName: '',
    email: '',
    old_password: '',
    new_password: '',
    new_profile: null,
  });

  const handleEmailChange = (e) => {
    setPayload({ ...payload, email: e.target.value });
    // setNewEmail(!newEmail);
  };

  const handleChange = (e) =>
    setPayload({ ...payload, [e.target.name]: e.target.value });

  useEffect(() => {
    setPayload({
      ...payload,
      userName: `${userInfo.firstName}${` `}${userInfo.lastName}`,
      email: userInfo.email,
      old_password: userInfo.password,
    });
  }, [userInfo]);

  return (
    <div className="w-full">
      <Settings_Back_Button title="Edit Profile" />
      <Container
        left={
          <div className="flex flex-col justify-start gap-y-1">
            <p className='text-xl'>Profile</p>
            <p className="text-sm">Update your photo and personal details here.</p>
          </div>
        }
        right={<p className="w-full text-end">Current plan: Creator</p>}
        isHeaderSection={true}
      />
      <InputField
        value={payload.userName}
        handleChange={handleChange}
        {...INPUT_FIELDS[0]}
      />
      <Container
        left={
          <div className="jusify-start flex flex-col gap-y-1">
            <p className='text-xl'>Profile Photo</p>
            <p className="text-sm">This will be displayed on your profile.</p>
          </div>
        }
        right={
          <div className="flex w-60 flex-row items-center justify-between">
            <Image
              src={
                payload.new_profile
                  ? URL.createObjectURL(payload.new_profile)
                  : userInfo.picture
              }
              alt={userInfo.userName}
              width={70}
              height={70}
              unoptimized
              className="rounded-full"
            />
            <label className="block cursor-pointer text-base underline">
              <input
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/gif"
                onChange={(e) =>
                  setPayload({ ...payload, new_profile: e.target.files[0] })
                }
                name="new_profile"
              />
              Update
            </label>
          </div>
        }
      />
      <Container
        left={<p className='text-xl'>Email</p>}
        right={
          <Container
            left={
              <>
                {newEmail ? (
                  <FormInput
                    placeholder="Enter new Email"
                    type="email"
                    extraClasses="mr-12"
                    onChange={handleEmailChange}
                    value={payload.email}
                    name="email"
                  />
                ) : (
                  <p className="text-lg">{payload.email}</p>
                )}
              </>
            }
            right={
              <div className="ml-10">
                <Button
                  type="secondary"
                  purpose="onClick"
                  onClick={() => setNewEmail(!newEmail)}
                >
                  Change email address
                </Button>
              </div>
            }
            isBottomLine={true}
          />
        }
      />
      <Container
        left={<p className='text-xl'>Password</p>}
        right={
          <div className="flex flex-col items-start justify-start gap-y-1 ">
            <InputField
              value={payload.old_password}
              handleChange={handleChange}
              isColumn={true}
              isBottomLine={true}
              {...INPUT_FIELDS[2]}
            />

            <InputField
              value={payload.new_password}
              handleChange={handleChange}
              isColumn={true}
              isBottomLine={true}
              {...INPUT_FIELDS[3]}
            />
          </div>
        }
      />
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
  isColumn,
  isBottomLine,
  isValid,
  label,
  hasSubmitted,
}) => {
  return (
    <Container
      left={
        <label htmlFor={_id} className={`block text-lg`}>
          {label}
        </label>
      }
      right={
        <div className="w-full">
          <FormInput
            placeholder={placeholder}
            type={type || 'text'}
            extraClasses=""
            onChange={handleChange}
            value={value}
            id={_id}
            name={name}
          />
        </div>
      }
      isColumn={isColumn}
      isBottomLine={isBottomLine}
    />
  );
};

EditProfile.getLayout = SettingsLayout;
export default EditProfile;
