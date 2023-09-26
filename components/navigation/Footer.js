import React from 'react';
import Image from 'next/image';
import aviewLogo from '../../public/img/aview/logo.png';
import { ROUTES, SOCIALS } from '../../constants/constants';
import Link from 'next/link';
import Button from '../UI/Button';


const Footer = ({ curPage }) => {
  return (
    <div className="mb-s5 text-white m-horizontal bg-white-transparent rounded-2xl" data-aos="zoom-in-down">
      <div className="flex flex-col items-center gap-y-s5 justify-between md:items-start h-full p-s2 md:p-s4">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full gap-s3 md:gap-x-s25">
        <Link href="/#">
            <a>
              <Image
                src={aviewLogo}
                width="150"
                height="35"
                alt="AVIEW International logo"
              />
            </a>
          </Link>
         {ROUTES.map((routeArray) => {
          return (
            <div className='flex flex-col gap-y-1'>
             <h5 className='text-xl font-semibold mb-2'>{routeArray.title}</h5>
             { routeArray.routes.map((route) => (
                 <Link href={route.route} key={route.text}>
                  <a
                   className={`text-md hover:gradient-text hover:gradient-2 xl:text-lg ${
                     curPage === route.text
                       ? 'gradient-text gradient-2'
                       : 'text-white'
                   }`}
                  >
                   {route.text}
                  </a>
                 </Link>
             ))}
            </div>
          )
          })}
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full h-full">
         <Button type="tertiary">Join Waitlist</Button>
          <div className="flex flex-row md:grid gap-s1 mt-5 md:mt-0 lg:gap-s3 md:grid-cols-6">
            {SOCIALS.map((social) => {
              return (
             React.Children.toArray(
              <a
              href={social.link}
              target="_blank"
              rel="noreferrer"
              key={social.id}
              >
               <Image
                src={social.icon}
                alt={social.altText}
                width="24px"
                height="24px"
               />
              </a>
             )
            )})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
