import Border from '../UI/Border';
import Arrow from '../../public/img/icons/dropdown-arrow.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Correct from '../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';

const CustomSelectInput = ({
  text,
  options,
  onChange,
  hasSubmitted,
  isValid,
  hideCheckmark,
  value,
}) => {
  const elementRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isBottom, setisBottom] = useState(false);

  useEffect(() => {
    const windowHeight = window.outerHeight;

    const updateElementPosition = () => {
      const element = elementRef.current;
      if (element && isOpen) {
        const rect = element.getBoundingClientRect();
        if (rect.top > windowHeight / 2) setisBottom(true);
        else return setisBottom(false);
      }
    };

    updateElementPosition();
  }, [isOpen]);

  return (
    <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
      <div className="relative mb-s4 text-xl text-white" ref={elementRef}>
        <p className="mb-s1">
          <span class="after:content-['*'] after:ml-0.5">
           {text}
          </span>
        </p>
        <Border borderRadius="[5px] w-full">
          <div
            className="flex w-full cursor-pointer items-center justify-between rounded-md bg-black p-s1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-white/70">{value || 'Your response'}</p>
            <span className={`transition-300  ${isOpen && 'rotate-180'}`}>
              <Image src={Arrow} alt="arrow" />
            </span>
          </div>
        </Border>
        {!hideCheckmark && (
          <span className="absolute right-[35px] bottom-[7px]">
            {isValid && (
              <Image src={Correct} alt="Correct" width={20} height={20} />
            )}
            {hasSubmitted && !isValid && (
              <Image src={Incorrect} alt="Incorrect" width={20} height={20} />
            )}
          </span>
        )}
        <Options
          isOpen={isOpen}
          options={options}
          setIsOpen={setIsOpen}
          onChange={onChange}
          isBottom={isBottom}
        />
      </div>
    </OutsideClickHandler>
  );
};

const Options = ({ isOpen, options, setIsOpen, onChange, isBottom }) => {
  return (
    <Border
      borderRadius="[5px]"
      classes={`w-full absolute left-0 ${
        isBottom ? 'bottom-1/2' : 'top-full'
      } mt-3 z-10 transition-300 max-h-[300px] overflow-x-hidden overflow-y-scroll ${
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
