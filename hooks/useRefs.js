import { useRef } from "react";

const useRefs = () => {
  const refs = useRef([]);

  const pushRef = (ref) => {
    if (!ref || refs.current.includes(ref)) return;

    refs.current.push({ current: ref });
  };

  return { refs, ref: pushRef };
};

export default useRefs;
