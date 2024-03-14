const MoreSettings = ({ handler }) => {
  return (
    <div
      className="mb-1 mr-2 flex cursor-pointer flex-row items-center justify-start gap-x-[1px] rounded-full bg-gray-1 p-1"
      onClick={handler}
    >
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
      <div className="h-[4px] w-[4px] rounded-full bg-white"></div>
    </div>
  );
};

export default MoreSettings;
