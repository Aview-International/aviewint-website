const ToggleButton = ({ handleChange, isChecked }) => {
  return (
    <label
      className={`relative inline-block h-6 w-12 cursor-pointer rounded-3xl bg-gray-1`}
    >
      <div
        className={`gradient-2 h-full w-full rounded-3xl transition-all duration-500 ease-in-out ${
          isChecked ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      <input
        type="checkbox"
        className="invisible"
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`absolute top-1/2 grid h-6 w-6 translate-y-[-49%] place-content-center rounded-full transition-all duration-500 ease-in-out ${
          isChecked ? 'gradient-1 left-6' : 'left-0 bg-gray-1'
        }`}
      >
        <span className={`inline-block h-5 w-5 rounded-full bg-white`}></span>
      </div>
    </label>
  );
};

export default ToggleButton;
