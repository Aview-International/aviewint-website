import { useState, Fragment, useEffect, useRef } from 'react';
import Image from 'next/image';
import icon from '../../../public/img/team/chandhu.png';
import aviewLogo from '../../../public/img/aview/logo.svg';
import DropDownIcon from '../../../public/img/icons/dropdown-arrow.svg';
import hashtag_generator from '../../../public/img/icons/hashtag_generator.svg';
import title_generator from '../../../public/img/icons/title_generator.svg';
import videoScript from '../../../public/img/icons/videoScript.svg';
import RadioInput from '../../FormComponents/RadioInput';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../store/reducers/user.reducer';

const optionSelector = [
  {
    image: hashtag_generator,
    optionTitle: 'Title',
  },
  {
    image: title_generator,
    optionTitle: 'Hashtag',
  },
  {
    image: videoScript,
    optionTitle: 'Video Script',
  },
];

const chatOptions = [
  {
    sectionText: 'for a video about dogs',
  },
  {
    sectionText: 'for a vlog about a day in life',
  },
  {
    sectionText: 'for a video about tech new in japanese',
  },
  {
    sectionText: 'for a video about how to get...',
  },
];

const ChatContent = ({
  onSendMessage,
  isFetching,
  onListMessages,
  messages,
  isNewThread,
}) => {
  const [isOptionActive, setIsOptionActive] = useState(false);
  const { chatAssistantOption } = useSelector((state) => state.user);
  const [option, setOption] = useState(chatAssistantOption);
  const dispatch = useDispatch();

  const handleOption = () => {
    setIsOptionActive(!isOptionActive);
  };

  const optionButtonHandler = (e) => {
    
   
    dispatch(setUser({ chatAssistantOption: e.target.value }));
  };


  return (
    <div className="flex h-screen w-full flex-row text-white">
      <div className="w-[18%]">
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
            {optionSelector.map((optionObject, index) => {
              return (
                <div
                  key={index}
                  className="my-2 flex w-full flex-row items-start justify-between"
                >
                  <Image
                    src={optionObject.image}
                    alt={`${optionObject.optionTitle}`}
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
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative h-full w-[82%]">
        <ChatMessage messages={messages} onSendMessage={onSendMessage} />
      </div>
    </div>
  );
};

const ChatMessage = ({ messages, onSendMessage }) => {
  const chatRef = useRef(null);
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputText, setInputText] = useState('');
  const { chatAssistantOption } = useSelector((state) => state.user);

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mt-10 flex-1 overflow-y-auto">
        {messages.length > 0 ? (
          <Fragment>
            {messages.map((item, index) => {
              if (checkEvenOrOdd(index)) {
                return (
                  <Fragment key={index}>
                    <div className="flex w-11/12 flex-row items-start justify-start gap-x-5 pl-2">
                      <div className="">
                        <Image
                          src={icon}
                          alt="profile-icon"
                          width={50}
                          height={50}
                          className="cursor-pointer rounded-full"
                        />
                      </div>
                      <div className="">
                        <p className="block w-full">You</p>
                        <p className="mt-1 block w-full whitespace-pre-wrap">
                          {messages[messages.length - 1 - index].value}
                        </p>
                      </div>
                    </div>
                  </Fragment>
                );
              } else {
                return (
                  <Fragment key={index}>
                    <div className="mb-12 flex w-full flex-row items-start justify-center gap-x-5 pl-2">
                      <div className="flex-none">
                        <Image
                          src={aviewLogo}
                          alt="aview-logo"
                          width={50}
                          height={50}
                          className="cursor-pointer rounded-full"
                        />
                      </div>
                      <div className="grow">
                        <p
                          className="mt-1.5 block h-full w-full text-start"
                          ref={chatRef}
                        >
                          {messages[messages.length - 1 - index].value}
                        </p>
                      </div>
                    </div>
                  </Fragment>
                );
              }
            })}
          </Fragment>
        ) : (
          <Fragment>
            <div className="flex h-full w-11/12 flex-col">
              <StaticContent
                promptHeader={chatAssistantOption}
                inputHandler={onSendMessage}
              />
            </div>
          </Fragment>
        )}
      </div>
      <div className="mt-5 mb-2 flex h-10 w-11/12 flex-row text-white">
        <input
          type="text"
          className="border-blue-200 w-5/6 rounded-md border-none bg-white-transparent p-2 outline-none"
          value={inputText}
          placeholder="Message Aview..."
          onChange={(e) => {
            setIsInputActive(!isInputActive);
            setInputText(e.target.value);
          }}
          onMouseUp={handleSendMessage}
        />
        <button
          className="bg-blue-500 w-1/6 rounded-lg p-2"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const StaticContent = ({ promptHeader, inputHandler }) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const handleMessageInput = (text) => {
    inputHandler(text);
    setIsInputActive(true);
  };

  return (
    <Fragment>
      {!isInputActive ? (
        <Fragment>
          <div className="flex flex-1 flex-col items-center justify-center gap-y-6">
            <Image
              src={aviewLogo}
              alt="aview-logo"
              width={60}
              height={60}
              className="cursor-pointer"
            />
            <p className="text-2xl font-bold">How can we help today ?</p>
          </div>
          <div className="h-30 mx-auto grid w-full grid-cols-2 gap-4">
            {chatOptions.map((chatOption, index) => {
              return (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg border-2 border-white p-2 text-start text-white`}
                  onClick={() =>
                    handleMessageInput(
                      `Generate a ${promptHeader}${' '}${
                        chatOption.sectionText
                      }`
                    )
                  }
                >
                  <p className="text-base font-semibold">
                    Generate a {promptHeader}
                  </p>
                  <p className="text-sm font-medium text-white/50">
                    {chatOption.sectionText}
                  </p>
                </div>
              );
            })}
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default ChatContent;
