/**
 * Reusable radio input field
 *
 * @prop chosenValue: The value of the field the input will update
 * @prop onChange: Callback when input is triggered
 * @prop name: Name of the input
 * @prop value: Value of the input
 *
 * @author Victor Ogunjobi
 */

const RadioInput = ({ chosenValue, onChange, name, value }) => {
  return (
    <label
      className={`flex cursor-pointer items-center rounded-full text-xl text-white`}
    >
      <span
        className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full ${
          value === chosenValue ? 'gradient-1' : 'bg-white'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 rounded-full border-2 border-black ${
            value === chosenValue ? 'gradient-1' : 'bg-black'
          }`}
        ></span>
      </span>
      <input
        type="radio"
        onChange={onChange}
        name={name}
        value={value}
        className="hidden"
      />
      {value}
    </label>
  );
};

export default RadioInput;
