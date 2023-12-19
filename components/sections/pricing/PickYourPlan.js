import React from 'react';
import Button from '../../UI/Button';
import ToggleButton from '../../FormComponents/ToggleButton';

const PickYourPlan = ({ isChecked, handleChange }) => {
  return (
    <section className="m-horizontal mt-s8 mb-s4 justify-between px-4 text-white md:flex">
      <div>
        <h2 className="text-start text-5xl font-bold md:text-8xl">
          Pick your plan
        </h2>
        <p className="mt-s2 mb-s4 text-lg">
          Can&#8217;t decide? Talk to our team today to find a plan that best
          fits you.
        </p>
        <Button type="secondary" fullWidth={true} purpose="onClick">
          Contact sales
        </Button>
      </div>
      <div className="mt-s2 py-2 text-lg md:mt-auto">
        <p>Fees are waved upon channel becoming monetized</p>
        <div className="mt-s1 flex w-full flex-row items-center justify-center gap-x-2">
          <p>Monthly </p>
          <ToggleButton isChecked={isChecked} handleChange={handleChange} />
          <p>Annual (save up to 28%)</p>
        </div>
      </div>
    </section>
  );
};

export default PickYourPlan;
