import Border from '../UI/Border';
import Arrow from '../../public/img/icons/dropdown-arrow.svg';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import HorizontalLine from '../UI/HorizontalLine';
import Correct from '../../public/img/icons/green-check-circle.svg';
import Incorrect from '../../public/img/icons/incorrect.svg';

const MultipleSelectInput = ({
  answer,
  text,
  options,
  hasSubmitted,
  onChange,
  hideCheckmark,
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
      <p className="mb-s1 text-xl">{text}</p>
      <div className="relative mb-s4 text-xl" ref={elementRef}>
        <Border borderRadius="[5px] w-full">
          <div
            className="flex w-full cursor-pointer items-center justify-between rounded-[5px] bg-black p-s1"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="text-white/70">
              {answer.length != 0
                ? answer.length === 1
                  ? `${answer[0]}`
                  : `${answer[0]}, ${answer.length > 1 ? answer[1] : ''},${
                      answer.length > 2 ? ` ${answer[2]}` : ''
                    }${answer.length > 3 ? ',...' : ''}`
                : 'Your response'}
            </p>
            <span className={`transition-300  ${isOpen && 'rotate-180'}`}>
              <Image src={Arrow} alt="arrow" />
            </span>
          </div>
        </Border>
        {!hideCheckmark && (
          <span className="absolute right-[35px] bottom-[7px]">
            {answer.length > 0 && !isOpen && (
              <Image src={Correct} alt="Correct" width={20} height={20} />
            )}
            {hasSubmitted && !answer && (
              <Image src={Incorrect} alt="Incorrect" width={20} height={20} />
            )}
          </span>
        )}
        <OPTIONS
          isOpen={isOpen}
          options={options}
          onChange={onChange}
          selectedAnswer={answer}
          isBottom={isBottom}
        />
      </div>
    </OutsideClickHandler>
  );
};

const OPTIONS = ({ isOpen, options, onChange, selectedAnswer, isBottom }) => {
  return (
    <Border
      borderRadius="[5px]"
      classes={`w-full absolute left-0 ${
        isBottom ? 'bottom-full' : 'top-full'
      } transition-300 z-20 overflow-x-hidden ${
        isOpen ? 'visible opacity-1' : 'invisible opacity-0'
      }`}
    >
      <div className="gradient-1 max-h-60 rounded-[5px]">
        {options.map((option, i) => (
          <CHECKBOX
            option={option}
            onChange={onChange}
            selectedAnswer={selectedAnswer}
            key={`checkbox-option-${i}`}
          />
        ))}
      </div>
    </Border>
  );
};

const CHECKBOX = ({ selectedAnswer, option, onChange }) => {
  return (
    <>
      <div
        onClick={() => onChange(option)}
        className={`flex cursor-pointer items-center bg-black p-s1 text-xl text-white`}
      >
        <span
          className={`mr-4 flex h-5 w-5 items-center justify-center ${
            selectedAnswer.includes(option) ? 'gradient-1' : 'bg-white'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 border-2 border-black ${
              selectedAnswer.includes(option) ? 'gradient-1' : 'bg-black'
            }`}
          ></span>
        </span>
        {option}
      </div>
      <HorizontalLine />
    </>
  );
};

export default MultipleSelectInput;
