import { createContext, useEffect, useState } from 'react';

const MenuOpenContext = createContext({
  isMenuOpen: false,
  toggleMenuHandler: () => {},
});

export const MenuOpenContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    document.querySelector('body').classList.toggle('h-screen-trick');
  };

  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, toggleMenuHandler }}>
      {children}
    </MenuOpenContext.Provider>
  );
};

export default MenuOpenContext;
