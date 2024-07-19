import React from 'react';
import Link from 'next/link';
import LoaderAnime from '../UI/loader';
import Shadow from '../UI/Shadow';
import Border from '../UI/Border';
import HoverGradientFill from '../UI/HoverGradientFill';

const GlobalButton = ({
  children,
  isLoading,
  onClick,
  disabled,
  theme,
  type,
  purpose,
  route,
  externalLink,
  fullWidth,
  extraClasses = 'px-10',
}) => {
  const buttonContent = (
    <div
      className={`
        ${type === 'primary' && `gradient-1 text-black`}
        ${type === 'secondary' && `bg-black text-white hover:text-black`}
        ${type === 'tertiary' && `border-[3px] border-solid border-white bg-transparent text-white hover:bg-white hover:text-black`}
        transition-300 relative block cursor-pointer rounded-full pt-s1.5 pb-s1 text-lg font-medium ${extraClasses} ${
        fullWidth ? 'w-full text-center' : 'w-max'
      }`}
    >
      {type === 'secondary' && (
        <HoverGradientFill
          borderRadius="full"
          classes={fullWidth ? 'w-full' : ''}
        />
      )}
      <span className="relative">{isLoading ? <LoaderAnime /> : children}</span>
    </div>
  );

  let button = buttonContent;

  if (purpose === 'route') {
    button = (
      <Link href={route}>
        <a>{buttonContent}</a>
      </Link>
    );
  } else if (purpose === 'submit') {
    button = (
      <button type="submit" disabled={disabled}>
        {buttonContent}
      </button>
    );
  } else if (purpose === 'onClick') {
    button = (
      <div onClick={isLoading ? () => null : onClick}>
        {buttonContent}
      </div>
    );
  } else if (purpose === 'externalLink') {
    button = (
      <a href={externalLink} target="_blank" rel="noreferrer">
        {buttonContent}
      </a>
    );
  }

  if (type !== 'tertiary' && theme !== 'error') {
    button = (
      <Shadow classes={fullWidth ? 'w-full' : ''}>
        <Border borderRadius="full" classes={fullWidth ? 'w-full' : ''}>
          {button}
        </Border>
      </Shadow>
    );
  }

  return (
    disabled ? (
      <button
        className={`transition-300 w-full cursor-not-allowed rounded-full bg-gray-1 pt-s1.5 pb-s1 text-lg font-medium text-black ${extraClasses}`}
        onClick={null}
        disabled
      >
        {children}
      </button>
    ) : theme === 'error' ? (
      <button
        className="w-full rounded-full bg-red p-3"
        onClick={isLoading ? () => null : onClick}
      >
        {isLoading ? <LoaderAnime /> : children}
      </button>
    ) : (
      button
    )
  );
};

export default GlobalButton;
