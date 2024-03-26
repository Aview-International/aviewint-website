import Image from 'next/image';
import Video_Status from '../../../public/img/graphics/team-building.png';

const EmptyStatus = () => {
  return (
    <div className="h-full w-full rounded-2xl bg-white-transparent p-s0">
      <div className="flex items-center justify-center">
        <Image src={Video_Status} height={100} width={100} alt="Video Status" />
      </div>
      <p className="mt-6 text-center">You have no video history.</p>
    </div>
  );
};

export default EmptyStatus;
