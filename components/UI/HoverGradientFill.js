const HoverGradientFill = ({ borderRadius }) => {
  return (
    <div
      className={`gradient-1 transition-300 absolute inset-0 -m-[1px] rounded-${borderRadius} opacity-0 group-hover:opacity-100`}
    ></div>
  );
};

export default HoverGradientFill;
