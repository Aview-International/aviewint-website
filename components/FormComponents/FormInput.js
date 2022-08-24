import Image from 'next/image';
import Correct from '../../public/img/icons/correct.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';
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

const FormInput = ({
  isValid,
  _id,
  label,
  onChange,
  placeholder,
  name,
  hasSubmitted,
}) => {
  return (
    <div className="relative mb-s5 w-full text-xl text-white">
      <label htmlFor={_id} className={`mb-s1 block w-full`}>
        {label}
      </label>
      <div>
        <Border classes="w-full relative" borderRadius="[5px]">
          <input
            id={_id}
            name={name}
            type="text"
            placeholder={placeholder}
            className={`peer w-full rounded-[5px] bg-black p-[6px] text-white focus:outline-none`}
            onChange={(e) => onChange(e)}
          />
          <div
            className={`gradient-1 transition-300 absolute inset-0 -z-10 h-[calc(100%+3px)] w-[calc(100%+3px)] rounded-2xl opacity-0 blur-lg peer-focus:opacity-80`}
          ></div>
        </Border>
        <span className="absolute right-[10px] top-[45px]">
          {isValid && (
            <Image src={Correct} alt="Correct" width={25} height={25} />
          )}
          {hasSubmitted && !isValid && (
            <Image src={Incorrect} alt="Incorrect" width={25} height={25} />
          )}
        </span>
      </div>
    </div>
  );
};

export default FormInput;