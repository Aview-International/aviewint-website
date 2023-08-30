const ToggleButton = ({ handleChange, isChecked }) => {
  return (
    <label
      className={`relative inline-block h-6 w-12 cursor-pointer rounded-3xl transition-all ${
        isChecked ? 'gradient-2' : 'bg-gray-1'
      }`}
    >
      <input
        type="checkbox"
        className="invisible"
        defaultChecked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`absolute top-1/2 grid h-6 w-6 -translate-y-1/2 place-content-center rounded-full p-s1 transition-all ease-linear ${
          isChecked ? 'gradient-1 left-6' : 'left-0 bg-gray-1'
        }`}
      >
        <span className={`inline-block h-5 w-5 rounded-full bg-white`}></span>
      </div>
    </label>
  );
};

export default ToggleButton;
