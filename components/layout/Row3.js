const Row3 = ({ children }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center sm:flex-row">
      {children.map((child) => (
        <div
          key={child.key}
          className={`m-s3 mx-auto w-full flex-1 sm:m-s3 sm:flex-[0_0_calc(50%-48px)] xl:flex-[0_0_calc(33.33%-48px)]`}
        >
          <div className="flex h-full justify-center">{child}</div>
        </div>
      ))}
    </div>
  );
};

export default Row3;
