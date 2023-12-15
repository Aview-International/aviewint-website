import React, { Fragment } from 'react';
import check from '../../../public/img/icons/check.svg';
import Image from 'next/image';
import Button from '../../UI/Button';
import Border from '../../UI/Border';

const PriceComponent = ({ item }) => {
  return (
    <>
      <div
        className={`relative rounded-2xl rounded-2xl border border-[#eceff133] bg-[#080808b5] py-s4 px-s0 md:px-s3`}
      >
        {item.title === 'BASIC' && (
          <div className="absolute left-1/2 -top-5 -translate-x-1/2">
            <Border borderRadius="3xl">
              <div className="block rounded-3xl bg-white px-3 py-1 text-center font-medium uppercase text-black">
                most popular
              </div>
            </Border>
          </div>
        )}
        <div className="flex flex-col items-center gap-y-4">
          <h5 className="gradient-text gradient-1 text-2xl font-bold">
            {item.title}
          </h5>
          <p className="text-6xl font-bold">{item.subTitle}</p>
          <p className="w-[300px] text-center md:w-[192px]">
            {item.description}
          </p>
        </div>
        <div className="w-full px-4">
          {item.options.map((option, index) => (
            <Fragment key={index}>
              <div>
                <div className="h-[1px] bg-white/50"></div>
                <div className="flex flex-row gap-2 py-3">
                  <Image src={check} alt="check-mark" />
                  <p>{option}</p>
                </div>
              </div>
              <div className="h-[1px] w-full bg-white/60"></div>
            </Fragment>
          ))}
        </div>
        <div className="mx-auto mt-s4 block flex w-full justify-center">
          <Button type={item.title === 'BASIC' ? 'primary' : 'secondary'}>
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default PriceComponent;
