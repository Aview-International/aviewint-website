import React from 'react';
import check from '../../../public/img/icons/check.svg';
import Image from 'next/image';
import Button from '../../UI/Button';
import Border from '../../UI/Border';

const PriceComponent = ({ item }) => {
  return (
    <>
      <div className={`relative h-[634px] md:h-[820px] flex flex-col items-center justify-between py-s4 px-s0 md:px-s3 bg-white-transparent rounded-2xl cursor-pointer`}>
        <div className="flex flex-col gap-y-4 items-center">
          <h5 className="text-2xl font-bold gradient-text gradient-1">{item.title}</h5>
          <p className="text-6xl font-bold">{item.subTitle}</p>
          <p className="w-[300px] md:w-[192px] text-center">{item.description}</p>
        </div>
        <div className='w-full px-4'>
          {
            item.options.map((option,index) => {
            return (
              <>
               <div>
                <div className='h-[1px] bg-white/50'></div>
                 <div className="flex flex-row gap-2 py-3" key={index}>
                  <Image src={check} alt="check-mark"/>
                  <p>{option}</p>
                 </div>
               </div>
              <div className='w-full h-[1px] bg-white/60'></div>
              </>
            )})
          }
        </div>
        <Button type={`${item.title==="Basic" ? 'primary' : 'secondary' }`}>
          Get Started
        </Button>
        {item.title === "Basic" &&
          <div className="absolute -top-5">
            <Border borderRadius="3xl">
              <div className="block text-center px-3 py-1 bg-white rounded-3xl text-black font-medium uppercase">
                most popular
              </div>
            </Border>
          </div>
        }
      </div>
    </>
  )
};

export default PriceComponent;
