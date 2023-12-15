import { useMemo } from 'react';

/**
 * Input Slider component
 * @prop label: String, to display the label of the input
 * @prop name: The name of the input, for events handling
 * @prop max: The maximum value of the slider
 * @prop setRanges: A function to set the value of the slider
 * @prop value: Value of the a single input
 * @prop values: Value to be used for number that don't grow mathematically
 *
 * @author Victor Ogunjobi
 */

const Slider = ({ label, name, max, setRanges, value, values }) => {
  const handleChange = (e) => {
    setRanges((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const width = useMemo(() => {
    if (value > max / 2) {
      return (value * 100) / max;
    } else {
      return (value * 100) / max + 2;
    }
  }, [value, max]);

  return (
    <div className="mt-s2 mb-s3 bg-black p-s2">
      <label className="mb-s2 inline-block text-xl text-white">{label}</label>
      <div className="relative w-[80%]">
        <span
          className={`gradient-1 absolute block h-[15px] rounded-[30px] `}
          style={{ width: `${Math.trunc(width)}%` }}
        ></span>
        <input
          name={name}
          type="range"
          // min={0}
          value={value}
          max={max}
          className="track-background remove-highlight slider-thumb absolute h-[15px] w-full appearance-none rounded-[30px] border border-white"
          onChange={handleChange}
        />
        <span
          className={`absolute -top-[4px] -right-[65px] text-xl text-white md:-right-[65px]`}
        >
          {values[value] || value}
        </span>
      </div>
    </div>
  );
};

export default Slider;
