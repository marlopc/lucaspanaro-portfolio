import { useEffect, useState } from 'react';

const useObserver = (ref, margin = 0, { disableIf = null } = {}) => {
  const [animation, setAnimation] = useState(false);
  const rootMargin = typeof margin === 'string'
    ? margin
    : `${margin}px`;

  useEffect(() => {
    if(disableIf && window.matchMedia(disableIf).matches) {
      setAnimation(true);
      return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      const el = entries[0];
      if(el.isIntersecting && !animation) {
        setAnimation(true);
        observer.disconnect();
      }
    }, {
      rootMargin,
    });

    observer.observe(ref.current);

    return () => {
      observer && observer.disconnect();
    }
  }, []);

  return [animation, ref];
};

export default useObserver;
