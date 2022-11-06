import { createContext, useState } from 'react';

const MenuOpenContext = createContext({
  isMenuOpen: false,
  openMenuHandler: () => {},
  closeMenuHandler: () => {},
});

export const MenuOpenContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
    document.querySelector('body').classList.add('h-screen-trick');
  };

  const closeMenuHandler = () => {
    setIsMenuOpen(false);
    document.querySelector('body').classList.remove('h-screen-trick');
  };

  return (
    <MenuOpenContext.Provider
      value={{ isMenuOpen, openMenuHandler, closeMenuHandler }}
    >
      {children}
    </MenuOpenContext.Provider>
  );
};

export default MenuOpenContext;

