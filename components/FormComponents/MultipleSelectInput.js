import Border from '../UI/Border';
import Arrow from '../../public/img/icons/dropdown-arrow.svg';
import Image from 'next/image';
import { useMemo, useRef, useState } from 'react';
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
  const scroll = typeof window !== 'undefined' && window.scrollY;

  const [isOpen, setIsOpen] = useState(false);
  const selectedAnswer = useMemo(() => {
    return answer;
  });

  const isBottom = useMemo(() => {
    const elementPosition = elementRef.current?.offsetTop;
    const windowHeight = typeof window !== 'undefined' && window.outerHeight;

    if (elementPosition > windowHeight / 2) return true;
    else return false;
  }, [elementRef.current?.offsetTop, scroll]);

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
              {selectedAnswer.length != 0
                ? selectedAnswer.length === 1
                  ? `${selectedAnswer[0]}`
                  : `${selectedAnswer[0]}, ${
                      selectedAnswer.length > 1 ? selectedAnswer[1] : ''
                    },${
                      selectedAnswer.length > 2 ? ` ${selectedAnswer[2]}` : ''
                    }${selectedAnswer.length > 3 ? ',...' : ''}`
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
          selectedAnswer={selectedAnswer}
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
