import { useEffect, useRef, useState } from 'react';

/**
 * Component that runs a number up in a smooth transition
 * @param {endValue} endValue value to stop at
 * @param {duration} duration speed at which the counter runs in milliseconds
 * @returns React.Component
 * @author Victor Ogunjobi
 */

const SmoothCounter = ({
  endValue = 5000,
  duration = 2000,
  startValue = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(startValue);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);
  const startValueRef = useRef(startValue);
  const endValueRef = useRef(endValue);

  useEffect(() => {
    // Reset refs when endValue or startValue changes
    startTimeRef.current = null;
    startValueRef.current = startValue;
    endValueRef.current = endValue;

    const animate = (currentTime) => {
      // Initialize start time on first frame
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easing function (ease-out)
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      // Calculate the current value considering the start value
      const currentValue = Math.floor(
        startValueRef.current +
          (endValueRef.current - startValueRef.current) * easeProgress
      );

      setDisplayValue(currentValue);

      // Continue animation if not complete
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    // Start the animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [endValue, startValue, duration]);

  return <span>{displayValue.toLocaleString()}</span>;
};

export default SmoothCounter;
