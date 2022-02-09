import { useRef } from 'react';

const useRefs = () => {
  const refs = useRef([])

  const ref = (ref) => {
    if(!ref || refs.current.includes(ref)) return;

    refs.current.push(ref);
  };

  return { refs, ref };
};

export default useRefs;
