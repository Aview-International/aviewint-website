import { useEffect, useState } from 'react';

/**
 * Component that runs a number up in a smooth transition
 * @param {endValue} endValue value to stop at
 * @param {duration} duration speed at which the counter runs in milliseconds
 * @returns React.Component
 * @author Victor Ogunjobi
 */
const SmoothCounter = ({ endValue = 5000, duration = 2000 }) => {
  let stopNumer = endValue + 1;
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 100);

      // Smooth easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(stopNumer * easeProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [stopNumer, duration]);

  return <span>{displayValue.toLocaleString()}</span>;
};

export default SmoothCounter;
