import React, { useRef,useEffect, useState } from 'react';
import PriceComponent from './PriceComponent';

const priceListItems = [
 {
  title: 'Starter',
  subTitle: 'Free',
  description: 'Best for users who want to try out the platform',
  options:[
    '50 translated videos',
    '50 dubbed videos',
    '25 subtitles videos',
    '10 edited shorts',
    'Access to brand deals',
  ]
 },
 {
    title: 'Basic',
    subTitle: '$50/mo',
    description: 'Best for users with +100,000 sucscribers',
    options:[
      '1000 translated videos',
      '1000 dubbed videos',
      '1000 subtitles videos',
      '1000 edited shorts',
      'Access to brand deals',
    ]
 },
 {
    title: 'Pro',
    subTitle: '$100/mo',
    description: 'Best for users with +500,000 sucscribers',
    options:[
      '+10000 translated videos',
      '+5000 dubbed videos',
      '+5000 subtitles videos',
      '+5000 edited shorts',
      'Access to brand deals',
    ]
 },
 {
    title: 'Enterprise',
    subTitle: 'Contact Us',
    description: 'Best for users with +1 million sucscribers',
    options:[
      '+10000 translated videos',
      '+5000 dubbed videos',
      '+5000 subtitles videos',
      '+5000 edited shorts',
      'Access to brand deals',
    ]
 },
];

const PricePlan = () => {
   const basicref = useRef([])
   const divRelativeHook=useRef(null)
   const [animeProps, setAnimeProps] = useState([
      { style: null, className : '' },
      { style: null, className : '' },
      { style: null, className : '' },
      { style: null, className : '' },
   ]);
   useEffect(()=>{
     const cardsContainer = document.querySelector('.cards')
     basicref.current = Array.from( document.querySelectorAll('.card'))
     
     function callFunction(e){
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
          const updatedProps = animeProps.map(() => ({ style: { width, height }, className : 'card' }));
          setAnimeProps(updatedProps);
        }
       });
     });

     const initElement = (cardEl) => {
       observer.observe(cardEl)
     };

     divRelativeHook.current.childNodes.forEach(initElement);
     document.body.addEventListener("pointermove", callFunction);
     return () =>{
      document.body.removeEventListener("pointermove", callFunction);
     }
   },[]);

 return (
   <>
   <div className="flex flex-col relative cards">
    <div className="min-w-[1080px] h-full grid grid-cols-4 gap-10 text-white" ref={divRelativeHook}>
    {priceListItems
        .map((item, index) => {
            return (
             <div key={index} className="card">
              <PriceComponent item={item}/> 
             </div>
            )
        })
     }
    </div>
    <div className="min-w-[1080px] h-full grid grid-cols-4 gap-10 text-white overlay">
      { animeProps ? 
         animeProps.map((props, index) => (
           <div key={index}>
            {React.createElement("div", props)}
          </div>
         ))
         : null
      }
    </div> 
   </div>
   </>
   )
};

export default PricePlan
