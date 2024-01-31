import Image from 'next/image';
import { SettingsLayout, Settings_Back_Button } from '..';
import Container from '../../../../components/UI/Container';
import { useSelector } from 'react-redux';

const EditProfile = () => {
  const userInfo = useSelector((state) => state.user);

  return (
    <div className="w-full">
      <Settings_Back_Button title="Edit Profile" />
      <Container
        left={<p className="text-xl">Name</p>}
        right={
          <p className="text-xl">
            {userInfo.firstName} {userInfo.lastName}
          </p>
        }
      />

      <Container
        left={<p className="text-xl">Profile Photo</p>}
        right={
          <div className="">
            <Image
              src={userInfo.picture}
              alt={userInfo.firstName}
              width={80}
              height={80}
              unoptimized
              className="rounded-full"
            />
          </div>
        }
      />
      <Container
        left={<p className="text-xl">Email</p>}
        right={<p className="text-lg">{userInfo.email}</p>}
      />
      <Container
        left={<p className="text-xl">Plan</p>}
        right={
          <p className="text-lg capitalize">
            {userInfo?.plan ?? 'Starter Studio'}
          </p>
        }
        isBottomLine={true}
      />
    </div>
  );
};

EditProfile.getLayout = SettingsLayout;
export default EditProfile;
