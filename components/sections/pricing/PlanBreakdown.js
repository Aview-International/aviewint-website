import { useEffect, useRef, useState } from 'react';
import { PLANS_BREAKDOWN } from '../../../constants/constants';
import ToggleButton from '../../FormComponents/ToggleButton';
import Check from '../../../public/img/icons/check.svg';
import Info from '../../../public/img/icons/info.svg';
import Image from 'next/image';
import Button from '../../UI/Button';

const Line = () => <span className="mx-auto block h-1 w-6 bg-white"></span>;

const PlanBreakdown = ({ isChecked, handleChange, allPlans }) => {
  const headerRef = useRef(null);
  const [topPosition, setTopPosition] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setTopPosition(headerRef.current.getBoundingClientRect().top);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="m-horizontal my-s10">
      <div
        id="all-features"
        className="rounded-xl bg-white-transparent text-white"
      >
        <h2 className="py-s4 text-center text-5xl font-semibold md:text-6xl">
          Compare Plans
        </h2>

        <div
          className={`sticky top-0 z-10 grid grid-cols-5 rounded-xl p-s4 text-center ${
            topPosition === 0 && 'bg-gray-1'
          }`}
          ref={headerRef}
        >
          <div>
            <ToggleButton isChecked={isChecked} handleChange={handleChange} />
            <p>
              Annual
              <br />
              (save up to 28%)
            </p>
          </div>

          {allPlans.map((plan, i) => (
            <div key={i}>
              <div className="text-2xl">{plan.desc}</div>
              <p className="text-xl font-medium">&#36;{plan.cost}</p>
              <Button type="secondary">Go {plan.id}</Button>
            </div>
          ))}
        </div>

        {PLANS_BREAKDOWN.map((plan, i) => (
          <div className="p-s4" key={i}>
            <div className="border-b border-gray-1 p-5">
              <p className="mt-s5 text-left text-sm">{plan.section}</p>
            </div>
            {plan.desc.map((breakdown, i) => (
              <div
                key={`breakdown-${i}`}
                className="grid grid-cols-5 items-center justify-center border-b border-gray-1 text-center"
              >
                <div className="flex items-center p-5 text-left text-lg">
                  <span className="pr-4">{breakdown.title}</span>
                  {breakdown.hoverText && (
                    <div className="group relative cursor-pointer">
                      <Image src={Info} alt="" />
                      <span className="absolute z-10 hidden w-48 rounded-md bg-gray-1 p-s1 text-xs group-hover:inline">
                        {breakdown.hoverText}
                      </span>
                    </div>
                  )}
                </div>
                {breakdown.columns.map((col, i) => (
                  <div className="p-5" key={i}>
                    {col === true ? (
                      <Image src={Check} alt="" width={35} height={30} />
                    ) : col === null ? (
                      <Line />
                    ) : (
                      <p className="text-sm">{col}</p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanBreakdown;
