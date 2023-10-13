import React from 'react';
import Image from 'next/image';
import aviewLogo from '../../public/img/aview/logo.png';
import { ROUTES, SOCIALS } from '../../constants/constants';
import Link from 'next/link';
import Button from '../UI/Button';

const Footer = ({ curPage }) => {
  return (
    <div
      className="m-horizontal mb-s5 rounded-2xl bg-white-transparent text-white"
      data-aos="zoom-in-down"
    >
      <div className="flex h-full flex-col items-center justify-between gap-y-s5 p-s2 md:items-start md:p-s4">
        <div className="grid h-full w-full grid-cols-1 gap-s3 md:grid-cols-3 md:gap-x-s25">
          <Link href="/#">
            <a className="">
              <Image
                src={aviewLogo}
                width="114"
                height="32"
                alt="AVIEW International logo"
              />
            </a>
          </Link>
          {ROUTES.map((routeArray, index) => {
            return (
              <div className="flex flex-col gap-y-1" key={index}>
                <h5 className="mb-2 text-xl font-semibold">
                  {routeArray.title}
                </h5>
                {routeArray.routes.map((route) => (
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
            );
          })}
        </div>
        <div className="flex h-full w-full flex-col justify-between md:flex-row">
          <Button type="tertiary" purpose="route" route="/waitlist">
            Join Waitlist
          </Button>
          <div className="mt-5 flex flex-row gap-s1 md:mt-0 md:grid md:grid-cols-6 lg:gap-s3">
            {SOCIALS.map((social) => {
              return React.Children.toArray(
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
