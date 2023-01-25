import Image from 'next/image';
import Link from 'next/link';
import downChevronWhite from '../../public/img/icons/chevron-down-white.svg';
import downChevronGradient from '../../public/img/icons/chevron-down-gradient.svg';
import { useState } from 'react';

const MENU = [
  { type: 'route', title: 'Home', link: '/' },
  { type: 'route', title: 'Creators', link: '/creators' },
  {
    type: 'dropdown',
    title: 'Corporate',
    dropdown: [
      { title: 'Scientific', link: '/corporate/scientific' },
      { title: 'Financial', link: '/corporate/financial' },
      { title: 'Legal', link: '/corporate/legal' },
      { title: 'Business', link: '/corporate/business' },
      { title: 'Marketing', link: '/corporate/marketing' },
      { title: 'E-Learning', link: '/corporate/e-learning' },
      { title: 'Medical', link: '/corporate/medical' },
      { title: 'Voice Over', link: '/corporate/voice-over' },
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
      { title: 'Marthi', link: '/languages/marthi' },
      { title: 'Telugu', link: '/languages/telugu' },
      { title: 'Dutch', link: '/languages/dutch' },
      { title: 'Tagalog', link: '/languages/tagalog' },
    ],
  },
  { type: 'route', title: 'About', link: '/about' },
  { type: 'route', title: 'Careers', link: '/careers' },
  { type: 'route', title: 'Blog', link: '/blog' },
];

export default function DesktopMenu({ curPage }) {
  return (
    <div className="hidden lg:block">
      {MENU.map((menuItem) => {
        if (menuItem.type === 'route') {
          return (
            <Link href={menuItem.link} key={menuItem.title}>
              <a
                className={`text-md hover:gradient-text hover:gradient-1 ml-10 xl:text-lg ${
                  curPage === menuItem.title
                    ? `gradient-text gradient-1`
                    : `text-white`
                }`}
              >
                {menuItem.title}
              </a>
            </Link>
          );
        } else if (menuItem.type === 'dropdown') {
          return (
            <Dropdown
              title={menuItem.title}
              dropdown={menuItem.dropdown}
              curPage={curPage}
              key={menuItem.title}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

function Dropdown({ title, dropdown, curPage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownColumns = [];

  for (let i = 0; i < dropdown.length; i += 4) {
    dropdownColumns.push(dropdown.slice(i, i + 4));
  }

  return (
    <span
      className="relative ml-10 inline"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="inline-flex items-center gap-1">
        <p
          className={`text-md cursor-default xl:text-lg ${
            dropdownOpen || curPage === title
              ? 'gradient-text gradient-1'
              : 'text-white'
          }`}
        >
          {title}
        </p>
        <div className={`h-6 w-6 ${dropdownOpen ? 'rotate-180' : ''}`}>
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
        <div className="flex w-max gap-10 rounded-md bg-opacity-10 bg-gradient-to-b from-[#27273A] to-black p-4">
          {dropdownColumns.map((col, i) => (
            <div className="flex flex-col gap-4" key={`col-${i}`}>
              {col.map((item) => {
                return (
                  <Link href={item.link} key={item.title}>
                    <a className="hover:gradient-text hover:gradient-2 text-lg text-white">
                      {item.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </span>
  );
}
