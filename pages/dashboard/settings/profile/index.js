import Image from 'next/image';
import { SettingsLayout } from '..';
import Container from '../../../../components/UI/Container';
import { useSelector } from 'react-redux';
import Modal from '../../../../components/UI/Modal';
import { Fragment, useState } from 'react';
import Edit from '../../../../public/img/icons/edit.svg';
import Add from '../../../../public/img/icons/plus.svg';
import GlobalButton from '../../../../components/Onboarding/button';
import ErrorHandler from '../../../../utils/errorHandler';
import { getPlans, updateProfileDetails } from '../../../../services/apis';
import usePlans from '../../../../hooks/usePlans';

export const getStaticProps = async () => {
  try {
    const plans = await getPlans();
    const plansJSON = JSON.stringify(plans);
    return {
      props: {
        plans: plansJSON,
      },
      revalidate: 60, // re-generate page every 60 seconds (if necessary)
    };
  } catch (error) {
    return { props: { plans: {} } };
  }
};

const ModalComponent = ({ closeModal, img, setImg }) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleUpload = async () => {
    if (!img) throw ErrorHandler(null, 'Please select an image');
    try {
      setIsLoading(true);
      await updateProfileDetails(img, 'banner');
      setIsLoading(false);
      setImg(null);
      closeModal();
    } catch (error) {
      setIsLoading(false);
      ErrorHandler(error);
    }
  };
  return (
    <Modal closeModal={closeModal}>
      <div>
        <p className="text-xl">Upload new banner photo</p>
        <small>2mb max file size</small>
        <div className="relative block h-[15rem] max-h-[15rem] w-full max-w-full">
          {img && (
            <Image
              src={URL.createObjectURL(img)}
              alt=""
              layout="fill"
              objectFit="contain"
              className="w-full"
            />
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <div className="mx-auto my-s2 w-full max-w-[10rem]">
          <GlobalButton onClick={handleUpload} isLoading={isLoading}>
            Upload
          </GlobalButton>
        </div>
      </div>
    </Modal>
  );
};
const EditProfile = ({ plans }) => {
  usePlans(JSON.parse(plans));
  const userInfo = useSelector((state) => state.user);
  const allPlans = useSelector((state) => state.aview.allPlans);
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState(null);

  return (
    <div className="w-full">
      {modal && (
        <ModalComponent
          closeModal={() => setModal(false)}
          img={img}
          setImg={setImg}
        />
      )}
      <Container
        left={<p className="text-xl">Profile Photo</p>}
        right={
          <div className="">
            <Image
              src={userInfo?.picture}
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
        left={<p className="text-xl">Profile Banner</p>}
        right={
          <div
            className="group relative cursor-pointer"
            onClick={() => setModal(true)}
          >
            {userInfo?.banner ? (
              <Fragment>
                <button className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 group-hover:block">
                  <Image src={Edit} alt="Edit Photo" width={20} height={20} />
                </button>
                <Image
                  src={userInfo?.banner}
                  alt={userInfo.firstName}
                  width={80}
                  height={80}
                  unoptimized
                  className="rounded-full group-hover:opacity-40"
                />
              </Fragment>
            ) : (
              <button className="flex items-center hover:underline">
                <span className="pr-4">Add new banner</span>
                <Image src={Add} alt="Edit Photo" width={20} height={20} />
              </button>
            )}
          </div>
        }
      />

      <Container
        left={<p className="text-xl">Name</p>}
        right={
          <p className="text-xl">
            {userInfo.firstName} {userInfo.lastName}
          </p>
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
            {userInfo.plan
              ? `${userInfo.plan} - $${
                  allPlans.find((e) => e.id === userInfo.plan)?.monthlyCost ??
                  '0'
                }`
              : 'Studio Starter - Free'}
          </p>
        }
        isBottomLine={true}
      />
    </div>
  );
};

EditProfile.getLayout = SettingsLayout;
export default EditProfile;
