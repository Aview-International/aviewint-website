const Border = ({
  children,
  borderRadius,
  classes,
  padding = 'p-[2px]',
  testId,
}) => {
  return (
    <div
      data-test={testId}
      className={`gradient-1 ${padding} rounded-${borderRadius} inline-block ${classes}`}
    >
      {children}
    </div>
  );
};

export default Border;
