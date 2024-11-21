import React from 'react';
import Image from 'next/image';
import aviewLogo from '../../public/img/aview/logo-full.svg';
import { ROUTES, SOCIALS } from '../../constants/constants';
import Link from 'next/link';
import GlobalButton from '../UI/GlobalButton';
import { useRouter } from 'next/router';

const Footer = ({ curPage }) => {
  const { pathname } = useRouter();

  return (
    <div
      className="m-horizontal mb-s5 rounded-2xl bg-white-transparent text-white"
      data-aos="zoom-in-down"
    >
      <div className="flex h-full w-full flex-col items-center justify-between gap-y-s5 p-s2 md:items-start md:p-s5">
        <div className="relative flex h-full w-full flex-col items-start justify-between md:flex-row">
          <div className="flex w-full flex-col items-start justify-between pb-s8 lg:flex-row">
            <div className="flex flex-col justify-start gap-y-1.5 md:gap-y-3">
              <Link href="/#">
                <a className="block">
                  <Image
                    src={aviewLogo}
                    width="114"
                    height="32"
                    alt="AVIEW International logo"
                  />
                </a>
              </Link>
              <p>Unlock global growth, one click at a time</p>
              <div className="mt-4 flex w-full flex-col items-start justify-center gap-y-4 md:flex-row md:items-center md:gap-y-0 md:gap-x-6">
                <GlobalButton purpose="route" route="/login" type="secondary">
                  Login
                </GlobalButton>
                <GlobalButton purpose="route" route="/register" type="primary">
                  Get Started
                </GlobalButton>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-12 md:mt-s4 lg:mt-0 md:flex-row md:gap-x-20">
              {ROUTES.map((routeArray, index) => (
                <div className="flex flex-col gap-y-1" key={index}>
                  <h5 className="mb-2 text-xl font-semibold">
                    {routeArray.title}
                  </h5>
                  {routeArray.routes.map((route) => (
                    <Link href={route.route} key={route.text}>
                      <a
                        className={`text-md hover:gradient-text hover:gradient-2 my-0.5 font-light ${
                          curPage === route.text
                            ? 'gradient-text gradient-2'
                            : 'text-white/80'
                        }`}
                      >
                        {route.text}
                      </a>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="gradient-1 absolute bottom-0 left-0 h-[2px] w-full rounded-xl"></div>
        </div>
        <div className="grid w-full grid-cols-1 gap-s1 md:grid-cols-2 md:gap-s3">
          <div className="flex w-full flex-row items-start justify-between md:justify-start md:gap-x-6">
            <Link href="/terms-of-service">
              <a
                className={`hover:gradient-text hover:gradient-2 block ${
                  pathname === '/terms-of-service'
                    ? 'gradient-text gradient-2'
                    : ''
                }`}
              >
                Terms and Conditions
              </a>
            </Link>
            <Link href="/privacy-policy">
              <a
                className={`hover:gradient-text hover:gradient-2 block ${
                  pathname === '/privacy-policy'
                    ? 'gradient-text gradient-2'
                    : ''
                }`}
              >
                Privacy Policy
              </a>
            </Link>
          </div>

          <div className="flex items-center gap-x-4 md:justify-end">
            {SOCIALS.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={social.id}
              >
                <Image
                  src={social.icon}
                  alt={social.altText}
                  width="28px"
                  height="28px"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
