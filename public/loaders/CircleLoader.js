const CircleLoader = () => {
  return (
    <div className="relative h-10 w-full bg-transparent">
      <div className="absolute top-2/4 left-2/4 box-content h-6 w-6 -translate-y-2/4 -translate-x-2/4 animate-roll rounded-full border-[4px] border-white border-t-transparent"></div>
    </div>
  );
};

export default CircleLoader;
