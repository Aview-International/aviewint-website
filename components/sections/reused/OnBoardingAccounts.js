import React from 'react';
import Loader from '../../UI/loader';
import GreenCheckmark from '../../../public/img/icons/green-check-circle.svg';
import Image from 'next/image';

const OnBoardingAccounts = ({
  account,
  clickEvent = () => null,
  classes,
  isLoading,
  isAccountConnected,
}) => {
  return (
    <div className="relative my-s2">
      <button
        className={`flex w-full items-center justify-center rounded-full border-2 p-s1.5 text-center ${
          isAccountConnected ? `${classes} size` : ''
        } ${
          (account === 'Facebook' || account === 'TikTok') &&
          'cursor-not-allowed'
        }`}
        onClick={clickEvent}
      >
        {isLoading ? <Loader /> : account}{' '}
        {(account === 'Facebook' || account === 'TikTok') && (
          <span data-test="coming-soon-text">(Coming soon)</span>
        )}
      </button>
      {isAccountConnected && (
        <span
          data-test="checkMark"
          className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center"
        >
          <Image src={GreenCheckmark} alt="connect" />
        </span>
      )}
    </div>
  );
};

export default OnBoardingAccounts;
