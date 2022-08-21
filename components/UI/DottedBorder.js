/**
 * DottedBorder Component
 *
 * @prop children - Children to be rendered inside the border
 * @prop borderRadius: Radius of the border, defaults to 15px
 *
 * @author Victor Ogunjobi
 *
 */
const DottedBorder = ({ children, borderRadius, classes }) => {
  return (
    <div
      className={`gradient-1 rounded-[15px] border-4 border-dashed bg-origin-border ${classes}`}
      style={{
        borderRadius: borderRadius,
      }}
    >
      <div className="rounded-[10px] bg-black">{children}</div>
    </div>
  );
};

export default DottedBorder;
