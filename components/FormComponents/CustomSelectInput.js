import Border from '../UI/Border';
import Arrow from '../../public/img/icons/dropdown-arrow.svg';
import Image from 'next/image';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Correct from '../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';

const CustomSelectInput = ({
  text,
  options,
  onChange,
  hasSubmitted,
  isValid,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState('');

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className="relative mb-s4 text-xl text-white">
        <p className="mb-s1">{text}</p>
        <Border borderRadius="[5px] w-full">
          <div
            className="flex w-full cursor-pointer items-center justify-between rounded-md bg-black p-s1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>{data || 'Select'}</p>
            <span className={`transition-300  ${isOpen && 'rotate-180'}`}>
              <Image src={Arrow} alt="arrow" />
            </span>
          </div>
        </Border>
        <span className="absolute right-[35px] bottom-[7px]">
          {isValid && (
            <Image src={Correct} alt="Correct" width={20} height={20} />
          )}
          {hasSubmitted && !isValid && (
            <Image src={Incorrect} alt="Incorrect" width={20} height={20} />
          )}
        </span>
        <Options
          isOpen={isOpen}
          setData={setData}
          options={options}
          setIsOpen={setIsOpen}
          onChange={onChange}
        />
      </div>
    </OutsideClickHandler>
  );
};

const Options = ({ isOpen, setData, options, setIsOpen, onChange }) => {
  return (
    <Border
      borderRadius="[5px]"
      classes={`w-full absolute left-0 top-full z-10 transition-300 ${
        isOpen ? 'visible opacity-1' : 'invisible opacity-0'
      }`}
    >
      <div className="gradient-1 rounded-[5px]">
        {options.map((option, i) => (
          <p
            className="my-[2px] cursor-pointer bg-black p-s1"
            key={`option-${i}`}
            onClick={() => {
              onChange(option);
              setData(option);
              setIsOpen(false);
            }}
          >
            {option}
          </p>
        ))}
      </div>
    </Border>
  );
};

export default CustomSelectInput;
