import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import aviewLogo from '../../public/img/aview/logo.svg';
import closeIcon from '../../public/img/icons/close.svg';
import leftChevronIcon from '../../public/img/icons/chevron-left.svg';
import rightChevronIcon from '../../public/img/icons/chevron-right.svg';
import React from 'react';

export default function MobileMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div
      className={`h-screen-trick transition-300 absolute top-0 left-0 z-50 flex w-screen flex-col gap-9 overflow-hidden bg-black px-6 pt-8 pb-10 lg:hidden ${
        menuOpenCtx.isMenuOpen
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <div className="flex h-12 flex-grow-0 items-center justify-between">
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
      <nav className="flex flex-grow flex-col justify-between overflow-hidden">
        {menuOpenCtx.curMenu === 'main' ? <MainMenu /> : null}
        {/* {menuOpenCtx.curMenu === 'services' ? <ServicesMenu /> : null}
        {menuOpenCtx.curMenu === 'creators' ? <CreatorsMenu /> : null} */}
        {menuOpenCtx.curMenu === 'corporate' ? <CorporateMenu /> : null}
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
          route="/#generate-aview"
          type="primary"
          fullWidth={true}
        >
          Contact Us
        </Button> */}
      </div>
    </div>
  );
}

const MAIN_MENU = [
  { type: 'route', title: 'Home', link: '/' },
  { type: 'route', title: 'Creators', link: '/creators' },
  { type: 'dropdown', title: 'Corporate', dropdown: 'corporate' },
  // { type: 'route', title: 'Languages', link: '/languages' },
  { type: 'route', title: 'About', link: 'about' },
  { type: 'route', title: 'Careers', link: '/careers' },
  { type: 'route', title: 'Blog', link: '/blog' },
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

// const SERVICES_MENU = [
//   { type: 'dropdown', title: 'Corporate', dropdown: 'corporate' },
// ];

// export function ServicesMenu() {
//   const menuOpenCtx = useContext(MenuOpenContext);

//   return (
//     <div>
//       {SERVICES_MENU.map((menuItem) => {
//         if (menuItem.type === 'route') {
//           return (
//             <Link href={menuItem.link}>
//               <div className="flex h-16 items-center" key={menuItem.title}>
//                 <a
//                   className="gradient-text gradient-2 text-5xl font-bold"
//                   onClick={menuOpenCtx.closeMenuHandler}
//                 >
//                   {menuItem.title}
//                 </a>
//               </div>
//             </Link>
//           );
//         } else if (menuItem.type === 'dropdown') {
//           return (
//             <div
//               className="flex h-16 items-center justify-between"
//               onClick={() => menuOpenCtx.setMenu(menuItem.dropdown)}
//               key={menuItem.title}
//             >
//               <div>
//                 <p className="gradient-text gradient-2 text-5xl font-bold">
//                   {menuItem.title}
//                 </p>
//               </div>
//               <div className="h-11 w-11">
//                 <Image
//                   src={rightChevronIcon}
//                   alt="right chevron icon"
//                   width={44}
//                   height={44}
//                 />
//               </div>
//             </div>
//           );
//         } else {
//           return null;
//         }
//       })}
//     </div>
//   );
// }

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
      'Work with certified professionals to translate business material.',
    link: '/corporate/marketing',
  },
  {
    title: 'Scientific',
    description:
      'Work with certified professionals to translate scientific material.',
    link: '/corporate/scientific',
  },
  // {
  //   title: 'Medical',
  //   description:
  //     'Work with certified professionals to translate medcial material.',
  //   link: '/services/medical',
  // },
  // {
  //   title: 'E-Learning',
  //   description:
  //     'Work with certified professionals to translate business material.',
  //   link: '/services/e-learning',
  // },
  // {
  //   title: 'Voice Over',
  //   description:
  //     'Work with certified professionals to translate business material.',
  //   link: '/services/voice-over',
  // },
];

export function CorporateMenu() {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div className="flex flex-col overflow-y-scroll">
      <hr className="border-0.25 border-white opacity-40" />
      {CORPORATE_MENU.map((menuItem) => (
        <React.Fragment key={menuItem.title}>
          <Link href={menuItem.link}>
            <div
              className="px-8"
              key={menuItem.title}
              onClick={menuOpenCtx.closeMenuHandler}
            >
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

// const CREATORS_MENU = [
//   {
//     title: 'Subtitles',
//     description:
//       'Get your video translated with high quality subtitles and captions.',
//     link: '/services/subtitles',
//   },
//   {
//     title: 'Dubs',
//     description: 'Get your video translated with high quality voice overs.',
//     link: '/services/dubs',
//   },
//   {
//     title: 'Shorts',
//     description: 'Get your content edited specifically for short form content.',
//     link: '/services/shorts',
//   },
//   {
//     title: 'Distribution',
//     description:
//       "We will distribute you translated content for you so you don't have to.",
//     link: '/services/distribution',
//   },
// ];

// export function CreatorsMenu() {
//   const menuOpenCtx = useContext(MenuOpenContext);

//   return (
//     <div className="flex flex-col overflow-y-scroll">
//       <hr className="border-0.25 border-white opacity-40" />
//       {CREATORS_MENU.map((menuItem) => (
//         <React.Fragment key={menuItem.title}>
//           <Link href={menuItem.link}>
//             <div
//               className="px-8"
//               key={menuItem.title}
//               onClick={menuOpenCtx.closeMenuHandler}
//             >
//               <p className="mt-6 mb-2 text-2xl font-bold">
//                 <span className="gradient-text gradient-2">
//                   {menuItem.title}
//                 </span>
//               </p>
//               <p className="mb-6 font-light text-white">
//                 {menuItem.description}
//               </p>
//             </div>
//           </Link>
//           <hr className="border-0.25 border-white opacity-40" />
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
