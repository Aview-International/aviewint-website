import ToggleButton from '../../FormComponents/ToggleButton';
import Slider from '../../UI/Slider';

const PickYourPlan = ({
  isChecked,
  handleChange,
  sliderValue,
  onSliderChange,
}) => {
  const values = [15, 30, 50, 75, 100, 150, 200, 275, 350, 400, 500];

  return (
    <section className="m-horizontal my-s8 px-4 text-white">
      <div className="text-center text-white">
        <h2 className="text-5xl font-bold md:text-8xl">
          Find the plan that works for you
        </h2>
        <p className="my-s2 text-xl">
          Fees are waved upon channel becoming monetized.
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-center gap-x-2 text-xl">
        <p>Monthly </p>
        <ToggleButton isChecked={isChecked} handleChange={handleChange} />
        <p>Annual (save up to 30%)</p>
      </div>

      <div className="mx-auto mt-s7 flex w-4/5 items-end justify-center text-center">
        <Slider
          label="How many minutes of content do you upload a month?"
          value={sliderValue}
          name="pricing-slider"
          onChange={onSliderChange}
          max={10}
          values={values}
          suffix="minutes"
        />
      </div>
    </section>
  );
};

export default PickYourPlan;
