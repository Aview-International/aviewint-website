import React from 'react';
import Card from '../../UI/Card';
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
 return (
    <>
    <section className="min-w-[1080px] h-full grid grid-cols-4 gap-10 mt-3 text-white">
     {
        priceListItems.map((item,index) => {
            return (
             <div key={index}>
                { item.title === "Basic" ? 
                 <Card borderRadius="2xl">
                  <PriceComponent item={item}/> 
                 </Card>
                 : 
                 <PriceComponent item={item}/> 
                }
             </div>
            )
        })
     }
    </section>
    </>
  )
}

export default PricePlan
