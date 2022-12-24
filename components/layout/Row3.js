const Row3 = ({ children }) => {
  return (
    <div className="-mt-2 flex flex-col flex-wrap justify-center sm:flex-row md:-mt-8">
      {children.map((child) => (
        <div
          key={child.key}
          className={`m-s2 mx-auto w-full flex-1 sm:flex-[0_0_calc(50%-24px)] md:flex-[0_0_calc(50%-48px)] xl:flex-[0_0_calc(33.33%-24px)]`}
        >
          <div className="flex h-full justify-center">{child}</div>
        </div>
      ))}
    </div>
  );
};

export default Row3;
