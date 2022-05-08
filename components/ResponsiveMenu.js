import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import PortfolioLogo from "~/components/icons/PortfolioLogo";
import { encodeLower } from "~/lib/encode";
import { navContent, sectionNames } from "~/lib/translations";
import styles from "~/styles/Menu.module.css";

const ResponsiveMenu = ({
  menuIsOpen,
  closeMenu,
  addItemToRefs,
  handleKeyDown,
}) => {
  const { locale, pathname } = useRouter();

  const navNames = navContent[locale];
  const sections = sectionNames[locale];

  const handleClick = () => {
    closeMenu({ focusBurger: false });
  };

  const mainPageNavigation = (
    <>
      <li>
        <Link href={`/#${encodeLower(sections.bio)}`}>
          <a
            onClick={handleClick}
            tabIndex={menuIsOpen ? "0" : "-1"}
            ref={addItemToRefs}
          >
            <div>{navNames.bio}</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/#${encodeLower(sections.stack)}`}>
          <a
            onClick={handleClick}
            tabIndex={menuIsOpen ? "0" : "-1"}
            ref={addItemToRefs}
          >
            <div>{navNames.stack}</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/#${encodeLower(sections.projects)}`}>
          <a
            onClick={handleClick}
            tabIndex={menuIsOpen ? "0" : "-1"}
            ref={addItemToRefs}
          >
            <div>{navNames.projects}</div>
          </a>
        </Link>
      </li>
      <li>
        <Link href={`/#${encodeLower(sections.contact)}`}>
          <a
            onClick={handleClick}
            tabIndex={menuIsOpen ? "0" : "-1"}
            ref={addItemToRefs}
          >
            <div>{navNames.contact}</div>
          </a>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav className={`${styles.menu} ${menuIsOpen ? styles.show_menu : ""}`}>
        <header>
          <PortfolioLogo />
        </header>
        <ul className={styles.menuLinksUl} onKeyDown={handleKeyDown}>
          <li>
            <Link href={`/#${encodeLower(sections.home)}`}>
              <a
                onClick={handleClick}
                tabIndex={menuIsOpen ? "0" : "-1"}
                ref={addItemToRefs}
              >
                <div>{navNames.home}</div>
              </a>
            </Link>
          </li>
          {pathname === "/" && mainPageNavigation}
          <li>
            <a
              href={process.env.NEXT_PUBLIC_CV_DRIVE}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={menuIsOpen ? "0" : "-1"}
              ref={addItemToRefs}
              onClick={closeMenu}
            >
              <div>{navNames.resume}</div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ResponsiveMenu;
