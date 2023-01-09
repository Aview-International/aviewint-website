import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import aviewLogo from '../../public/img/aview/logo.svg';

const Header = ({ curPage }) => {
  return (
    <>
      <header className="navigation relative z-50 mt-10 flex items-center justify-between">
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

const HeaderButtons = () => {
  return (
    <div className="hidden gap-5 lg:flex">
      <Button purpose="route" route="/#generate-aview" type="primary">
        Contact Us
      </Button>
      <Button purpose="route" route="/login" type="secondary">
        Login
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
