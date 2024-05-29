import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Check from '../../../public/img/icons/check.svg';
import Info from '../../../public/img/icons/info.svg';
//import { useSelector } from 'react-redux';

const MobilePlanView = ({ plans, sliderValue }) => {
  const [visibleHoverText, setVisibleHoverText] = useState(null);
  const headerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(null);
  //const sliderValue = useSelector((state) => state.slider.sliderValue); 

  const planTypes = ["Starter Studio", "Creator Pro", "Global Influencer"];
  const recommendedPlanIndex = sliderValue >= 2 ? 2 : 1;

  useEffect(() => {
    console.log('Slider Value in MobilePlanView:', sliderValue); // Debug log for sliderValue
  }, [sliderValue]);

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
    <div className="block md:hidden bg-black-transparent text-white p-8">
      <div className={`sticky top-0 z-10 text-center grid grid-cols-3 rounded-lg gap-3 border-b border-gray-200 
          ${topPosition <= 0 ? 'gradient-dark bg-black' : ''}`}
          ref={headerRef}>

        {planTypes.map((header, index) => (
          <div key={index} className={`rounded-lg p-5 text-md ${index === recommendedPlanIndex ? 'bg-white-transparent' : 'bg-gray'}`}> 
            {header}
          </div>
        ))}
      </div>
      <div className="bg-white/65 mx-4 mb-10 border-x-0 border-y border-t-0"></div>
      {plans.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-14 p-4">
          <div className="mb-8 text-xl font-bold">{section.section}</div>
          {section.desc.map((feature, featureIndex) => (
            <div key={featureIndex} className="mb-8">
              <div className="border-gray-100 flex items-center justify-between border-b pb-5">
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

              <div className="grid grid-cols-3 gap-2 text-sm border-b border-gray-100">
                {feature.columns.map((col, colIndex) => {
                  // Determine the background color based on the plan and slider value
                  const bgColor = colIndex === recommendedPlanIndex ? 'bg-white-transparent' : 'bg-gray-700'; //bg-white-transparent is the highlight

                  return (
                    <div key={colIndex} className={`p-12 text-center ${bgColor}`}>
                      {col === true ? (
                        <Image src={Check} alt="" width={25} height={20} />
                      ) : col === null ? (
                        <span className="mx-auto block h-1 w-4 bg-white"></span>
                      ) : (
                        <p className="text-sm md:text-base">{col}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobilePlanView;
