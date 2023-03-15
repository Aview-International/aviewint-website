import React from 'react';
import Loader from '../../UI/loader';

const OnBoardingAccounts = ({
  account,
  clickEvent = () => null,
  classes,
  isLoading,
}) => {
  return (
    <>
      <div className="relative my-s2">
        <button className={`${classes}`} onClick={clickEvent}>
          {isLoading ? <Loader /> : account}
        </button>
      </div>
    </>
  );
};

export default OnBoardingAccounts;
