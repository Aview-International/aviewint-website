const Border = ({ children, borderRadius, classes, padding = 'p-[2px]' }) => {
  return (
    <div
      className={`gradient-1 ${padding} rounded-${borderRadius} inline-block ${classes}`}
    >
      {children}
    </div>
  );
};

export default Border;
