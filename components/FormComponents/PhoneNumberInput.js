import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Correct from '../../public/img/icons/correct.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';
import Image from 'next/image';
import Border from '../UI/Border';

/**
 * Phone Number input field
 *
 * @prop label: Label of the input
 * @prop onChange: Function to accept the value of the input
 * @prop value: value of the input
 *
 * @author Victor Ogunjobi
 */

const PhoneNumberInput = ({
  label,
  onChange,
  value,
  isValid,
  hasSubmitted,
}) => {
  return (
    <div className={`relative`}>
      {label && <label className="text-xl text-white">{label}</label>}
      <Border borderRadius="[5px]" classes="w-full">
        <div className={`phone-number bg-black text-white text-xl rounded-[5px]`}>
          <PhoneInput
            international
            countryCallingCodeEditable={false}
            defaultCountry="US"
            value={value}
            onChange={onChange}
          />
        </div>
        <span
          className={`absolute right-[10px] ${
            label ? 'top-[40px]' : 'top-[12px]'
          }`}
        >
          {isValid && (
            <Image src={Correct} alt="Correct" width={20} height={20} />
          )}
          {hasSubmitted && !isValid && (
            <Image src={Incorrect} alt="Incorrect" width={20} height={20} />
          )}
        </span>
      </Border>
    </div>
  );
};

export default PhoneNumberInput;
