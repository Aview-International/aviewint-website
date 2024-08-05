import aviewLogo from '../../../public/img/aview/logo.svg';
import SendIcon from '../../../public/img/icons/send-message.svg';
import Image from 'next/image';
import FormInput from '../../FormComponents/FormInput';

export const chatOptions = [
  {
    optionTitle: 'Title',
    sectionText: 'for a video about dogs',
    query: 'Generate a title for a video about dogs',
  },
  {
    optionTitle: 'Hashtag',
    sectionText: 'for a vlog about a day in life',
    query: 'Generate a hashtag for a vlog about a day in life',
  },
  {
    optionTitle: 'Video Script',
    sectionText: 'for a video about tech new in japanese',
    query: 'Generate a video script for a video about tech new in japanese',
  },
  {
    optionTitle: 'Video Script',
    sectionText: 'for a video about tech new in japanese',
    query: 'Generate a video script for a video about tech new in japanese',
  },
];

export const MessageContent = ({ content, role, picture }) => {
  return (
    <div
      className={`mb-12 flex w-full items-start ${
        role === 'assistant'
          ? 'flex-row text-start'
          : 'flex-row-reverse text-right'
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
        <p className={`mr-s2 font-semibold`}>
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

export const ChatSuggestions = ({ handleSubmit }) => {
  return (
    <div className="mx-auto grid w-10/12 grid-cols-2 gap-4 px-s7">
      {chatOptions.map((chatOption, index) => (
        <button
          key={index}
          onClick={() => handleSubmit(null, chatOption.query)}
          className={`rounded-lg border border-white/40 p-2 text-start hover:bg-white-transparent`}
        >
          <p className="font-semibold text-white/90">
            Generate a {chatOption.optionTitle}
          </p>
          <p className="text-sm text-white/50">{chatOption.sectionText}</p>
        </button>
      ))}
    </div>
  );
};

export const ChatForm = ({ handleSubmit, isLoading, value, onChange }) => {
  return (
    <form
      className="mx-auto my-s2 flex w-full items-center"
      onSubmit={isLoading ? null : handleSubmit}
    >
      <FormInput
        placeholder="Message Aview"
        extraClasses="mb-0"
        value={value}
        onChange={onChange}
      />

      <button
        type="submit"
        className="mx-s1 flex items-center justify-center p-s1"
        disabled={isLoading}
      >
        <Image src={SendIcon} alt="Send" width={24} height={24} />
      </button>
    </form>
  );
};
