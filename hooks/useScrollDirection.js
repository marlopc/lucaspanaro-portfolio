import { useEffect, useCallback, useState } from 'react';

const useScrollDirection = (cb) => {
  const [y, setY] = useState(0);

  const handleNavigation = useCallback(e => {
    const window = e.currentTarget;
    cb(y < window.scrollY);
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

export default useScrollDirection;
