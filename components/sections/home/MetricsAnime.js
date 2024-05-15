import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useOnScreen } from '../../../hooks/useOnScreen';
import { LANDING_PAGE_METRICS } from '../../../constants/constants';

const MetricsAnime = () => {
  return (
    <section
      className="section m-horizontal flex flex-col gap-y-5 text-white"
      id="metrics-anime"
    >
      <h2 className="heading md:mb-s5">Our Impact, By the Numbers</h2>
      <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-3">
        {LANDING_PAGE_METRICS.map((metricItem, i) =>
          metricItem.id === 2 || metricItem.id === 6 ? (
            <MetricBigContainer metric={metricItem} key={i} />
          ) : (
            <MetricSmallContainer metric={metricItem} key={i} />
          )
        )}
      </div>
    </section>
  );
};

const MetricBigContainer = ({ metric }) => {
  const [number, setNumber] = useState(0);
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    const updateNumber = () => {
      if (isOnScreen) {
        if (number < metric.number) {
          setNumber((number) => Math.min(number + 2, metric.number));
          setTimeout(updateNumber, 2000 / metric.number);
        }
      }
    };
    updateNumber();
  }, [isOnScreen]);

  return (
    <div
      className={`col-span-1 grid h-full w-full cursor-pointer justify-start gap-x-6 rounded-3xl bg-white-transparent p-s3 md:col-span-2 md:grid-cols-[30%,70%]`}
    >
      <div className="flex flex-col items-center justify-center gap-1 md:gap-4">
        <p
          data-test={`${number}`}
          className="gradient-text gradient-2 text-5xl md:text-8xl"
          ref={elementRef}
        >
          {metric.prefix && metric.prefix} {number}
          {metric.suffix}
        </p>
        <p
          data-test={`${metric.text}`}
          className="mb-4 text-center text-4xl font-bold"
        >
          {metric.text}
        </p>
      </div>
      <div
        data-test="language-container"
        className="flex w-full flex-wrap gap-4"
      >
        {metric.id === 2 ? (
          <>
            {metric.nestedContainer.map((country, i) => (
              <span
                className="flex items-center justify-start gap-1 rounded-full bg-gray-1 px-s1 md:py-1 md:px-s2"
                key={i}
              >
                <div className="flex items-center gap-s1.5 py-1">
                  <div className="-mb-1 block w-s3">
                    <Image src={country.flag} alt={country.name} />
                  </div>
                  <p className="body text-white">{country.name}</p>
                </div>
              </span>
            ))}
          </>
        ) : (
          metric.nestedContainer.map((item, i) => (
            <span
              className="flex items-center rounded-full bg-gray-1 py-1 px-s2 md:px-s3 md:text-lg"
              key={i}
            >
              {item}
            </span>
          ))
        )}
      </div>
    </div>
  );
};

const MetricSmallContainer = ({ metric }) => {
  const [number, setNumber] = useState(0);
  const elementRef = useRef(null);
  const isOnScreen = useOnScreen(elementRef);

  useEffect(() => {
    const updateNumber = () => {
      if (isOnScreen) {
        if (number < metric.number) {
          setNumber((number) => Math.min(number + 2, metric.number));
          setTimeout(updateNumber, 2000 / metric.number);
        }
      }
    };
    updateNumber();
  }, [isOnScreen]);

  return (
    <div className="flex h-full cursor-pointer flex-col items-center justify-center gap-1 rounded-3xl bg-white-transparent p-s3 md:gap-4">
      <p
        data-test={`${number}`}
        className="gradient-text gradient-2 text-5xl md:text-8xl"
        ref={elementRef}
      >
        {metric.prefix && metric.prefix} {number}
        {metric.suffix}
      </p>
      <p
        data-test={`${metric.text}`}
        className="text-center text-4xl font-bold"
      >
        {metric.text}
      </p>
    </div>
  );
};

export default MetricsAnime;
