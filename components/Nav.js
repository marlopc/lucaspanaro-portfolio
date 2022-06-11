import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PortfolioLogo from "~/components/icons/PortfolioLogo";
import useScrollEvent from "~/hooks/useScrollEvent";
import { encodeLower } from "~/lib/encode";
import { navContent, sectionNames } from "~/lib/translations";
import styles from "~/styles/Nav.module.css";
import Burger from "~/components/Burger";
import useDrawer from "~/hooks/useDrawer";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(false);

  useScrollEvent({
    onScrollUp: () => setIsHidden(false),
    onScrollDown: () => setIsHidden(true),
  });

  const drawer = useDrawer({ maxWidth: 860 });

  const { pathname, locale } = useRouter();

  const navNames = navContent[locale];
  const sections = sectionNames[locale];

  const isIndexPage = pathname === "/";

  return (
    <header
      onFocus={() => setIsHidden(false)}
      className={clsx(styles.container, {
        [styles.hidden]: isHidden,
      })}
    >
      <Link href={isIndexPage ? `/#${encodeLower(sections.home)}` : "/"}>
        <a aria-label={navNames.home.toLowerCase()}>
          <PortfolioLogo />
        </a>
      </Link>
      <button
        onClick={drawer.toggle}
        className={styles.drawerButton}
        ref={drawer.burgerRef}
        {...drawer.buttonARIAProps}
      >
        <Burger isOpen={drawer.isOpen} />
      </button>
      <nav
        className={clsx(styles.links, { [styles.open]: drawer.isOpen })}
        ref={drawer.drawerRef}
        {...drawer.drawerARIAProps}
      >
        <div className={styles.drawerLogo}>
          <PortfolioLogo />
        </div>
        <ul className={styles.linksList}>
          <li>
            <Link href={isIndexPage ? `/#${encodeLower(sections.home)}` : "/"}>
              <a>{navNames.home}</a>
            </Link>
          </li>
          {isIndexPage && (
            <>
              <li>
                <Link href={`/#${encodeLower(sections.bio)}`}>
                  <a>{navNames.bio}</a>
                </Link>
              </li>
              <li>
                <Link href={`/#${encodeLower(sections.stack)}`}>
                  <a>{navNames.stack}</a>
                </Link>
              </li>
              <li>
                <Link href={`/#${encodeLower(sections.projects)}`}>
                  <a>{navNames.projects}</a>
                </Link>
              </li>
              <li>
                <Link href={`/#${encodeLower(sections.contact)}`}>
                  <a>{navNames.contact}</a>
                </Link>
              </li>
            </>
          )}
          <li>
            <a
              href={process.env.NEXT_PUBLIC_CV_DRIVE}
              target="_blank"
              rel="noopener noreferrer"
            >
              {navNames.resume}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
