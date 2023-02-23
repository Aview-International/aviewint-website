import React from 'react'

const OnBoardingAccounts = ({account,clickEvent='',classes}) => {
  return (
    <>
       <div className="relative my-s2">
          <button
            className={`${classes}`}
            onClick={clickEvent}
          >
            {account}
          </button>
        </div>
    </>
  )
}

export default OnBoardingAccounts
