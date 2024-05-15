import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Check from '../../../public/img/icons/check.svg';
import Info from '../../../public/img/icons/info.svg';
//Needs these from pricing plan:?
import Border from '../../UI/Border';
import Card from '../../UI/Card';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';


const MobilePlanView = ({ plans }) => {
  const [visibleHoverText, setVisibleHoverText] = useState(null);
  const headerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(null);

  const planTypes = ["Starter Studio", "Creator Pro", "Global Influencer"];

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
    <div className="block md:hidden bg-gray-800 text-white p-8">
      <div className={`sticky top-0 z-10 text-center mb-10 grid grid-cols-3 rounded-lg p-s3
                        gap-3 border-b border-gray-200 
          ${
            topPosition <= 0 ? 'gradient-dark bg-black' : ''
          }`}
          ref={headerRef}
          >

        {planTypes.map((header, index) => (
          <div key={index} className={`text-md ${index === 1 ? 'text-gray-200' : 'text-white'}`}>
            {header}
          </div>
        ))}
      </div>

      {plans.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-14">
          <div className="font-bold text-xl mb-8">{section.section}</div>
          {section.desc.map((feature, featureIndex) => (
            <div key={featureIndex} className="mb-8">
              <div className="flex justify-between items-center border-b border-gray-100 mb-8 pb-5">
                <span className="text-sm">{feature.title}</span>

                {feature.hoverText && (
                  <div 
                    onMouseEnter={() => handleMouseEnter(sectionIndex + '-' + featureIndex)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleMouseEnter(sectionIndex + '-' + featureIndex)}
                    className="relative cursor-pointer">
                    <Image src={Info} alt="" width={20} height={20} layout="fixed" />
                    {visibleHoverText === sectionIndex + '-' + featureIndex && (
                      <div className="absolute right-full mr-2 top-0 z-10 w-48 rounded-md bg-gray-1 p-s1 text-xs group-hover:inline text-white">
                        {feature.hoverText}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 text-sm border-b border-gray-100 pb-8">
                {feature.columns.map((col, colIndex) => (

                  <div key={colIndex} className={`p-2 text-center ${colIndex === 1 ? 'bg-gray-700' : 'bg-gray-800'}`}>
                    {col === true ? (
                      <Image src={Check} alt="" width={25} height={20} />
                    ) : col === null ? (
                      <span className="mx-auto block h-1 w-4 bg-white"></span>
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
