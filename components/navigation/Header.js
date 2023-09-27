import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import aviewLogo from '../../public/img/aview/logo.svg';
import MenuButtonIcon from './MenuButtonIcon';

const Header = ({ curPage }) => {
  const menuOpenCtx = useContext(MenuOpenContext);
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
        <MenuButtonIcon handler={menuOpenCtx.openMenuHandler} />
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
      {/* <Button purpose="route" route="/waitlist" type="secondary">
        Join Waitlist
      </Button> */}
      <Button purpose="route" route="/login" type="secondary">
        Login
      </Button>
    </div>
  );
};

export default Header;
