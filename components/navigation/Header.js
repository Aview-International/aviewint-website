import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import MobileMenu from './MobileMenu';
import { ROUTES } from '../../constants/constants';
import aviewLogo from '../../public/img/aview/logo.svg';

const Header = ({ curPage }) => {
  return (
    <>
      <header className="navigation mt-10 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="w-16">
              <Image
                src={aviewLogo}
                alt="AVIEW International logo"
                width={70}
                height={70}
              />
            </a>
          </Link>
          <DesktopMenu curPage={curPage} />
        </div>
        <HeaderButtons />
        <MenuButton />
      </header>
      <MobileMenu />
    </>
  );
};

const DesktopMenu = ({ curPage }) => {
  return (
    <div className="hidden lg:block">
      {ROUTES.map((route) => (
        <Link href={route.route} key={route.id}>
          <a
            className={`text-md ml-10 xl:text-lg ${
              curPage === route.text ? `gradient-text gradient-1` : `text-white`
            } hover:gradient-text hover:gradient-1`}
          >
            {route.text}
          </a>
        </Link>
      ))}
    </div>
  );
};

const HeaderButtons = () => {
  return (
    <div className="hidden gap-5 lg:flex">
      <Button purpose="route" route="/#generate-aview" type="primary">
        Contact Us
      </Button>
      <Button purpose="route" route="/log-in" type="secondary">
        Log In
      </Button>
    </div>
  );
};

const MenuButton = () => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div
      className="flex cursor-pointer flex-col items-end lg:hidden"
      onClick={menuOpenCtx.openMenuHandler}
    >
      <div className="mb-2 h-[3px] w-[36px] rounded-full bg-white"></div>
      <div className="mb-2 h-[3px] w-[21px] rounded-full bg-white"></div>
      <div className="h-[3px] w-[36px] rounded-full bg-white"></div>
    </div>
  );
};

export default Header;
