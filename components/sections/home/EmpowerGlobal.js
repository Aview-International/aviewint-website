import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import check from '../../../public/img/icons/check.svg';
import Lottie from 'lottie-react';
import { LANDNG_PAGE_EMPOWER_SECTION } from '../../../constants/constants';
import mobileAnime from '../../../public/documents/mobile.json';
import OnboardingButton from '../../Onboarding/button';
import {
  Creator_Suite,
  Creator_Suite_Mobile,
} from '../../../constants/constants';
import Button from '../../UI/Button';
import MobileMenu from '../../navigation/MobileMenu';

const EmpowerGlobal = () => {
  const cardRef = useRef([]);
  const containerRef = useRef();

  useEffect(() => {
    const observerArray = [];
    
  

    const observer3 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting ){
            entry.target.classList.add('containerRef')

          }
        })
      },{
        threshold: 0.2,
      }
    )

     observer3.observe(containerRef.current)

    cardRef.current.forEach((item) => {
      const observer1 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.classList.contains('not-act-first')) {
                entry.target.classList.add('act-first')
               
              
             observer1.unobserve(entry.target)
            }
          });
        },
        {
          threshold: 0.5,
        }
      );


      const observer2 = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.classList.contains('not-act-second')) {
               entry.target.classList.add('act-second') 
               
              
             observer2.unobserve(entry.target)
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      

      observer1.observe(item);
      observer2.observe(item);
      observerArray.push(observer1, observer2);
    });

    return () => {
      observerArray.forEach((observer) => observer.disconnect());
      observer3.disconnect()
    };
  }, []);

  return (
    <section className="section m-horizontal text-white" data-aos="zoom-out">
      <h2 className="text-center text-5xl leading-none lg:text-[60px]">
        Advanced AI creator suite
      </h2>
      <p className="mx-auto mb-s6 mt-s2 w-11/12 text-start font-extralight lg:w-1/2 lg:text-center">
        Take a look at our suite of content management where you can manage
        multiple channels across multiple platforms for global dominance
      </p>
      <div className="hidden grid-cols-2 gap-16 lg:grid" ref={containerRef}>
        {Creator_Suite.map((item, index) => {
          return (
            <div key={item.index} ref={(el) => (cardRef.current[index] = el)} className={`${index%2==0 ? 'not-act-second': 'not-act-first'}`}>
              {item.index === 4 || item.index === 5 ? (
                <ImageSection image={item.image} />
              ) : item.index != 1 ? (
                <Content
                  title={item.tittle}
                  desc={item.desc}
                  options={item.options}
                  button_text={item.button_text}
                />
              ) : (
                <div className="h-full rounded-2xl bg-white-transparent md:h-[540px]">
                  <div className="flex h-full w-full flex-row justify-center p-8">
                    <div className="relative top-20 h-[30%] w-1/4 md:top-5 md:h-[45%] md:w-[55%]">
                      <Lottie animationData={mobileAnime} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-16 lg:hidden">
        {Creator_Suite_Mobile.map((item, index) => {
          return (
            <div key={item.index}>
              {item.index === 3 || item.index === 5 ? (
                <ImageSection image={item.image} />
              ) : item.index != 1 ? (
                <Content
                  title={item.tittle}
                  desc={item.desc}
                  options={item.options}
                  button_text={item.button_text}
                />
              ) : (
                <div className="h-full rounded-2xl bg-white-transparent md:h-[540px]">
                  <div className="flex h-full w-full flex-row justify-center p-8">
                    <div className="relative top-20 h-[30%] w-1/4 md:top-5 md:h-[45%] md:w-[55%]">
                      <Lottie animationData={mobileAnime} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Content = ({ title, desc, options, button_text, button_route }) => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center">
      <h3 className="mb-s1 w-5/6 text-3xl leading-none lg:text-[40px]">
        {title}
      </h3>
      <p className="w-4/5 text-sm font-extralight">{desc}</p>
      <p className="my-s2 text-sm lg:text-lg">Included services:</p>
      <div className="mb-s2 flex flex-col items-start gap-y-2 lg:mb-s3">
        {options.map((option, index) => {
          return (
            <div
              className="flex flex-row items-center justify-start gap-x-3"
              key={index}
            >
              <Image src={check} alt={option} width={15} height={15} />
              <p className="font-extralight">{option}</p>
            </div>
          );
        })}
      </div>
      <Button type="secondary" purpose="route" route="/pricing">
        {button_text}
      </Button>
    </div>
  );
};

const ImageSection = ({ image }) => {
  return (
    <div className="flex items-center justify-center rounded-xl bg-white-transparent p-4">
      <Image src={image} alt="image" width={400} height={400} />
    </div>
  );
};

export default EmpowerGlobal;

{
  /* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        <div className="col-span-1 grid h-full grid-cols-1 overflow-y-hidden rounded-2xl bg-white-transparent p-4 md:col-span-2 md:h-[640px] md:grid-cols-2 md:p-8">
          <div className="flex flex-col items-start justify-center gap-5">
            <h3 className="h2 w-2/3">Unified Content Management</h3>
            <p className="body md:w-5/6">
              Seamlessly integrate all your social media channels into Aview,
              streamlining your global content{' '}
              <span className="md:block">strategy.</span>
            </p>
          </div>
          <div className="flex h-full w-full flex-row justify-center">
            <div className="relative top-16 h-[60%] w-3/4 md:top-5 md:h-[45%] md:w-[55%]">
              <Lottie animationData={mobileAnime} />
            </div>
          </div>
        </div>
        {LANDNG_PAGE_EMPOWER_SECTION.map((data, i) => (
          <SubTranslatedContent {...data} key={i} />
        ))}
      </div> */
}
