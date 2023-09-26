import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useOnScreen } from '../../../hooks/useOnScreen';
import { LANDING_PAGE_METRICS } from '../../../constants/constants'


const MetricsAnime = () => {
  return (
    <section className="section m-horizontal flex flex-col gap-y-5 text-white">
    <h2 className='heading md:mb-s5'>Our Impact, By the Numbers</h2>
    <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-7'>
      {
        React.Children.toArray(
          LANDING_PAGE_METRICS.map(( metricItem ) => {
           return (
              <>
               { (metricItem.id === 2 || metricItem.id ===6 )  ? <MetricBigContainer metric={metricItem} /> : <MetricSmallContainer metric={metricItem} /> } 
              </>
            )
          })
        )
      }
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
    <div className={`bg-white-transparent h-full md:h-[260px] cursor-pointer col-span-1 md:col-span-2 grid md:grid-cols-[30%,70%] justify-start gap-x-6 rounded-3xl p-s3`}>
      <div className='gap-1 md:gap-4 flex justify-center flex-col items-center'>
        <p className='gradient-text gradient-2 text-5xl md:text-8xl' ref={elementRef}>
         {metric.prefix && metric.prefix} {number}
         {metric.suffix}
        </p>
        <p className='text-4xl font-bold text-center'>
          {metric.text}
        </p>
      </div>
      <div className=' w-full flex flex-wrap gap-4'>
        {
          metric.id === 2 ? 
          <>
            { 
             React.Children.toArray(
              metric.nestedContainer.map((country)=> {
                return (
                  <span className="flex items-center gap-1 rounded-full bg-gray-1 px-s1 md:px-s2 justify-start" key={country.name}>
                   <div className="flex items-center gap-s1.5 py-1">
                     <div className="-mb-1 w-s3 block">
                      <Image src={country.flag} alt={country.name} />
                     </div>
                     <p className="body text-white">{country.name}</p>
                   </div>
                  </span>
                )
              })
             )
            }
          </> : 
          <>
           {
            React.Children.toArray(
              metric.nestedContainer.map((item)=>(
                <span className='rounded-full bg-gray-1 flex items-center py-1 px-s2 md:px-s3 md:text-lg'> 
                  {item}
                </span>
              ))
            )
           }
          </>
        }
      </div>
    </div>
  )
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
    <div className='flex flex-col h-[260px] gap-1 md:gap-4 bg-white-transparent cursor-pointer rounded-3xl p-s3 justify-center items-center'>
      <p className='gradient-text gradient-2 text-5xl md:text-8xl' ref={elementRef}>
        {metric.prefix && metric.prefix} {number}
        {metric.suffix}
      </p>
      <p className='text-4xl font-bold text-center'>
        {metric.text}
      </p>
    </div>
  )
};


export default MetricsAnime;
