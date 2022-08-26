import Border from '../UI/Border';
import Arrow from '../../public/img/icons/dropdown-arrow.svg';
import Image from 'next/image';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import HorizontalLine from '../UI/HorizontalLine';

const MultitpleSelectInput = ({ text, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <p className="mb-s1 text-xl text-white">{text}</p>
      <div className="relative mb-s4 text-xl text-white">
        <Border borderRadius="[5px] w-full">
          <div
            className="flex w-full cursor-pointer items-center justify-between rounded-[5px] bg-black p-s1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>Select Languages</p>
            <span className={`transition-300  ${isOpen && 'rotate-180'}`}>
              <Image src={Arrow} alt="arrow" />
            </span>
          </div>
        </Border>
        <OPTIONS isOpen={isOpen} options={options} onChange={onChange} />
      </div>
    </OutsideClickHandler>
  );
};

const OPTIONS = ({ isOpen, options, onChange }) => {
  return (
    <Border
      borderRadius="[5px]"
      classes={`w-full absolute left-0 top-[50px] transition-300 z-20 ${
        isOpen ? 'visible opacity-1' : 'invisible opacity-0'
      }`}
    >
      <div className="gradient-1 max-h-48 overflow-scroll rounded-[5px]">
        {options.map((option, i) => (
          <CHECKBOX
            option={option}
            onChange={onChange}
            key={`checkbox-option-${i}`}
          />
        ))}
      </div>
    </Border>
  );
};

const CHECKBOX = ({ option, onChange }) => {
  const [isChecked, setIschecked] = useState(false);
  return (
    <>
      <div
        onClick={(e) => {
          setIschecked(!isChecked);
          onChange(e);
        }}
        className={`flex cursor-pointer items-center bg-black p-s1 text-xl text-white`}
      >
        <span
          className={`mr-4 flex h-5 w-5 items-center justify-center ${
            isChecked ? 'gradient-1' : 'bg-white'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 border-2 border-black ${
              isChecked ? 'gradient-1' : 'bg-black'
            }`}
          ></span>
        </span>
        {option}
      </div>
      <HorizontalLine />
    </>
  );
};
export default MultitpleSelectInput;
