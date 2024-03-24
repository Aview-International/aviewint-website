import Border from '../UI/Border';

/**
 * Reusable input field
 *
 * @prop label: Label of the input
 * @prop onChange: Function to accept the value of the input
 * @prop value: value of the input
 * @prop isValid: Whether the input is valid
 * @prop _id: ID of the input
 * @prop placeholder: Placeholder for the input
 * @prop name: Name of the input
 * @prop type: Type of the input
 * @prop hasSubmitted: Whether the input has been submitted
 *
 * @author Victor Ogunjobi
 */

const Textarea = ({
  _id,
  label,
  onChange,
  placeholder,
  value,
  name,
  bgColor,
  textBlack,
  extraClasses,
}) => {
  return (
    <div className={`relative w-full text-lg ${extraClasses ? `${extraClasses}` : 'mb-s5'}`}>
      <label htmlFor={_id} className="mb-s1 block w-full">
        {label}
      </label>
      <div>
        <Border classes="w-full relative" borderRadius="[5px]">
          <textarea
            id={_id}
            name={name}
            type="text"
            placeholder={placeholder}
            className={`peer block min-h-[120px] w-full resize-none rounded-[5px] px-s1 py-2 text-white focus:outline-none ${
              bgColor ? bgColor : 'bg-black'
            } ${textBlack ? 'text-black' : 'text-white'}`}
            onChange={onChange}
            value={value}
          ></textarea>
          <div
            className={`gradient-1 transition-300 absolute inset-0 -z-10 h-[calc(100%+3px)] w-[calc(100%+3px)] rounded-2xl opacity-0 blur-lg peer-focus:opacity-80`}
          ></div>
        </Border>
      </div>
    </div>
  );
};

export default Textarea;
