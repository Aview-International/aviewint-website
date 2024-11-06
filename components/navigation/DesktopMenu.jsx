import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import downChevronWhite from '../../public/img/icons/chevron-down-white.svg';
import downChevronGradient from '../../public/img/icons/chevron-down-gradient.svg';
import Card from '../UI/Card';

const MENU = [
  { type: 'route', title: 'Pricing', link: '/pricing' },
  {
    type: 'dropdown',
    title: 'Industries',
    dropdown: [
      {
        name: 'Corporate',
        subtext: 'Services for corporate material',
        dropdownItems: [
          { title: 'Scientific', link: '/corporate/scientific' },
          { title: 'Financial', link: '/corporate/financial' },
          { title: 'Business', link: '/corporate/business' },
          { title: 'Legal', link: '/corporate/legal' },
          { title: 'Medical', link: '/corporate/medical' },
        ],
      },
    ],
  },
  {
    type: 'dropdown',
    title: 'Languages',
    dropdown: [
      { title: 'English', link: '/languages/english' },
      { title: 'French', link: '/languages/french' },
      { title: 'Hindi', link: '/languages/hindi' },
      { title: 'Spanish', link: '/languages/spanish' },
      { title: 'Arabic', link: '/languages/arabic' },
      { title: 'Portuguese', link: '/languages/portuguese' },
      { title: 'Bengali', link: '/languages/bengali' },
      { title: 'Russian', link: '/languages/russian' },
      { title: 'Urdu', link: '/languages/urdu' },
      { title: 'Indonesian', link: '/languages/indonesian' },
      { title: 'German', link: '/languages/german' },
      { title: 'Japanese', link: '/languages/japanese' },
      { title: 'Marathi', link: '/languages/marathi' },
      { title: 'Telugu', link: '/languages/telugu' },
      { title: 'Dutch', link: '/languages/dutch' },
      { title: 'Tagalog', link: '/languages/tagalog' },
    ],
  },
  { type: 'route', title: 'Blog', link: '/blog' },
  { type: 'route', title: 'About', link: '/about' },
];

export default function DesktopMenu({ curPage }) {
  return (
    <div className="hidden lg:block">
      {MENU.map((menuItem) =>
        menuItem.type === 'route' ? (
          <Link href={menuItem.link} key={menuItem.title}>
            <a
              className={`text-md hover:gradient-text hover:gradient-1 ml-10 cursor-pointer xl:text-lg ${
                curPage === menuItem.title
                  ? `gradient-text gradient-1`
                  : `text-white`
              }`}
            >
              {menuItem.title}
            </a>
          </Link>
        ) : menuItem.type === 'dropdown' ? (
          <Dropdown
            title={menuItem.title}
            dropdown={menuItem.dropdown}
            curPage={curPage}
            key={menuItem.title}
          />
        ) : null
      )}
    </div>
  );
}

function Dropdown({ title, dropdown, curPage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <span
      className="relative ml-10 inline"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="inline-flex cursor-pointer items-center gap-1">
        <p
          className={`text-md md:text-lg ${
            dropdownOpen || curPage === title
              ? 'gradient-text gradient-1'
              : 'text-white'
          }`}
        >
          {title}
        </p>
        <div
          className={`h-6 w-6 duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
        >
          <Image
            src={
              dropdownOpen || curPage === title
                ? downChevronGradient
                : downChevronWhite
            }
            width={48}
            height={48}
            alt="chevron"
          />
        </div>
      </div>
      <div
        className={`left-0 top-full pt-6 ${
          dropdownOpen ? 'absolute' : 'hidden'
        }`}
      >
        {dropdown.length <= 1 ? (
          <Card borderRadius="xl" fullWidth={true}>
            <div className="grid w-max grid-cols-1 rounded-xl bg-opacity-10 bg-gradient-to-b from-[#27273A] to-black p-4">
              {dropdown.map((dropItem, index) => {
                return (
                  <div className="flex flex-col gap-2" key={index}>
                    <div>
                      <p className="text-xl">{dropItem.name}</p>
                      <p className="text-sm">{dropItem.subtext}</p>
                    </div>
                    {dropItem.dropdownItems.map((item) => {
                      return (
                        <Link href={item.link} key={item.title}>
                          <a className="hover:gradient-text hover:gradient-2 text-lg text-white">
                            {item.title}
                          </a>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </Card>
        ) : (
          <Card borderRadius="xl" fullWidth={true}>
            <div className="grid w-max grid-cols-2 gap-2 rounded-xl bg-opacity-10 bg-gradient-to-b from-[#27273A] to-black p-4">
              {dropdown.map((item) => (
                <Link href={item.link} key={item.title}>
                  <a className="hover:gradient-text hover:gradient-2 text-lg text-white">
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </Card>
        )}
      </div>
    </span>
  );
}
