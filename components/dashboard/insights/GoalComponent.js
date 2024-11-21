import ModalOnVideoStatus from './ModalOnVideoStatus';
import Link from 'next/link';

const GoalComponent = ({ videos }) => {
  return (
    <div className="gradient-dark w-full rounded-2xl py-s3 px-s2.5">
      {videos.slice(0, 2).map((video, index) => (
        <ModalOnVideoStatus key={index} video={video} />
      ))}
      {videos.length > 2 && (
        <Link href="/dashboard/history">
          <a className="underline">See all videos</a>
        </Link>
      )}
    </div>
  );
};

export default GoalComponent;
