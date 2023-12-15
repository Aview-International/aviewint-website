import Image from 'next/image';
import Link from 'next/link';
import { useContext, useMemo } from 'react';
import MenuOpenContext from '../../store/menu-open-context';
import Button from '../UI/Button';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import aviewLogo from '../../public/img/aview/logo.png';
import MenuButtonIcon from './MenuButtonIcon';
import { checkTokenExpiry } from '../../utils/jwtExpiry';
import { useSelector } from 'react-redux';

const Header = ({ curPage }) => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <>
      <header className="navigation relative z-50 mt-10 flex items-center justify-between rounded-full bg-gray-1 p-2 text-white">
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
        <MenuButtonIcon handler={menuOpenCtx.openMenuHandler} />
      </header>
      <MobileMenu />
    </>
  );
};

const HeaderButtons = () => {
  const token = useSelector((data) => data.user.token);
  const isLoggedIn = useMemo(() => {
    return checkTokenExpiry(token);
  }, [token]);

  return (
    <div className="hidden gap-5 lg:flex">
      {!isLoggedIn && (
        <Button purpose="route" route="/#generate-aview" type="primary">
          Contact Us
        </Button>
      )}

      {/* <Button purpose="route" route="/waitlist" type="secondary">
        Join Waitlist
      </Button> */}
      {!isLoggedIn ? (
        <Button purpose="route" route="/login" type="secondary">
          Login
        </Button>
      ) : (
        <Button purpose="route" route="/dashboard" type="secondary">
          Dashboard
        </Button>
      )}
    </div>
  );
};

export default Header;
