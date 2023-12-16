import React from 'react';
import Button from '../../UI/Button';
import ToggleButton from '../../FormComponents/ToggleButton';

const PriceText = ({ isChecked, handleChange }) => {
  return (
    <section className="mt-s4 mb-s2 grid w-full grid-cols-1 gap-10 px-4 text-white md:mt-s8 md:w-[1280px] md:grid-cols-2 md:gap-4">
      <div className="flex flex-col items-start justify-start gap-y-3">
        <h2 className="text-start text-5xl font-bold md:text-8xl">
          Pick your plan{' '}
        </h2>
        <p className="text-lg font-medium">
          Can&#8217;t decide? Talk to our team today to find a plan that best
          fits you.
        </p>
        <Button type="secondary" fullWidth={true} purpose="onClick">
          Contact Us
        </Button>
      </div>
      <div className="flex flex-col items-center justify-end gap-y-4 py-2 text-lg font-medium">
        <p>Fees are waved upon channel becoming monetized</p>
        <p className="flex w-full flex-row items-center justify-center gap-x-2 ">
          Monthly{' '}
          <ToggleButton isChecked={isChecked} handleChange={handleChange} />
          <p>Annually Save 80%</p>
        </p>
      </div>
    </section>
  );
};

export default PriceText;
