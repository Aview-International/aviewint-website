const Container = ({
  left,
  right,
  isHeaderSection = false,
  isColumn = false,
  isBottomLine = false,
}) => {
  return (
    <div className="w-full py-s1.5">
      <div
        className={`flex ${
          isColumn ? 'flex-col items-start gap-y-3' : 'flex-row items-center'
        } ${!isHeaderSection ? 'justify-start' : 'justify-between'}`}
      >
        <div className={`${isColumn ? 'w-full' : 'basis-1/3'}`}>{left}</div>
        <div className="">{right}</div>
      </div>
      <div
        className={`border-b border-b-white/10 ${
          isBottomLine ? 'hidden' : 'block py-s1.5 '
        }`}
      ></div>
    </div>
  );
};

export default Container;
