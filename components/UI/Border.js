const Border = ({ children, borderRadius, classes }) => {
  return (
    <div
      className={`gradient-1 p-[3px] rounded-${borderRadius} inline-block ${classes}`}
    >
      {children}
    </div>
  );
};

export default Border;
