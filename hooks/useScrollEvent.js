import { useEffect, useCallback, useState } from 'react';

const useScrollEvent = ({ scrollUpCb, scrollDownCb }) => {
  const [y, setY] = useState(0);

  const handleNavigation = useCallback(e => {
    const window = e.currentTarget;
    if (y < window.scrollY) {
      scrollDownCb();
    } else {
      scrollUpCb();
    }
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener('scroll', handleNavigation);

    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation]);
  
  return;
};

export default useScrollEvent;
