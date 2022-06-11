import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { navContent } from "~/lib/translations";
import useMediaQuery from "~/hooks/useMediaQuery";

const focusableElementsQuery =
  'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

const useDrawer = ({ maxWidth }) => {
  const isDrawerVisible = useMediaQuery(`(max-width: ${maxWidth}px)`);

  const { asPath, locale } = useRouter();

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const drawerRef = useRef(null);
  const lastItemRef = useRef(null);
  const burgerRef = useRef(null);

  const { open, close, title } = navContent[locale];

  const turnAnimation = ({ onAnimationEnd } = {}) => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      typeof onAnimationEnd === "function" && onAnimationEnd();
    }, 200);
  };

  const drawerRefCallback = useCallback((drawerNode) => {
    if (drawerNode === null) return;

    const clickableChildren = drawerNode.querySelectorAll(
      focusableElementsQuery
    );

    const lastItem = clickableChildren[clickableChildren.length - 1];

    drawerRef.current = drawerNode;
    lastItemRef.current = lastItem;
  }, []);

  const openWithAnimation = useCallback(() => {
    if (isAnimating) return;

    turnAnimation({
      onAnimationEnd: () => {
        const currentFocusIsInside =
          document.activeElement === burgerRef.current ||
          drawerRef.current.contains(document.activeElement);

        if (!currentFocusIsInside) {
          burgerRef.current.focus();
        }
      },
    });

    setIsOpen(true);
  }, [isAnimating]);

  const closeWithAnimation = useCallback(
    ({ focus } = {}) => {
      if (isAnimating) return;

      turnAnimation({
        onAnimationEnd: () => {
          focus && burgerRef.current.focus();
        },
      });

      setIsOpen(false);
    },
    [isAnimating]
  );

  const toggle = useCallback(() => {
    isOpen ? closeWithAnimation() : openWithAnimation();
  }, [isAnimating, isOpen]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      closeWithAnimation();
      e.preventDefault();
    }

    if (e.key === "Tab") {
      if (e.shiftKey && e.srcElement === burgerRef.current) {
        lastItemRef.current.focus();
        e.preventDefault();
      } else if (!e.shiftKey && e.srcElement === lastItemRef.current) {
        burgerRef.current.focus();
        e.preventDefault();
      }
    }
  }, []);

  const handleFocusIn = useCallback((e) => {
    const focusableElements = document.querySelectorAll(focusableElementsQuery);

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (e.target === first) {
      burgerRef.current.focus();
    } else if (e.target === last) {
      lastItemRef.current.focus();
    }
  }, []);

  const buttonARIAProps = isDrawerVisible
    ? {
        "aria-label": isOpen ? close : open,
      }
    : {};

  const drawerARIAProps = isDrawerVisible
    ? {
        role: "dialog",
        "aria-modal": true,
        "aria-hidden": !isOpen,
        "aria-label": title,
      }
    : {};

  useEffect(() => {
    document.documentElement.style.overflow =
      isDrawerVisible && isOpen ? "hidden" : "auto";

    if (isAnimating && !isOpen) return;

    drawerRef.current.style.visibility =
      isOpen || !isDrawerVisible ? "visible" : "hidden";
  }, [isOpen, isAnimating, isDrawerVisible]);

  useEffect(() => {
    if (!isDrawerVisible || !isOpen) {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);

      return;
    }

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("focusin", handleFocusIn);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", handleFocusIn);
    };
  }, [isOpen, isAnimating, isDrawerVisible]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);

      return;
    }

    console.log("eee");
    setIsOpen(false);
  }, [asPath]);

  return {
    close: closeWithAnimation,
    drawerRef: drawerRefCallback,
    open: openWithAnimation,
    burgerRef,
    buttonARIAProps,
    drawerARIAProps,
    isOpen,
    toggle,
  };
};

export default useDrawer;
