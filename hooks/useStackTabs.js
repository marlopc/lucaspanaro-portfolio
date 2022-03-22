import { useState } from 'react';
import useRefs from './useRefs';

const useStackTabs = () => {
  const [selected, setSelected] = useState('frontend');
  const { refs, ref } = useRefs();

  const selectAndFocus = (index) => {
    const toElement = refs.current[index];
    toElement.focus();
    setSelected(toElement.id);
  };

  const handleKeyDown = (e) => {
    const { id } = e.target.closest('button');
    const tabEventIndex = refs.current.findIndex((tabButton) => tabButton.id === id);

    if (e.key === 'ArrowLeft') {
      const toIndex = ((tabEventIndex - 1) + refs.current.length) % refs.current.length;
      selectAndFocus(toIndex);
      e.preventDefault();
    }

    if (e.key === 'ArrowRight') {
      const toIndex = ((tabEventIndex + 1) + refs.current.length) % refs.current.length;
      selectAndFocus(toIndex);
      e.preventDefault();
    }

    if (e.key === 'Home') {
      selectAndFocus(0);
      e.preventDefault();
    }

    if (e.key === 'End') {
      selectAndFocus(refs.current.length - 1);
      e.preventDefault();
    }
  };

  const handleClick = (e) => {
    const buttonElement = e.target.closest('button');
    const { id } = buttonElement;
    setSelected(id);
  };

  return {
    selected,
    ref,
    handleKeyDown,
    handleClick,
  };
};

export default useStackTabs;
