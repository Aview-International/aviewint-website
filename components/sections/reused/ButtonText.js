import React from 'react';
import Image from 'next/image';
import dropdown_arrow from '../../../public/img/icons/dropdown-arrow.svg';

const ButtonText = ({ children, setIsOpen, isOpen, labelClasses }) => {
  return (
    <button
      className={`flex w-full cursor-pointer flex-row items-center justify-between ${
        isOpen ? 'border-2 border-x-0 border-t-0 border-white/60' : ''
      } ${labelClasses}`}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      {children}
      <Image
        src={dropdown_arrow}
        alt="Dropdown Arrow"
        width={15}
        height={15}
        className={`${isOpen ? 'rotate-180' : 'rotate-0'}`}
      />
    </button>
  );
};

export default ButtonText;
