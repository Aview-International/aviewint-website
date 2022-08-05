import Image from 'next/image';
import Link from 'next/link';
import aviewLogo from '../../public/img/aview/logo.svg';
import closeIcon from '../../public/img/icons/close.svg';
import { ROUTES } from '../../constants/constants';
import Button from '../UI/Button';
import { useContext } from 'react';
import MenuOpenContext from '../../store/menu-open-context';

const Header = ({ curPage }) => {
  return (
    <>
      <header className="mx-s3 mt-s5 flex items-center justify-between md:mx-auto md:w-[95%]">
        <div className="flex items-center">
          <HeaderLogo />
          <DesktopRoutes curPage={curPage} />
        </div>
        <HeaderButtons />
        <MenuButton />
      </header>
      <MobileMenu />
    </>
  );
};

const HeaderLogo = () => {
  return (
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
  );
};

const DesktopRoutes = ({ curPage }) => {
  return (
    <div className="hidden lg:block">
      {ROUTES.map((route) => (
        <Link href={route.route} key={route.id}>
          <a
            className={`text-md ml-s5 xl:text-lg ${
              curPage === route.text ? `gradient-text gradient-1` : `text-white`
            }`}
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
    <div className="hidden items-center gap-s2.5 lg:flex">
      <Button route="/#contact-us" buttonType="primary">
        Contact Us
      </Button>
      {/* <Button route="/login" buttonType="secondary">
            Log In
          </Button> */}
    </div>
  );
};

const MenuButton = () => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div
      className="flex cursor-pointer flex-col items-end lg:hidden"
      onClick={menuOpenCtx.toggleMenuHandler}
    >
      <div className="mb-s1 h-[3px] w-[36px] rounded-full bg-white"></div>
      <div className="mb-s1 h-[3px] w-[21px] rounded-full bg-white"></div>
      <div className="h-[3px] w-[36px] rounded-full bg-white"></div>
    </div>
  );
};

const MobileMenu = () => {
  const menuOpenCtx = useContext(MenuOpenContext);

  return (
    <div
      className={`h-screen-trick transition-300 absolute top-0 left-0 grid w-screen opacity-100 ${
        !menuOpenCtx.isMenuOpen && `translate-x-full opacity-0`
      } place-content-center bg-black`}
    >
      <div
        className="absolute right-s3 top-s8 cursor-pointer md:right-[2.5%]"
        onClick={menuOpenCtx.toggleMenuHandler}
      >
        <Image src={closeIcon} width={32} height={32} alt="close icon" />
      </div>
      <div>
        {ROUTES.map((route) => (
          <div key={route.id}>
            <Link href={route.route}>
              <a className="gradient-text gradient-2 mb-8 text-4xl font-bold">
                {route.text}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
