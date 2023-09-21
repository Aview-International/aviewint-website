import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import aviewLogo from '../../public/img/aview/logo.svg';
import closeIcon from '../../public/img/icons/close.svg';
import leftChevronIcon from '../../public/img/icons/chevron-left.svg';
import rightChevronIcon from '../../public/img/icons/chevron-right.svg';

export default function MobileMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);
  return (
    <div
      className={`h-screen-trick transition-300 absolute top-0 left-0 z-50 flex w-screen flex-col overflow-hidden bg-black px-6 pt-8 pb-10 lg:hidden ${
        menuOpenCtx.isMenuOpen
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <div className="flex-grow-0">
        <div className="mb-8 flex h-12 items-center justify-between">
          {menuOpenCtx.curMenu === 'main' ? (
            <div onClick={menuOpenCtx.closeMenuHandler}>
              <Link href="/">
                <div className="h-12 w-12">
                  <Image
                    src={aviewLogo}
                    width={48}
                    height={48}
                    alt="aview logo"
                  />
                </div>
              </Link>
            </div>
          ) : (
            <div
              className="flex items-center"
              onClick={() => menuOpenCtx.setMenu('main')}
            >
              <div className="h-8 w-8">
                <Image
                  src={leftChevronIcon}
                  alt="left chevron icon"
                  width={32}
                  height={32}
                />
              </div>
              <p className="mt-1 text-white">Back</p>
            </div>
          )}
          <div className="h-7 w-7" onClick={menuOpenCtx.closeMenuHandler}>
            <Image src={closeIcon} width={28} height={28} alt="close icon" />
          </div>
        </div>
        <hr className="border-0.25 border-white opacity-40" />
      </div>
      <nav className="flex flex-grow flex-col justify-between overflow-hidden px-6">
        {menuOpenCtx.curMenu === 'main' ? <MainMenu /> : null}
        {menuOpenCtx.curMenu === 'corporate' ? <CorporateMenu /> : null}
        {menuOpenCtx.curMenu === 'languages' ? <LanguagesMenu /> : null}
      </nav>
      <div
        className={`flex-grow-0 flex-col gap-4 ${
          menuOpenCtx.curMenu === 'main' ? 'flex' : 'hidden'
        }`}
      >
        <Button
          purpose="route"
          route="/login"
          type="secondary"
          fullWidth={true}
        >
          Login
        </Button>
        {/* <Button
          purpose="route"
          route="/waitlist"
          type="secondary"
          fullWidth={true}
        >
          Join the Waitlist
        </Button> */}
      </div>
    </div>
  );
}

const MAIN_MENU = [
  { type: 'route', title: 'Home', link: '/' },
  { type: 'route', title: 'Creators', link: '/creators' },
  { type: 'dropdown', title: 'Corporate', dropdown: 'corporate' },
  { type: 'dropdown', title: 'Languages', dropdown: 'languages' },
  { type: 'route', title: 'About', link: 'about' },
  { type: 'route', title: 'Careers', link: '/careers' },
  { type: 'route', title: 'Blog', link: '/blog' },
  // { type: 'route', title: 'Pricing', link: '/pricing' },
];

export function MainMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div className="flex flex-col overflow-y-scroll">
      {MAIN_MENU.map((menuItem, idx) => {
        if (menuItem.type === 'route') {
          return (
            <Link href={menuItem.link} key={`link-${idx}`}>
              <div
                className="flex h-16 items-center"
                onClick={menuOpenCtx.closeMenuHandler}
                key={menuItem.title}
              >
                <p className="gradient-text gradient-2 text-5xl font-bold">
                  {menuItem.title}
                </p>
              </div>
            </Link>
          );
        } else if (menuItem.type === 'dropdown') {
          return (
            <div
              className="flex h-16 items-center justify-between"
              onClick={() => menuOpenCtx.setMenu(menuItem.dropdown)}
              key={menuItem.title}
            >
              <div>
                <p className="gradient-text gradient-2 text-5xl font-bold">
                  {menuItem.title}
                </p>
              </div>
              <div className="h-11 w-11">
                <Image
                  src={rightChevronIcon}
                  alt="right chevron icon"
                  width={44}
                  height={44}
                />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

const CORPORATE_MENU = [
  {
    title: 'Business',
    description:
      'Work with certified professionals to translate business material.',
    link: '/corporate/business',
  },
  {
    title: 'Financial',
    description:
      'Work with certified professionals to translate financial documents.',
    link: '/corporate/financial',
  },
  {
    title: 'Legal',
    description:
      'Work with certified professionals to translate legal material.',
    link: '/corporate/legal',
  },
  {
    title: 'Marketing',
    description:
      'Work with certified professionals to translate marketing material.',
    link: '/corporate/marketing',
  },
  {
    title: 'Scientific',
    description:
      'Work with certified professionals to translate scientific material.',
    link: '/corporate/scientific',
  },
  {
    title: 'Medical',
    description:
      'Work with certified professionals to translate medical material.',
    link: '/corporate/medical',
  },
  {
    title: 'E-Learning',
    description:
      'Work with certified professionals to translate e-learning material.',
    link: '/corporate/e-learning',
  },
  {
    title: 'Voice Over',
    description:
      'Work with certified professionals to translate voice over material.',
    link: '/corporate/voice-over',
  },
];

export function CorporateMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div className="flex flex-col overflow-y-scroll">
      {CORPORATE_MENU.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Link href={menuItem.link}>
            <div key={menuItem.title} onClick={menuOpenCtx.closeMenuHandler}>
              <p className="mt-6 mb-2 text-2xl font-bold">
                <span className="gradient-text gradient-2">
                  {menuItem.title}
                </span>
              </p>
              <p className="mb-6 font-light text-white">
                {menuItem.description}
              </p>
            </div>
          </Link>
          <hr className="border-0.25 border-white opacity-40" />
        </React.Fragment>
      ))}
    </div>
  );
}

const LANGUAGES_MENU = [
  'English',
  'Urdu',
  'French',
  'Indonesian',
  'Hindi',
  'German',
  'Spanish',
  'Japanese',
  'Arabic',
  'Marathi',
  'Portuguese',
  'Telugu',
  'Bengali',
  'Russian',
];

export function LanguagesMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div className="flex flex-col overflow-y-scroll">
      {LANGUAGES_MENU.map((menuItem) => (
        <React.Fragment key={menuItem}>
          <Link href={`/languages/${menuItem.toLowerCase()}`}>
            <a
              className="my-4 text-2xl font-bold text-white"
              key={menuItem}
              onClick={menuOpenCtx.closeMenuHandler}
            >
              {menuItem}
            </a>
          </Link>
          <hr className="border-0.25 border-white opacity-40" />
        </React.Fragment>
      ))}
    </div>
  );
}
