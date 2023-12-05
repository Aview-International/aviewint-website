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
      className={`rounded-2xl border-dashed bg-origin-border ${classes}`}
      style={{ borderRadius }}
    >
      <div className="rounded-[10px]">{children}</div>
    </div>
  );
};

export default DottedBorder;
