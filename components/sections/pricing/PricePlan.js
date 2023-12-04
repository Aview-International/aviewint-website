import React, { useRef, useEffect, useState } from 'react';
import PriceComponent from './PriceComponent';

const priceListItems = [
  {
    title: 'FREE',
    subTitle: '$0/mo',
    description: 'Best for users who want to try out the platform',
    options: [
      '10 Relevant Content Hashtags Generation',
      '1 Title and Description Generator',
      '5 Minutes Video Script Generator',
      '5 Minutes of Translated Dubbing (AI)',
      '1 Trained Multi-Language Voiceover',
      '50 Languages',
    ],
  },
  {
    title: 'BASIC',
    subTitle: '$49.99/mo',
    description: 'Best for users with +100,000 sucscribers',
    options: [
      '50 Relevant Content Hashtags Generation',
      '5 Title and Description Generator',
      '45 Minutes Video Script Generator',
      '5 Minutes of Translated Dubbing (AI)',
      '45 Minutes of Context-Based Translated Subtites',
      '3 Trained Multi-Language Voiceovers',
      '50 Languages',
      'International Video Analytics',
      '5 Video Content Distribution',
      '1 Short-From Content',
      'International Brand Deals',
      '0.50%	Profit Sharing',
    ],
  },
  {
    title: 'PRO',
    subTitle: '$100/mo',
    description: 'Best for users with +500,000 sucscribers',
    options: [
      '300 Relevant Content Hashtags Generation',
      '15 Title and Description Generator',
      '300 Minutes Video Script Generator',
      '300 Minutes of Translated Dubbing (AI)',
      '300 Minutes of Context-Based Translated Subtites',
      '5 Trained Multi-Language Voiceovers',
      '50 Languages',
      'International Video Analytics',
      '30 Video Content Distribution',
      'Content Censorship',
      '7 Short-From Contents',
      'Global Channel Management',
      'International Brand Deals',
      '2%	Profit Sharing',
    ],
  },
];

const PricePlan = () => {
  const basicref = useRef([]);
  const divRelativeHook = useRef(null);
  const [animeProps, setAnimeProps] = useState([
    { style: null, className: '' },
    { style: null, className: '' },
    { style: null, className: '' },
    { style: null, className: '' },
  ]);
  useEffect(() => {
    const cardsContainer = document.querySelector('.cards');
    basicref.current = Array.from(document.querySelectorAll('.card'));

    function callFunction(e) {
      const overlayEl = e.currentTarget;
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;
      overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    }

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = basicref.current.indexOf(entry.target);
        const width = entry.borderBoxSize[0].inlineSize;
        const height = entry.borderBoxSize[0].blockSize;
        if (cardIndex >= 0) {
          const updatedProps = animeProps.map(() => ({
            style: { width, height },
            className: 'card',
          }));
          setAnimeProps(updatedProps);
        }
      });
    });

    const initElement = (cardEl) => {
      observer.observe(cardEl);
    };

    divRelativeHook.current.childNodes.forEach(initElement);
    document.body.addEventListener('pointermove', callFunction);
    return () => {
      document.body.removeEventListener('pointermove', callFunction);
    };
  }, []);

  return (
    <section>
      <div className="cards relative flex flex-col md:my-12">
        <div
          className="grid h-full w-full grid-cols-1 gap-12 text-white md:min-w-[1080px] md:grid-cols-3 md:gap-10"
          ref={divRelativeHook}
        >
          {priceListItems.map((item, index) => (
            <div key={index} className="card">
              <PriceComponent item={item} />
            </div>
          ))}
        </div>
        <div className="overlay grid h-full w-full grid-cols-1 gap-12 text-white md:min-w-[1080px] md:grid-cols-3 md:gap-10">
          {animeProps
            ? animeProps.map((props, index) => (
                <div key={index}>{React.createElement('div', props)}</div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default PricePlan;
