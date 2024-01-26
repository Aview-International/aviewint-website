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
    <div className="w-full text-white">
      <label className="mb-s2 block text-lg">{label}</label>
      <div className="flex w-full gap-s2">
        <div className="relative w-10/12">
          <span
            className={`gradient-1 absolute block h-[15px] rounded-[30px]`}
            style={{ width: `${Math.round(width)}%` }}
          ></span>
          <input
            name={name}
            type="range"
            // min={0}
            value={value}
            max={max}
            className="track-background remove-highlight slider-thumb h-[15px] w-full appearance-none rounded-[30px] border border-white"
            onChange={onChange}
          />
        </div>
        <p className={`text-xl w-2/12 text-center`}>
          {prefix} {values[value] || value} {suffix}
        </p>
      </div>
    </div>
  );
};

export default Slider;
