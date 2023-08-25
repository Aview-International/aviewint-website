import React, { useState } from 'react';
import Image from 'next/image';
import Border from '../UI/Border';

export default function HoverShowImageOrText({ items, borderStyle }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`grid gap-4 md:grid-cols-2 lg:grid-cols-3 ${
        borderStyle && 'gap-12'
      }`}
    >
      {borderStyle ? (
        <>
          {items.map((item) => {
            return (
              <div key={item.title}>
                <div
                  className={`group flex h-[380px] cursor-pointer flex-col items-center justify-center gap-y-6 rounded-2xl bg-white-transparent transition-transform duration-300 ${
                    isHovered ? 'py-s2' : 'py-s4'
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                >
                  <div className="mx-auto">
                    <Image src={item.image} alt={item.title} />
                  </div>
                  <p className={`text-center text-3xl font-bold text-white`}>
                    {item.title}
                  </p>
                  <a
                    className={`block cursor-pointer text-center italic text-white/80 underline duration-300 ${
                      isHovered && 'group-hover:hidden'
                    }`}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Learn more
                  </a>
                  <p
                    className={`hidden px-5 text-lg duration-300 ${
                      isHovered && 'opacity-100 group-hover:block'
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {items.map((item) => {
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
                    <p className="body mt-s4 hidden cursor-pointer text-left group-hover:block">
                      {item.description}
                    </p>
                  </div>
                </Border>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
