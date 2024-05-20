import Image from 'next/image';
import Card from './Card';

const Profile = ({ name, description, icon }) => {
  return (
    <div className="text-center">
      <div className="relative z-10 mx-auto h-[75px] w-[75px] overflow-hidden rounded-full md:h-[125px] md:w-[125px]">
        <Image src={icon} alt={name} layout="responsive" />
      </div>
      <div className="-mt-[37px] h-[151px] md:-mt-[62px] md:h-[235px]">
        <Card borderRadius="md">
          <div className="pt-s7 pb-s3 md:pb-s7 md:pt-s13">
            <p data-test={name} className="mb-s1 text-xl font-bold text-white md:text-4xl">
              {name}
            </p>
            <p data-test={description} className="text-white md:text-xl">{description}</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
