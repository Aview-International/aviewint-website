const Border = ({ children, borderRadius }) => {
  return (
    <div className={`gradient-1 p-[3px] rounded-${borderRadius}`}>
      {children}
    </div>
  );
};

export default Border;
