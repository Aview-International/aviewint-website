const GradientLoader = () => {
  return (
    <div className={`gradient-1 relative h-8 w-8 rounded-full`}>
      <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></span>
      <div className="absolute top-2/4 left-2/4 box-content h-6 w-6 -translate-y-2/4 -translate-x-2/4 animate-roll rounded-full border-[4px] border-white/60 border-t-transparent bg-white-transparent"></div>
    </div>
  );
};

export default GradientLoader;
