import { useEffect, useState } from 'react';

const useObserver = (ref, margin = '0px') => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
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

    return () => observer && observer.disconnect();
  });

  return [animation, ref];
};

export default useObserver;
