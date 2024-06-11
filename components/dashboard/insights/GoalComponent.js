import ModalOnVideoStatus from './ModalOnVideoStatus';

const GoalComponent = ({ videos }) => {
  return (
    <div className="gradient-dark py-5 w-full rounded-2xl">
      <div className="px-5 py-1">
        {videos.slice(0, 2).map((video, index) => (
          <ModalOnVideoStatus key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default GoalComponent;
