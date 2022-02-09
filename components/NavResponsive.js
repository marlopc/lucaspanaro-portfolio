import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import useResponsiveMenu from '../hooks/useResponsiveMenu';
import Burger from './Burger';
import ResponsiveMenu from './ResponsiveMenu';

const NavResponsive = () => {
  const isMobileLikeScreen = useMediaQuery('(max-width: 950px)');
  
  const {
    ref: addItemToRefs,
    handleKeyDown,
    menuIsOpen,
    openMenu,
    closeMenu,
  } = useResponsiveMenu();

  return (
    <>
      <Burger
        openMenu={openMenu}
        closeMenu={closeMenu}
        menuIsOpen={menuIsOpen}
        ref={addItemToRefs}
        handleKeyDown={handleKeyDown}
      />
      {isMobileLikeScreen && (
        <ResponsiveMenu
          menuIsOpen={menuIsOpen}
          closeMenu={closeMenu}
          addItemToRefs={addItemToRefs}
          handleKeyDown={handleKeyDown}
        />
      )}
    </>
  );
};

export default NavResponsive;
