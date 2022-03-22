import { useEffect, useState } from 'react';

const useObserver = (ref, margin = 0, { disableIf = null } = {}) => {
  const [animation, setAnimation] = useState(false);
  const rootMargin = typeof margin === 'string'
    ? margin
    : `${margin}px`;

  useEffect(() => {
    let intersectionObserver;

    if (disableIf && window.matchMedia(disableIf).matches) {
      setAnimation(true);
    } else {
      intersectionObserver = new IntersectionObserver((entries, observer) => {
        const el = entries[0];
        if (el.isIntersecting && !animation) {
          setAnimation(true);
          observer.disconnect();
        }
      }, {
        rootMargin,
      });

      intersectionObserver.observe(ref.current);
    }

    return () => {
      if (intersectionObserver) {
        intersectionObserver.disconnect();
      }
    };
  }, []);

  return [animation, ref];
};

export default useObserver;
