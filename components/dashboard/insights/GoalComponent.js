import ModalOnVideoStatus from './ModalOnVideoStatus';
import Link from 'next/link';

const GoalComponent = ({ videos }) => {
  return (
    <div
      className={`gradient-dark w-full rounded-2xl ${
        videos.length <= 2 ? 'py-3' : 'py-5'
      } h-full`}
    >
      <div className="h-full px-5">
        {videos.slice(0, 2).map((video, index) => (
          <ModalOnVideoStatus
            key={index}
            video={video}
            maxheight={false}
            index={index}
          />
        ))}
        {videos.length >= 2 && (
          <div className="text-left">
            <Link href="/dashboard/history">
              <a className="text-blue-500 underline">See all videos</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalComponent;
