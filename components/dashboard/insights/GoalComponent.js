import ModalOnVideoStatus from './ModalOnVideoStatus';

const GoalComponent = ({ videos }) => {
  return (
    <div className="gradient-dark h-[170px] w-full rounded-2xl">
      <div className="p-s1.5">
        {videos.slice(0, 2).map((video, index) => (
          <ModalOnVideoStatus key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default GoalComponent;
