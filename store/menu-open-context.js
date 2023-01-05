import { createContext, useState } from 'react';

const MenuOpenContext = createContext({
  curMenu: 'main',
  isMenuOpen: false,
  openMenuHandler: () => {},
  closeMenuHandler: () => {},
});

export const MenuOpenContextProvider = ({ children }) => {
  const [curMenu, setCurMenu] = useState('main');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
    document.querySelector('body').classList.add('h-screen-trick');
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
    document.querySelector('body').classList.remove('h-screen-trick');
    setCurMenu('main');
  };

  const setMenu = (newMenu) => {
    setCurMenu(newMenu);
  };

  return (
    <MenuOpenContext.Provider
      value={{
        curMenu,
        setMenu,
        isMenuOpen,
        openMenuHandler,
        closeMenuHandler,
      }}
    >
      {children}
    </MenuOpenContext.Provider>
  );
};

export default MenuOpenContext;
