import HorizontalLine from '../../UI/HorizontalLine';

const VideoStatusSection = ({ children, title, hasHorizontal = true }) => {
  return (
    <div className="flex w-full flex-col items-start justify-between my-1.5">
      <h2 className="text-sm uppercase text-white/70">{title}</h2>
      {children}
      {hasHorizontal && <HorizontalLine styles={'mt-1 h-[2px] bg-gray-2'} />}
    </div>
  );
};

export default VideoStatusSection;
