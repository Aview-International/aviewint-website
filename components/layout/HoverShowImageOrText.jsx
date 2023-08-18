import React, { useState } from 'react';
import Image from 'next/image';
import Border from '../UI/Border';

export default function HoverShowImageOrText({ items, borderStyle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${borderStyle&&'gap-12'}`}>
     { borderStyle ? 
     <>
      {items.map((item)=>{
        return (
          <div key={item.title}>
            <div className={`h-full rounded-2xl  bg-white-transparent flex flex-col justify-center items-center gap-y-6 py-s4
          
            `}>
              <div className="mx-auto">
                <Image src={item.image} alt={item.title} />
              </div>
              <p className={`text-3xl font-bold text-white text-center`}>
                {item.title}
              </p>
              <a className={`italic cursor-pointer text-center underline duration-300 text-white/80  block`} 
             // onMouseEnter={() => setIsHovered(true)} 
              //onMouseLeave={() => setIsHovered(false)}
              >
                Learn more
              </a>
              <p className={`hidden px-5 duration-300`}>{item.description}</p>
            </div>
          </div>
        )
      })}
     </>
     :
     <>
     {
      items.map((item)=>{
        return (
          <div key={item.title}>
          <Border classes="rounded-2xl group h-full">
            <div className="h-full rounded-2xl bg-black p-6">
              <div className="mx-auto mb-4 w-[75%] md:group-hover:hidden">
                <Image src={item.image} alt={item.title} />
              </div>
              <p className="mb-2 text-center text-5xl font-bold text-white">
                {item.title}
              </p>
              <p className="body hidden text-left group-hover:block mt-s4 cursor-pointer">
                {item.description}
              </p>
            </div>
          </Border>
        </div>
        )
      })
     }
       
     </>
     }
   </div>
  );
}


//  ${!isHovered ? 'gap-y-6 py-s4' : 'gap-y-2'}