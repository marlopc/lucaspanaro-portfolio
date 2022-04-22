import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import useScrollEvent from "../hooks/useScrollEvent";
import { encodeLower } from "../lib/encode";
import { navContent, sectionNames } from "../lib/translations";
import styles from "../styles/Nav.module.css";
import PortfolioLogo from "./icons/PortfolioLogo";
import NavDesktop from "./NavDesktop";
import NavResponsive from "./NavResponsive";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { pathname, locale } = useRouter();

  useScrollEvent({
    scrollUpCb: () => setIsHidden(false),
    scrollDownCb: () => setIsHidden(true),
  });

  const isDesktopLikeScreen = useMediaQuery("(min-width: 1020px)");

  const { home } = navContent[locale];
  const sections = sectionNames[locale];

  return (
    <>
      <div className={styles.navHold} name={home.toLowerCase()} />
      <header
        className={
          isHidden && isDesktopLikeScreen
            ? styles.navContainerHidden
            : styles.navContainer
        }
        onFocus={() => setIsHidden(false)}
      >
        <Link href={pathname === "/" ? `/#${encodeLower(sections.home)}` : "/"}>
          <a aria-label={home.toLowerCase()}>
            <PortfolioLogo />
          </a>
        </Link>
        {isDesktopLikeScreen ? <NavDesktop /> : <NavResponsive />}
      </header>
    </>
  );
};

export default Nav;
