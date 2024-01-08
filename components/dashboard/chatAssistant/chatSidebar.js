import React, { Fragment, useEffect } from 'react';
import Image from 'next/image';
import aviewLogo from '../../../public/img/aview/logo.svg';
import Edit from '../../../public/img/icons/edit.svg';

const ChatSidebar = ({ titleArray, handleNewThread, isNewThread }) => {

  useEffect(() => {
    console.log("new thread", isNewThread)
  },[isNewThread])

  return (
    <div className="bg-gray-200 relative flex w-full flex-col overflow-y-auto px-2">
      <div
        className="sticky top-0 z-20 mx-auto my-4 flex w-11/12 cursor-pointer flex-row items-center justify-between py-2 px-1 hover:rounded-md hover:bg-white-transparent"
        onClick={() => handleNewThread()}
      >
        <Image
          src={aviewLogo}
          alt="aview-logo"
          width={30}
          height={30}
          className="cursor-pointer rounded-full"
        />
        <p className="text-xl font-medium">New chat</p>
        <Image src={Edit} alt="edit-logo" width={20} height={20} />
      </div>
      <div className="flex w-full flex-col gap-y-4 mt-10">
        {titleArray.length > 0 ? (
          <Fragment>
            {titleArray.map((title) => {
              return (
                <div key={title.id} className="rounded-md bg-white-transparent cursor-pointer">
                  <p className=" font-medium whitespace-nowrap w-full overflow-hidden text-ellipsis p-3">{title.titleText}</p>
                </div>
              );
            })}
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default ChatSidebar;
