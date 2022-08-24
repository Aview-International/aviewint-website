import Border from '../UI/Border';
import Arrow from '../../public/img/icons/dropdown-arrow.svg';
import Image from 'next/image';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const SelectInput = ({ text, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState('');

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className="relative mb-s4 text-xl text-white">
        <p className="mb-s1">{text}</p>
        <Border borderRadius="[5px] w-full">
          <div
            className="flex w-full cursor-pointer items-center justify-between rounded-[5px] bg-black p-s1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>{data || 'Select'}</p>
            <span className={`transition-300  ${isOpen && 'rotate-180'}`}>
              <Image src={Arrow} alt="arrow" />
            </span>
          </div>
        </Border>
        <OPTIONS
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
const OPTIONS = ({ isOpen, setData, options, setIsOpen, onChange }) => {
  return (
    <Border
      borderRadius="[5px]"
      classes={`w-full absolute left-0 top-[84px] z-10 transition-300 ${
        isOpen ? 'visible opacity-1' : 'invisible opacity-0'
      }`}
    >
      <div className="gradient-1 rounded-[5px]">
        {options.map((option, i) => (
          <p
            className="my-[2px] bg-black p-s1"
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

export default SelectInput;
