/**
 * DottedBorder Component
 *
 * @prop children - Children to be rendered inside the border
 * @prop borderRadius: Radius of the border, defaults to 15px
 *
 * @author Victor Ogunjobi
 *
 */
const DottedBorder = ({ children, borderRadius }) => {
  return (
    <div
      className={`gradient-1 rounded-[15px] border-4 border-dashed bg-origin-border`}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div className="bg-black rounded-[15px]">{children}</div>
    </div>
  );
};

export default DottedBorder;
