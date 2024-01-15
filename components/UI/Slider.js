import { useMemo } from 'react';

/**
 * @name - Input Slider component
 * @prop label: String, to display the label of the input
 * @prop name: The name of the input, for events handling
 * @prop max: The maximum value of the slider
 * @prop setRanges: A function to set the value of the slider
 * @prop value: Value of the a single input
 * @prop values: Value to be used for number that don't grow mathematically
 *
 * @author Victor Ogunjobi
 */

const Slider = ({
  label,
  name,
  max,
  value,
  values,
  onChange,
  prefix,
  suffix,
}) => {
  const width = useMemo(() => {
    if (value > max / 2) {
      return (value * 100) / max;
    } else {
      return (value * 100) / max + 1;
    }
  }, [value, max]);

  return (
    <div className="w-full">
      <label className="mb-s2 inline-block text-lg text-white">{label}</label>
      <div className="relative w-full">
        <span
          className={`gradient-1 absolute block h-[15px] rounded-[30px]`}
          style={{ width: `${Math.trunc(width)}%` }}
        ></span>
        <input
          name={name}
          type="range"
          // min={0}
          value={value}
          max={max}
          className="track-background remove-highlight slider-thumb absolute top-0 left-0 h-[15px] w-full appearance-none rounded-[30px] border border-white"
          onChange={onChange}
        />
        <span
          className={`absolute -top-[4px] -right-[65px] text-xl text-white md:-right-[22%]`}
        >
          {prefix} {values[value] || value} {suffix}
        </span>
      </div>
    </div>
  );
};

export default Slider;
