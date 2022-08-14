const Row4 = ({ children }) => {
  return (
    <div className="grid grid-cols-1 gap-y-s4 2xs:grid-cols-2 2xs:gap-x-s1 md:gap-x-s2.5 md:gap-y-s6 lg:gap-x-s10 xl:grid-cols-4 xl:gap-x-s2.5">
      {children}
    </div>
  );
};

export default Row4;
