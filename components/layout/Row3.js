const Row3 = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-s3 sm:grid-cols-2 sm:gap-s5 lg:grid-cols-3 xl:gap-s9">
      {children}
    </div>
  );
};

export default Row3;
