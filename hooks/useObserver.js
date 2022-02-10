import { useEffect, useState } from 'react';

const useObserver = (ref, margin = '0px', { disableIf = null } = {}) => {
  const [animation, setAnimation] = useState(false);

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
      rootMargin: margin
    });

    observer.observe(ref.current);

    return () => {
      if(observer) observer.disconnect();
    }
  }, []);

  return [animation, ref];
};

export default useObserver;
