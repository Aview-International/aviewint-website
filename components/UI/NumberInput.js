import Border from './Border';
import Shadow from './Shadow';
import Image from 'next/image';
import Correct from '../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';

const NumberInput = ({ 
  placeholder, 
  bgColor, 
  textColor,
  name, 
  label, 
  isValid, 
  hasSubmitted,
  value,
  onChange }) => {
   
  return (
    <div className="w-full flex flex-col justify-between relative">
      <label className={`mb-s1 block w-full text-xl`}>
        {label}
      </label>
       <Border borderRadius="[5px]" classes="w-full">
          <input
            placeholder={placeholder}
            type='text'
            value={value}
            name={name}
            className={`w-full rounded-sm bg-${bgColor} px-s1.5 py-1.5 text-lg text-${textColor} placeholder:font-light placeholder:text-${textColor} focus:outline-none md:text-xl`}
            onChange={onChange}
          />
          <span className="absolute right-[15px] bottom-[3px]">
            {(isValid && isValid>=0) && (
              <Image src={Correct} alt="Correct" width={20} height={20} />
             )}
            {(hasSubmitted || isNaN(isValid)) && (
              <Image src={Incorrect} alt="Incorrect" width={20} height={20} />
            )}
          </span>
        </Border>
    </div>
    );
};

export default NumberInput;
