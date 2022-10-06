import Image from 'next/image';
import aviewLogo from '../../public/img/aview/logo.svg';
import { ROUTES, SOCIALS } from '../../constants/constants';
import Link from 'next/link';

const Footer = ({ curPage }) => {
  return (
    <div className="navigation mb-s5" data-aos="zoom-in-down">
      <hr className="gradient-1 mb-s5 h-[3px]" />
      <div className="flex items-center justify-between md:items-start">
        <div className="flex flex-col items-center gap-s2 md:items-start">
          <Image
            src={aviewLogo}
            width="70px"
            height="70px"
            alt="AVIEW International logo"
          />
          <div className="grid grid-cols-2 gap-s2 md:grid-cols-5">
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
        <div className="flex flex-col gap-s1 text-right md:flex-row md:gap-s5 md:text-left">
          {ROUTES.map((route) => (
            <Link href={route.route} key={route.id}>
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
      </div>
    </div>
  );
};

export default Footer;
