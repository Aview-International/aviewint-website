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
      // {
      //   type: 'route',
      //   title: 'Creators',
      //   link: '/creators',
      // items: [
      //   { title: 'Subtitles', link: '/subtitles' },
      //   { title: 'Dubs', link: '/dubs' },
      //   { title: 'Shorts', link: '/shorts' },
      //   { title: 'Distribution', link: '/distribution' },
      // ],
      // },
      {
        type: 'list',
        title: 'Corporate',
        items: [
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
    ],
  },
  // { type: 'route', title: 'Languages', link: '/languages' },
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
              menuItem={menuItem}
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

function Dropdown({ menuItem, curPage }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <span
      className="relative ml-10 inline"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="inline-flex items-center gap-1">
        <p
          className={`text-md cursor-default xl:text-lg ${
            dropdownOpen || curPage === menuItem.title
              ? 'gradient-text gradient-1'
              : 'text-white'
          }`}
        >
          {menuItem.title}
        </p>
        <div className={`h-6 w-6 ${dropdownOpen ? 'rotate-180' : ''}`}>
          <Image
            src={
              dropdownOpen || curPage ? downChevronGradient : downChevronWhite
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
          {menuItem.dropdown.map((dropdownItem) => {
            if (dropdownItem.type === 'list') {
              const columns = [];

              for (let i = 0; i < dropdownItem.items.length; i += 4) {
                const column = dropdownItem.items.slice(i, i + 4);
                columns.push(column);
              }

              return (
                <div className="flex flex-col gap-4" key={dropdownItem.title}>
                  {/* <p className="text-xl font-semibold text-white">
                    {dropdownItem.title}
                  </p> */}
                  <div className="flex gap-4">
                    {columns.map((column, i) => (
                      <div
                        className="flex w-28 flex-col gap-4"
                        key={`column-${i}`}
                      >
                        {column.map((item) => (
                          <Link href={item.link} key={item.title}>
                            <a className="group font-light">
                              <span className="group-hover:gradient-text group-hover:gradient-2 text-white">
                                {item.title}
                              </span>
                            </a>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              );
            } else if (dropdownItem.type === 'route') {
              return (
                <Link href={dropdownItem.link}>
                  <a className="hover:gradient-text hover:gradient-2 h-min text-xl font-semibold text-white">
                    {dropdownItem.title}
                  </a>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </span>
  );
}
