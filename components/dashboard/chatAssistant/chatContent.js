import aviewLogo from '../../../public/img/aview/logo.svg';
// import DropDownIcon from '../../../public/img/icons/dropdown-arrow.svg';
// import RadioInput from '../../FormComponents/RadioInput';
// import { setUser } from '../../../store/reducers/user.reducer';
import SendIcon from '../../../public/img/icons/send-message.svg';
import Image from 'next/image';
import FormInput from '../../FormComponents/FormInput';
import GradientLoader from '../../../public/loaders/GradientLoader';

export const chatOptions = [
  {
    optionTitle: 'Title',
    sectionText: 'for a video about dogs',
  },
  {
    optionTitle: 'Hashtag',
    sectionText: 'for a vlog about a day in life',
  },
  {
    optionTitle: 'Video Script',
    sectionText: 'for a video about tech new in japanese',
  },
  {
    optionTitle: 'Video Script',
    sectionText: 'for a video about tech new in japanese',
    sectionText: 'for a video about how to get...',
  },
];

// const handleOption = () => {
//   setIsOptionActive(!isOptionActive);
// };

// const optionButtonHandler = (e) => {
//   dispatch(setUser({ chatAssistantOption: e.target.value }));
// };

// {
/* <div className="w-[18%]">
        <div className="h-full w-full">
        <div
        className={`flex cursor-pointer items-center justify-center rounded-md bg-white-transparent p-2`}
        onClick={handleOption}
        >
        <p className="mr-4 font-medium">{option} Generator</p>
        <div>
        <Image
        src={DropDownIcon}
        alt="chat-navigator"
        width={15}
        height={15}
        />
        </div>
        </div>
        <div
        className={`absolute z-20 mt-3 rounded-md bg-black p-2 ${
          !isOptionActive ? 'hidden' : 'block'
        }`}
        onMouseLeave={() => setIsOptionActive(!isOptionActive)}
        >
        {optionSelector.map((optionObject, index) => (
          <div
          key={index}
          className="my-2 flex w-full flex-row items-start justify-between"
          >
          <Image
          src={optionObject.image}
          alt={optionObject.optionTitle}
          width={20}
          height={20}
          />
          <p className="mx-3 w-full whitespace-nowrap text-base font-medium">
          {optionObject.optionTitle} Generator
          </p>
          <RadioInput
          chosenValue={option}
          onChange={optionButtonHandler}
          name={optionObject.optionTitle}
          value={optionObject.optionTitle}
          />
          </div>
          ))}
          </div>
          </div>
          </div> */

export const MessageContent = ({ content, role, picture }) => {
  return (
    <div
      className={`mb-12 flex w-full items-start ${
        role === 'assistant' ? 'flex-row text-start' : 'flex-row-reverse text-right'
      }`}
    >
      <div className={`flex-none`}>
        <Image
          src={role === 'assistant' ? aviewLogo : picture}
          alt="picture"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="grow pl-5">
        <p className={`font-semibold mr-s2`}>
          {role === 'assistant' ? 'Aview' : 'You'}
        </p>
        {content.map(({ text }, i) => (
          <p key={i} className={`mt-1.5`}>
            {text.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export const ChatSuggestions = () => {
  return (
    <div className="mx-auto grid w-8/12 grid-cols-2 gap-4">
      {chatOptions.map((chatOption, index) => (
        <div
          key={index}
          className={`cursor-pointer rounded-lg border border-white/40 p-2 text-start hover:bg-white-transparent`}
        >
          <p className="font-semibold text-white/90">
            Generate a {chatOption.optionTitle}
          </p>
          <p className="text-sm text-white/50">{chatOption.sectionText}</p>
        </div>
      ))}
    </div>
  );
};

export const ChatForm = ({ handleSubmit, formRef, isLoading }) => {
  return (
    <form
      className="mx-auto my-s2 block flex w-10/12 items-center"
      onSubmit={isLoading ? null : handleSubmit}
      ref={formRef}
    >
      <FormInput placeholder="Message Aview" extraClasses="mb-0" />

      <button
        type="submit"
        className="mx-s1 flex items-center justify-center p-s1"
        disabled={isLoading}
      >
        {isLoading ? (
          <GradientLoader />
        ) : (
          <Image src={SendIcon} alt="Send" width={24} height={24} />
        )}
      </button>
    </form>
  );
};
