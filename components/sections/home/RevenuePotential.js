import { useState, useRef } from 'react';
import Button from '../../UI/Button';
import Card from '../../UI/Card';

const SLIDER_OPTION_ARRAY = [
  {
    name: 'upload',
    title: 'Uploads per Month',
    maxValue: 30,
    _id: 1,
  },
  {
    name: 'subs',
    title: 'Number of Subs',
    maxValue: 100,
    _id: 2,
  },
  {
    name: 'viewCount',
    title: 'Average View Count',
    maxValue: 250,
    _id: 3,
  },
  {
    name: 'language',
    title: 'Language',
    maxValue: 30,
    _id: 4,
  },
];

const RevenuePotential = () => {
  return (
    <section
      className="section m-horizontal flex h-full w-full flex-col gap-y-5 p-2 text-white"
      data-aos="zoom-in"
    >
      <h3 className="w-full text-start text-3xl font-bold md:text-center md:text-7xl">
        Unlock Your Full{` `}
        <span className="gradient-2 gradient-text">Revenue Potential!</span>
      </h3>
      <p className="w-full text-start md:text-center md:text-lg">
        Use our calculator and watch your revenue grow exponentially, all by
        simply adding more languages to your library!
      </p>
      <div className="mt-5 grid h-full w-full grid-cols-1 gap-5 md:grid-cols-5 md:grid-rows-6">
        <div className="col-span-1 flex w-full items-center justify-center md:col-span-3 md:row-span-6">
          <Card borderRadius="lg">
            {SLIDER_OPTION_ARRAY.map((sliderRange) => {
              return (
                <SLIDER
                  title={sliderRange.title}
                  key={sliderRange._id}
                  max={sliderRange.maxValue}
                  name={sliderRange.name}
                  id={sliderRange._id}
                />
              );
            })}
          </Card>
        </div>
        <div className="col-span-1 flex w-full items-center justify-center md:col-span-2 md:row-span-3">
          <Card borderRadius="lg">
            <div className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-lg py-5 md:py-0">
              <p className="gradient-2 gradient-text text-7xl font-bold">
                XXX%
              </p>
              <p className="text-center font-semibold">
                Growth in<span className="block">International Views</span>
              </p>
            </div>
          </Card>
        </div>
        <div className="col-span-1 flex w-full items-center justify-center md:col-span-2 md:row-span-3">
          <Card borderRadius="lg">
            <div className=" flex h-full w-full cursor-pointer flex-col items-center justify-center gap-y-4 rounded-lg py-5 md:py-0">
              <p className="gradient-2 gradient-text text-7xl font-bold">
                $XXX
              </p>
              <p className="text-center font-semibold">Potential Revenue</p>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <Button type="secondary" purpose="route" route="/contact">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

const SLIDER = ({ title, name, max }) => {
  const spanRef = useRef(null);

  const [rangeOption, setRangeOptions] = useState({
    upload: 0,
    subs: 0,
    viewCount: 0,
    language: 0,
  });

  const handleRange = (e) => {
    setRangeOptions({ ...rangeOption, [e.target.name]: e.target.value });
    if (spanRef.current) {
      spanRef.current.textContent = e.target.value;
      spanRef.current.style.left = (e.target.value / max) * 100 + '%';
    }
  };

  const handleMouseDown = () => {
    spanRef.current.classList.remove('hide');
    spanRef.current.classList.add('show');
  };

  const handleMouseUp = () => {
    spanRef.current.classList.remove('show');
    spanRef.current.classList.add('hide');
  };

  const displayOption = (rangeName) => {
    return (
      <p>
        {rangeOption[rangeName] > 0 &&
          (rangeName === 'subs' || rangeName === 'viewCount'
            ? rangeOption[rangeName] + 'k'
            : rangeOption[rangeName])}
      </p>
    );
  };

  return (
    <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg px-s3 py-s5 md:py-s4">
      <div className="relative w-full">
        <span
          className="slider-text hide absolute -top-12 z-0 h-8 w-8 leading-8"
          ref={spanRef}
        ></span>
      </div>
      <div className="relative h-full w-full">
        <span
          className={`gradient-1 absolute top-1 z-10 block h-3 scroll-smooth rounded-lg`}
          style={{
            width: `${
              spanRef.current ? (spanRef.current.textContent / max) * 100 : 50
            }%`,
          }}
        ></span>
        <input
          type="range"
          min="0"
          max={max}
          step="1"
          name={name}
          value={rangeOption[name]}
          className={`slider track-background z-30 h-3 w-full cursor-pointer appearance-none rounded-lg border-2 border-none border-white outline-none`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onChange={handleRange}
        />
      </div>
      <div className="flex h-full w-full items-center justify-between">
        <p>{title}</p>
        {displayOption(name)}
      </div>
    </div>
  );
};

export default RevenuePotential;
