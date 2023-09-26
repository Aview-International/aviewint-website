import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import aviewLogo from '../../public/img/aview/logo.png';
import MenuButtonIcon from './MenuButtonIcon';

const Header = ({ curPage }) => {
  const menuOpenCtx = useContext(MenuOpenContext);
  return (
    <>
      <header className="navigation relative z-50 mt-10 flex items-center bg-gray-1 rounded-full justify-between p-2 text-white">
         <Link href="/">
            <a className="-mb-1 mt-1 w-32 md:w-60">
              <Image
                src={aviewLogo}
                alt="AVIEW International logo"
                width="180"
                height="50"
              />
            </a>
          </Link>
          <div className="flex items-center md:gap-x-10">
            <DesktopMenu curPage={curPage} />
            <HeaderButtons />
         </div>
         <MenuButtonIcon handler={menuOpenCtx.openMenuHandler}/>
      </header>
      <MobileMenu />
    </>
  );
};

const HeaderButtons = () => {
  return (
    <div className="gap-5 md:block hidden">
      <Button purpose="route" route="/waitlist" type="primary">
        Join Wailtlist
      </Button>
    </div>
  );
};

export default Header;
