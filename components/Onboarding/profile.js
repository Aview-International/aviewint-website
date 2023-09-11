import { useState } from 'react';
import FormInput from '../FormComponents/FormInput';
import OnboardingButton from './button';
import Avatar from '../../public/img/graphics/personal-use.webp';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { updateProfileDetails } from '../../services/apis';
import ErrorHandler from '../../utils/errorHandler';
import { useRouter } from 'next/router';

const UserProfileOnboarding = ({ userData }) => {
  const router = useRouter();
  const [payload, setPayload] = useState({
    firstName: '',
    lastName: '',
    picture: null,
    creatorId: userData?.uid,
  });

  const [effects, setEffects] = useState({
    hasSubmitted: false,
    isLoading: false,
  });

  const handleChange = (e) => {
    setPayload((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file.size > 2097152) {
      toast.error('Maximum file size of 2mb allowed');
      return;
    }
    setPayload((prev) => ({
      ...prev,
      picture: file,
    }));
  };

  const handleSubmit = async () => {
    setEffects((prev) => ({
      ...prev,
      hasSubmitted: true,
    }));
    if (!payload.firstName || !payload.lastName) return;

    setEffects((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      updateProfileDetails(payload);
      router.push('/onboarding?stage=1');
    } catch (error) {
      setEffects((prev) => ({
        ...prev,
        isLoading: false,
      }));
      ErrorHandler(error);
    }
  };

  return (
    <div>
      <div className="m-auto w-[min(500px,90%)]">
        <h2 className="mb-3 text-3xl md:text-center md:text-4xl">
          Welcome to{' '}
          <span className="gradient-text gradient-1">Aview International</span>
        </h2>

        <form>
          <label
            className="my-s3 flex cursor-pointer items-center justify-start"
            htmlFor="picture"
          >
            <div>
              <Image
                src={
                  payload.picture
                    ? URL.createObjectURL(payload.picture)
                    : Avatar
                }
                width={100}
                height={100}
                className="rounded-full"
                alt=""
              />
            </div>
            <div className="text-md pl-s2">
              <p>Upload picture</p>
              <input
                id="picture"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </label>
          <FormInput
            label="First Name"
            extraClasses="mb-4"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            hasSubmitted={effects.hasSubmitted}
            isValid={payload.firstName}
          />
          <FormInput
            label="Last Name"
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name"
            type="text"
            extraClasses="mb-2"
            isValid={payload.lastName}
            hasSubmitted={effects.hasSubmitted}
          />
        </form>
        <div className="m-auto mt-4 w-[min(360px,90%)]">
          <OnboardingButton
            onClick={handleSubmit}
            isLoading={effects.isLoading}
            theme="light"
          >
            Continue
          </OnboardingButton>
        </div>
      </div>
    </div>
  );
};

export default UserProfileOnboarding;
