import { useEffect, useRef, useState } from 'react';
import { PLANS_BREAKDOWN } from '../../../constants/constants';
import ToggleButton from '../../FormComponents/ToggleButton';
import Check from '../../../public/img/icons/check.svg';
import Info from '../../../public/img/icons/info.svg';
import Image from 'next/image';
import GlobalButton from '../../UI/GlobalButton';
import MobilePlanView from './MobilePlanView';

const PlanBreakdown = ({ isChecked, handleChange, allPlans, sliderValue }) => {
  const headerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(null);

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

  const recommendedPlanIndex = sliderValue >= 2 ? 2 : 1;

  return (
    <section className="m-horizontal my-s10 overflow-x-clip" id="all-features">
      <div className="rounded-xl bg-white-transparent text-white">
        <h2 className="py-s4 text-center text-5xl font-semibold">
          Compare Plans
        </h2>
        <div className="hidden md:block">
          <div
            className={`sticky top-0 z-10 grid grid-cols-1 rounded-xl p-s4 text-center md:grid-cols-[repeat(4,minmax(100px,1fr))] 
            ${topPosition <= 0 ? 'gradient-dark bg-black' : ''}`}
            ref={headerRef}
          >
            <div className="mb-4 md:mb-0">
              <ToggleButton isChecked={isChecked} handleChange={handleChange} />
              <p className="text-sm md:text-base">
                Annual
                <br />
                (save up to 28%)
              </p>
            </div>
            {allPlans.map((plan, i) => (
              <div key={i} className="mb-4 md:mb-0">
                <div className="text-xl md:text-2xl">{plan.desc}</div>
                <p className="my-2 text-lg font-medium md:text-xl">
                  {plan.id === 'enterprise'
                    ? 'Contact Sales'
                    : `${
                        (typeof plan.monthlyCost && typeof plan.yearlyCost) ===
                        'number'
                          ? '$'
                          : ''
                      }${
                        isChecked
                          ? Math.round(plan.yearlyCost / 12) || 'Free'
                          : plan.monthlyCost
                      }`}
                </p>
                <GlobalButton
                  type="secondary"
                  purpose="route"
                  route={
                    plan.id === 'enterprise'
                      ? 'mailto:julia@aviewint.com'
                      : `/register?subscription=true&plan=${plan.id}`
                  }
                >
                  Go {plan.id}
                </GlobalButton>
              </div>
            ))}
          </div>

          {PLANS_BREAKDOWN.map((plan, sectionIndex) => (
            <div className="px-s4 py-s3" key={sectionIndex}>
              <div className="border-b border-gray-1 px-5">
                <p className="text-left text-sm md:text-base">{plan.section}</p>
              </div>
              {plan.desc.map((breakdown, featureIndex) => (
                <div
                  key={`breakdown-${featureIndex}`}
                  className="grid grid-cols-1 items-center justify-center border-b border-gray-1 text-center md:grid-cols-4"
                >
                  <div className="flex items-center justify-between p-5 text-left text-base md:text-lg">
                    <span className="pr-4">{breakdown.title}</span>
                    {breakdown.hoverText && (
                      <div className="group relative cursor-pointer">
                        <Image
                          src={Info}
                          alt=""
                          width={20}
                          height={20}
                          layout="fixed"
                        />
                        <span className="absolute z-10 hidden w-48 rounded-md bg-gray-1 p-s1 text-xs group-hover:inline">
                          {breakdown.hoverText}
                        </span>
                      </div>
                    )}
                  </div>
                  {breakdown.columns.map((col, colIndex) => (
                    <div
                      key={colIndex}
                      className={`p-12 ${
                        colIndex === recommendedPlanIndex
                          ? 'bg-white-transparent'
                          : 'bg-gray-700'
                      }`}
                    >
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
              ))}
            </div>
          ))}
        </div>

        {/* Mobile view - shown only on screens <= md */}
        <div className="md:hidden">
          <MobilePlanView plans={PLANS_BREAKDOWN} sliderValue={sliderValue} />
        </div>
      </div>
    </section>
  );
};

export default PlanBreakdown;
