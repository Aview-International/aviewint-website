const Border = ({ children, borderRadius, classes, padding = '2px' }) => {
  return (
    <div
      className={`gradient-1 p-[${padding}] rounded-${borderRadius} inline-block ${classes}`}
    >
      {children}
    </div>
  );
};

export default Border;
