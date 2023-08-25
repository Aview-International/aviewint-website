import { useMemo, useState } from 'react';
import { CREATORS_SLIDERS } from '../../../constants/constants';
import Border from '../../UI/Border';
import Button from '../../UI/Button';
import Shadow from '../../UI/Shadow';
import Slider from '../../UI/Slider';

const InternationalGrowth = () => {
  return (
    <section className="section m-horizontal" data-aos="fade">
      <h2 className="title md:text-center">
        Uncover Your Full{' '}
        <span className="gradient-text gradient-2">Revenue Potential</span>
      </h2>
      <p className="mb-s4 mt-s2 text-xl text-white md:text-center">
        Use our calculator and watch your revenue grow exponentially, all by
        simply adding more languages to your library!
      </p>
      <Calculator />
      <div className="mt-s4 flex justify-center">
        <Button purpose="route" route="#generate-aview" type="secondary">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

const Calculator = () => {
  const [ranges, setRanges] = useState({
    uploadsPerMonth: 1,
    averageViewCount: 1,
    languages: 1,
  });

  const growth = useMemo(() => {
    if (ranges.averageViewCount <= 6) {
      return (
        ranges.uploadsPerMonth *
        ranges.averageViewCount *
        ranges.languages *
        22.5
      );
    } else if (ranges.averageViewCount >= 14) {
      return (
        ranges.uploadsPerMonth *
        ranges.averageViewCount *
        ranges.languages *
        47.5
      );
    } else {
      return (
        ranges.uploadsPerMonth * ranges.averageViewCount * ranges.languages * 35
      );
    }
  }, [ranges]);
  return (
    <Shadow classes="w-full">
      <Border classes="w-full" borderRadius="[5px]">
        <div className="flex flex-col items-stretch justify-center rounded-[5px] bg-black px-0 pt-s2.5 pb-[60px] md:flex-row md:p-[60px]">
          <div className="basis-[90%]">
            {CREATORS_SLIDERS.map((item, i) => (
              <Slider
                setRanges={setRanges}
                key={`slider-${i}`}
                value={ranges[item.name]}
                {...item}
              />
            ))}
          </div>
          <div className="gradient-1 my-s5 mx-auto block h-1 w-[90%] md:my-0 md:mx-[30px] md:h-auto md:w-1"></div>
          <div className="flex basis-[40%] flex-col items-center justify-center">
            <h3 className="text-center text-7xl font-bold">
              <span className="gradient-1 gradient-text">
                ${Math.trunc(growth)}
              </span>
            </h3>
            <p className="text-center text-xl text-white">
              potential monthly revenue
            </p>
          </div>
        </div>
      </Border>
    </Shadow>
  );
};
export default InternationalGrowth;
