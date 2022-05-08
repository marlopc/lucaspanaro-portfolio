import { useRouter } from "next/router";
import React, { useRef } from "react";
import CSSIcon from "~/components/Stack/svg/CSSIcon";
import ExpressIcon from "~/components/Stack/svg/ExpressIcon";
import HTMLIcon from "~/components/Stack/svg/HTMLIcon";
import JavascriptIcon from "~/components/Stack/svg/JavascriptIcon";
import MongoIcon from "~/components/Stack/svg/MongoIcon";
import NextIcon from "~/components/Stack/svg/NextIcon";
import NodeIcon from "~/components/Stack/svg/NodeIcon";
import PostgresIcon from "~/components/Stack/svg/PostgresIcon";
import ReactIcon from "~/components/Stack/svg/ReactIcon";
import SequelizeIcon from "~/components/Stack/svg/SequelizeIcon";
import TechIcon from "~/components/Stack/TechIcon";
import useObserver from "~/hooks/useObserver";
import useStackTabs from "~/hooks/useStackTabs";
import { sectionNames } from "~/lib/translations";
import styles from "~/styles/Stack.module.css";

const TabButton = React.forwardRef(function TabButton(
  { tabId, label, currentTab, ...rest },
  ref
) {
  return (
    <button
      id={tabId}
      aria-selected={currentTab === tabId}
      tabIndex={currentTab === tabId ? "0" : "-1"}
      aria-controls={`${tabId}-tab`}
      role="tab"
      className={`${styles.ns} ${currentTab === tabId && styles.s}`}
      ref={ref}
      {...rest}
    >
      {label}
    </button>
  );
});

const TabPanel = ({ tabId, currentTab, children }) => {
  return (
    <div
      className={`${styles.stack_data} ${
        currentTab === tabId ? styles.stack_data_s : ""
      }`}
      role="tabpanel"
      tabIndex={currentTab === tabId ? "0" : "-1"}
      aria-labelledby={tabId}
      aria-hidden={currentTab !== tabId}
      id={`${tabId}-tab`}
    >
      {children}
    </div>
  );
};

const Stack = () => {
  const { locale } = useRouter();
  const { stack } = sectionNames[locale];
  const { selected, ref, handleKeyDown, handleClick } = useStackTabs();

  const containerRef = useRef();
  const [animation] = useObserver(containerRef, 150, {
    disableIf: "(max-height: 300px)",
  });

  return (
    <section className="sectionContainer">
      <div className={styles.container}>
        <div
          className={`${styles.stack_background} ${
            animation ? "fade_in_up" : ""
          }`}
          ref={containerRef}
        >
          <div className={styles.switch} role="tablist" aria-label={stack}>
            <TabButton
              tabId="frontend"
              currentTab={selected}
              label="Frontend"
              onClick={handleClick}
              ref={ref}
              onKeyDown={handleKeyDown}
            />
            <TabButton
              tabId="backend"
              currentTab={selected}
              label="Backend"
              onClick={handleClick}
              ref={ref}
              onKeyDown={handleKeyDown}
            />
            <TabButton
              tabId="db"
              currentTab={selected}
              label="Database"
              onClick={handleClick}
              ref={ref}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={styles.stack_outer}>
            <TabPanel tabId="frontend" currentTab={selected}>
              <TechIcon label="HTML" icon={<HTMLIcon />} />
              <TechIcon label="CSS" icon={<CSSIcon />} />
              <TechIcon label="Javascript" icon={<JavascriptIcon />} />
              <TechIcon
                label="React"
                href="https://reactjs.org"
                icon={<ReactIcon />}
              />
            </TabPanel>
            <TabPanel tabId="backend" currentTab={selected}>
              <TechIcon
                label="Node"
                href="https://nodejs.org/"
                icon={<NodeIcon />}
              />
              <TechIcon
                label="Express"
                href="https://expressjs.com/"
                icon={<ExpressIcon />}
              />
              <TechIcon
                label="Next"
                href="https://nextjs.org/"
                icon={<NextIcon />}
              />
              <TechIcon
                label="Sequelize"
                href="https://sequelize.org/"
                icon={<SequelizeIcon />}
              />
            </TabPanel>
            <TabPanel tabId="db" currentTab={selected}>
              <TechIcon
                label="MongoDB"
                href="https://www.mongodb.com/"
                icon={<MongoIcon />}
              />
              <TechIcon
                label="PostgreSQL"
                href="https://www.postgresql.org/"
                icon={<PostgresIcon />}
              />
            </TabPanel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
