import { useState } from 'react';
import useRefs from './useRefs';

const useResponsiveMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { refs, ref } = useRefs();

  const openMenu = ({ focusFirstItem = true } = {}) => {
    setMenuIsOpen(true);
    if(focusFirstItem) {
      refs.current[1].focus();
    }
  };

  const closeMenu = ({ focusBurger = true } = {}) => {
    setMenuIsOpen(false);
    if(focusBurger) {
      refs.current[0].focus();
    }
  };

  const handleKeyDown = (e) => {
    if(!menuIsOpen) return;

    if(e.key === 'Home') {
      refs.current[1].focus();
      e.preventDefault();
    }

    if(e.key === 'End') {
      refs.current[refs.current.length - 1].focus();
      e.preventDefault();
    }

    if(e.key === 'Escape') {
      menuIsOpen && closeMenu();
      e.preventDefault();
    }

    if(e.key === 'Tab') {
      if(!e.shiftKey && e.target === refs.current[refs.current.length - 1]) {
        refs.current[0].focus();
        e.preventDefault();
      } 

      if(e.shiftKey && e.target === refs.current[0]) {
        refs.current[refs.current.length - 1].focus();
        e.preventDefault();
      }
    }
  };

  return {
    refs,
    ref,
    openMenu,
    closeMenu,
    handleKeyDown,
    menuIsOpen,
  };
};

export default useResponsiveMenu;
