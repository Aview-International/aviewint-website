const Shadow = ({ children, classes }) => {
  return (
    <div className={`group relative inline-block ${classes}`}>
      <div
        className={`gradient-1 transition-300 absolute inset-0 left-1/2 top-1/2 -z-10 h-[104%] w-[101%] -translate-x-1/2 -translate-y-1/2 rounded-2xl opacity-0 blur-lg group-hover:opacity-70`}
      ></div>
      {children}
    </div>
  );
};

export default Shadow;
