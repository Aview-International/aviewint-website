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
        className={`block w-full rounded-full border-2 p-s1.5 text-center ${
          isAccountConnected ? classes : ''
        } ${
          (account === 'Facebook' ||
            account === 'TikTok' ||
            account === 'Instagram') &&
          'cursor-not-allowed'
        }`}
        onClick={clickEvent}
      >
        {isLoading ? <Loader /> : account}{' '}
        {(account === 'Facebook' ||
          account === 'TikTok' ||
          account === 'Instagram') && <span>(Coming soon)</span>}
      </button>
      {isAccountConnected && (
        <span className="absolute -right-12 top-1/2 -translate-y-1/2">
          <Image src={GreenCheckmark} alt="connect" />
        </span>
      )}
    </div>
  );
};

export default OnBoardingAccounts;
