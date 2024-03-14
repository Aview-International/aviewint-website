import ModalOnVideoStatus from './ModalOnVideoStatus';

const GoalComponent = ({ videos }) => {
  const twentyFourHours = 24 * 60 * 60 * 1000;

  return (
    <div className="gradient-dark h-[170px] w-full rounded-2xl">
      <div className="p-s1.5">
        {videos
          .filter((item) => Date.now() - item.timestamp > twentyFourHours)
          .slice(0, 2)
          .map((video, index) => {
            return <ModalOnVideoStatus key={index} video={video} />;
          })}
      </div>
    </div>
  );
};

export default GoalComponent;
