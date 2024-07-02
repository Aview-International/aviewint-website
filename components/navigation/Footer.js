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
      <div className="flex h-full flex-col items-center justify-between gap-y-s5 p-s2 md:items-start md:p-s4">
        <div className="grid h-full w-full grid-cols-1 gap-s3 md:grid-cols-3 md:gap-x-s25">
          <div>
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

            <Link href="/privacy-policy">
              <a
                className={`hover:gradient-text hover:gradient-2 mt-s2 block ${
                  pathname === '/privacy-policy'
                    ? 'gradient-text gradient-2'
                    : ''
                }`}
              >
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms-of-service">
              <a
                className={`hover:gradient-text hover:gradient-2 mt-s2 block ${
                  pathname === '/terms-of-service'
                    ? 'gradient-text gradient-2'
                    : ''
                }`}
              >
                Terms of Service
              </a>
            </Link>
          </div>
          {ROUTES.map((routeArray, index) => (
            <div className="flex flex-col gap-y-1" key={index}>
              <h5 className="mb-2 text-xl font-semibold">{routeArray.title}</h5>
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
          ))}
        </div>
        <div className="mt-5 flex flex-row gap-s1 md:mt-0 md:grid md:grid-cols-6 lg:gap-s3">
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
                width="24px"
                height="24px"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
