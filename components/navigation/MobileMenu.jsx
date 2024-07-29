import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import GlobalButton from '../UI/GlobalButton';
import aviewLogo from '../../public/img/aview/logo_short.png';
import closeIcon from '../../public/img/icons/close.svg';
import leftChevronIcon from '../../public/img/icons/chevron-down-white.svg';

export default function MobileMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`h-screen-trick transition-300 fixed top-0 flex w-screen flex-col overflow-x-hidden overflow-y-scroll bg-black px-6 pt-8 pb-10 text-white lg:hidden ${
          menuOpenCtx.isMenuOpen
            ? 'left-0 z-50 opacity-100'
            : 'left-full opacity-0'
        }`}
      >
        <div className="mb-6 flex h-12 items-center justify-between rounded-full bg-white-transparent p-2">
          <div onClick={menuOpenCtx.closeMenuHandler}>
            <Link href="/">
              <a className="mt-2 w-20">
                <Image
                  src={aviewLogo}
                  width="40"
                  height="40"
                  alt="aview logo"
                />
              </a>
            </Link>
          </div>
          <div
            className="h-8 w-8 rounded-full bg-black p-2"
            onClick={menuOpenCtx.closeMenuHandler}
          >
            <Image src={closeIcon} width={32} height={32} alt="close icon" />
          </div>
        </div>
        <nav className="mb-5 flex flex-col">
          <MainMenu />
        </nav>
        <div
          className={`flex-grow-0 flex-col gap-4 ${
            menuOpenCtx.curMenu === 'main' ? 'flex' : 'hidden'
          }`}
        >
          <GlobalButton
            purpose="route"
            route="/register"
            type="secondary"
            fullWidth={true}
          >
            Sign Up
          </GlobalButton>
        </div>
      </div>
    </div>
  );
}

const MAIN_MENU = [
  { type: 'dropdown', title: 'Services', dropdown: 'services' },
  { type: 'route', title: 'Pricing', link: '/pricing' },
  { type: 'route', title: 'Blog', link: '/blog' },
  { type: 'dropdown', title: 'Languages', dropdown: 'languages' },
  { type: 'route', title: 'About', link: '/about' },
];

export function MainMenu() {
  const [dropDownService, setDropDownService] = useState(false);
  const [dropDownLanguage, setDropDownLanguage] = useState(false);
  const menuOpenCtx = useContext(MenuOpenContext);

  const handleDropDown = (item) => {
    if (item === 'services') {
      setDropDownService((prevValue) => !prevValue);
    } else {
      setDropDownLanguage((prevValue) => !prevValue);
    }
    menuOpenCtx.setMenu(item);
  };

  return (
    <div className="flex flex-col">
      {MAIN_MENU.map((menuItem, idx) => {
        if (menuItem.type === 'route') {
          return (
            <Link href={menuItem.link} key={`link-${idx}`}>
              <div
                className="flex h-12 items-center p-1"
                onClick={menuOpenCtx.closeMenuHandler}
                key={menuItem.title}
              >
                <p className="text-2xl font-bold">{menuItem.title}</p>
              </div>
            </Link>
          );
        } else if (menuItem.type === 'dropdown') {
          if (menuItem.dropdown === 'services') {
            return (
              <React.Fragment key={idx}>
                <DropDownHandle
                  menuItem={menuItem}
                  onChange={handleDropDown}
                  isChecked={dropDownService}
                />
                {dropDownService ? (
                  <div className="overflow-y-scroll px-s4">
                    <ServicesMenu />
                  </div>
                ) : null}
              </React.Fragment>
            );
          } else if (menuItem.dropdown === 'languages') {
            return (
              <React.Fragment key={idx}>
                <DropDownHandle
                  menuItem={menuItem}
                  onChange={handleDropDown}
                  isChecked={dropDownLanguage}
                />
                {dropDownLanguage ? (
                  <div className="overflow-y-scroll px-s4">
                    <LanguagesMenu />
                  </div>
                ) : null}
              </React.Fragment>
            );
          } else {
            return null;
          }
        } else {
          return null;
        }
      })}
    </div>
  );
}

export function DropDownHandle({ menuItem, onChange, isChecked }) {
  return (
    <div
      className="relative flex flex-col "
      onClick={() => onChange(menuItem.dropdown)}
      key={menuItem.title}
    >
      <div
        className={` ${
          isChecked && 'h-full'
        } flex h-12 flex-row items-center justify-between p-1`}
      >
        <p className="text-2xl font-bold">{menuItem.title}</p>
        <div className={`h-10 w-10 ${isChecked && 'rotate-180'} duration-300`}>
          <Image
            src={leftChevronIcon}
            alt="right chevron icon"
            width={44}
            height={44}
          />
        </div>
      </div>
    </div>
  );
}

const ServiceMenu = [
  {
    title: 'Scientific',
    link: '/corporate/scientific',
  },
  {
    title: 'Financial',
    link: '/corporate/financial',
  },
  {
    title: 'Business',
    link: '/corporate/business',
  },
  {
    title: 'Legal',
    link: '/corporate/legal',
  },
  {
    title: 'Medical',
    link: '/corporate/medical',
  },
  {
    title: 'Voice Over',
    link: '/corporate/voice-over',
  },
];

export function ServicesMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div className="my-2 flex flex-col gap-y-2">
      {ServiceMenu.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Link href={menuItem.link}>
            <div key={menuItem.title} onClick={menuOpenCtx.closeMenuHandler}>
              <p className=" text-white">{menuItem.title}</p>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

const LANGUAGES_MENU = [
  'English',
  'French',
  'Hindi',
  'Spanish',
  'Arabic',
  'Portuguese',
  'Bengali',
  'Russian',
  'Urdu',
  'Indonesian',
  'German',
  'Japanese',
  'Marathi',
  'Telugu',
  'Dutch',
  'Tagalog',
];

export function LanguagesMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div className="my-2 grid grid-cols-2 gap-1">
      {LANGUAGES_MENU.map((menuItem) => (
        <React.Fragment key={menuItem}>
          <Link href={`/languages/${menuItem.toLowerCase()}`}>
            <a
              className="text-white"
              key={menuItem}
              onClick={menuOpenCtx.closeMenuHandler}
            >
              {menuItem}
            </a>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
