import React, { useState } from 'react';
import PricePlan from './PricePlan';
import PriceText from './PriceText';

const PricePage = () => {
  const [toggleIsChecked, setToggleIsChecked] = useState(false);
  return (
    <>
      <div className="h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-s5 py-s6">
          <PriceText
            isChecked={toggleIsChecked}
            handleChange={() => setToggleIsChecked(!toggleIsChecked)}
          />
          <PricePlan isChecked={toggleIsChecked} />
        </div>
      </div>
    </>
  );
};

export default PricePage;
