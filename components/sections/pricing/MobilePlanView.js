import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Check from '../../../public/img/icons/check.svg';
import Info from '../../../public/img/icons/info.svg';

const MobilePlanView = ({ plans, sliderValue }) => {
  const [visibleHoverText, setVisibleHoverText] = useState(null);
  const headerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(null);

  const planTypes = ['Starter Studio', 'Creator Pro', 'Global Influencer'];
  const recommendedPlanIndex = sliderValue >= 2 ? 2 : 1;

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
    <div className="bg-black-transparent block p-8 text-white md:hidden">
      <div
        className={`border-gray-200 sticky top-0 z-10 grid grid-cols-3 gap-3 rounded-lg border-b text-center 
          ${topPosition <= 0 ? 'gradient-dark bg-black' : ''}`}
        ref={headerRef}
      >
        {planTypes.map((header, index) => (
          <div
            key={index}
            className={`text-md rounded-lg py-5  px-1 ${
              index === recommendedPlanIndex
                ? 'bg-white-transparent'
                : 'bg-gray'
            }`}
          >
            {header}
          </div>
        ))}
      </div>
      <div className="bg-white/65 mx-4 mb-10 border-x-0 border-y border-t-0"></div>
      {plans.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-14">
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
                      </div> //extra info section
                    )}
                  </div>
                )}
              </div>

              <div className="border-gray-100 grid grid-cols-3 border-b text-center text-sm">
                {feature.columns.map((col, colIndex) => {
                  // Determine the background color based on the plan and slider value
                  const bgColor =
                    colIndex === recommendedPlanIndex
                      ? 'bg-white-transparent'
                      : 'bg-gray-700'; //bg-white-transparent is the highlight

                  return (
                    <div
                      key={colIndex}
                      className={`py-10 px-2 text-center ${bgColor}`}
                    >
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
