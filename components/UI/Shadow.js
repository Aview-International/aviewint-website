const Shadow = ({ children }) => {
  return (
    <div className="group relative">
      <div className="gradient-1 transition-300 absolute inset-0 -z-10 h-[calc(100%+3px)] w-[calc(100%+3px)] rounded-2xl opacity-0 blur-lg group-hover:opacity-70"></div>
      {children}
    </div>
  );
};

export default Shadow;
