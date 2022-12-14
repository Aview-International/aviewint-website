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
      {label && (
        <label className="mb-s1 block text-xl text-white">{label}</label>
      )}
      <Border borderRadius="[5px]" classes="w-full">
        <div
          className={`phone-number rounded-[5px] bg-black text-xl text-white`}
        >
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
            label ? 'top-[40px]' : 'top-[9px]'
          }`}
        >
          {isValid && (
            <Image src={Correct} alt="Correct" width={30} height={30} />
          )}
          {hasSubmitted && !isValid && (
            <Image src={Incorrect} alt="Incorrect" width={30} height={30} />
          )}
        </span>
      </Border>
    </div>
  );
};

export default PhoneNumberInput;
