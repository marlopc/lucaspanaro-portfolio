import { useEffect, useCallback, useState } from "react";

const useScrollEvent = ({ onScrollUp, onScrollDown }) => {
  const [y, setY] = useState(0);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < window.scrollY) {
        onScrollDown();
      } else {
        onScrollUp();
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
};

export default useScrollEvent;
