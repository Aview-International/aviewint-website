import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Check from '../../../public/img/icons/check.svg';
import Info from '../../../public/img/icons/info.svg';

const MobilePlanView = ({ plans }) => {
  const [visibleHoverText, setVisibleHoverText] = useState(null);
  const headerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(null);

  const planTypes = ['Starter Studio', 'Creator Pro', 'Global Influencer'];

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setTopPosition(headerRef.current.getBoundingClientRect().top);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setVisibleHoverText(index);
  };

  const handleMouseLeave = () => {
    setVisibleHoverText(null);
  };

  return (
    <div className="bg-gray-800 text-white md:hidden">
      <div
        className={`border-gray-200 sticky top-0 z-10  grid grid-cols-3 gap-3 rounded-lg  py-s3 px-s1 text-center 
        ${topPosition <= 0 ? 'gradient-dark rounded-b-lg bg-black' : ''}`}
        ref={headerRef}
      >
        {planTypes.map((header, index) => (
          <div
            key={index}
            className={`text-md ${
              index === 1 ? 'text-gray-200' : 'text-white'
            }`}
          >
            <p className="text-sm text-white/95">{header}</p>
          </div>
        ))}
      </div>
      <div className="bg-white/65 mx-4 mb-10 border-x-0 border-y border-t-0"></div>
      {plans.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-14 p-4">
          <div className="mb-8 text-xl font-bold">{section.section}</div>
          {section.desc.map((feature, featureIndex) => (
            <div key={featureIndex} className="mb-8">
              <div className="border-gray-100 mb-8 flex items-center justify-between border-b pb-5">
                <span className="text-sm">{feature.title}</span>

                {feature.hoverText && (
                  <div
                    onMouseEnter={() =>
                      handleMouseEnter(sectionIndex + '-' + featureIndex)
                    }
                    onMouseLeave={handleMouseLeave}
                    onClick={() =>
                      handleMouseEnter(sectionIndex + '-' + featureIndex)
                    }
                    className="relative cursor-pointer"
                  >
                    <Image
                      src={Info}
                      alt="check-info"
                      width={20}
                      height={20}
                      layout="fixed"
                    />
                    {visibleHoverText === sectionIndex + '-' + featureIndex && (
                      <div className="absolute right-full top-0 z-10 mr-2 w-48 rounded-md bg-gray-1 p-s1 text-xs text-white group-hover:inline">
                        {feature.hoverText}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="border-gray-100 grid grid-cols-3 gap-2 border-b pb-8 text-sm">
                {feature.columns.map((col, colIndex) => (
                  <div
                    key={colIndex}
                    className={`p-2 text-center ${
                      colIndex === 1 ? 'bg-gray-700' : 'bg-gray-800'
                    }`}
                  >
                    {col === true ? (
                      <Image
                        src={Check}
                        alt="check-info"
                        width={25}
                        height={20}
                      />
                    ) : col === null ? (
                      <span className="mx-auto block h-1 w-4 bg-white/60"></span>
                    ) : (
                      <p className="text-sm md:text-base">{col}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobilePlanView;
