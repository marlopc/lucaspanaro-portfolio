import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Stack.module.css';
import useObserver from '../hooks/useObserver';
import useStackTabs from '../hooks/useStackTabs';
import CSSIcon from './Stack/svg/CSSIcon';
import ExpressIcon from './Stack/svg/ExpressIcon';
import HTMLIcon from './Stack/svg/HTMLIcon';
import JavascriptIcon from './Stack/svg/JavascriptIcon';
import MongoIcon from './Stack/svg/MongoIcon';
import NextIcon from './Stack/svg/NextIcon';
import NodeIcon from './Stack/svg/NodeIcon';
import PostgresIcon from './Stack/svg/PostgresIcon';
import ReactIcon from './Stack/svg/ReactIcon';
import SequelizeIcon from './Stack/svg/SequelizeIcon';
import TechIcon from './Stack/TechIcon';
import { sectionNames } from '../lib/translations';

const TabButton = React.forwardRef(
  function TabButton ({ tabId, label, currentTab, ...rest }, ref) {

    return (
      <button
        id={tabId}
        aria-selected={currentTab === tabId}
        tabIndex={currentTab === tabId ? '0' : '-1'}
        aria-controls={`${tabId}-tab`}
        role='tab'
        className={`${styles.ns} ${currentTab === tabId && styles.s}`}
        ref={ref}
        {...rest}
      >
        {label}
      </button>
    )
  }
);

const TabPanel = ({ tabId, currentTab, children }) => {

  return (
    <div
      className={`${styles.stack_data} ${currentTab === tabId ? styles.stack_data_s : ''}`}
      role='tabpanel'
      tabIndex={currentTab === tabId ? '0' : '-1'}
      aria-labelledby={tabId}
      aria-hidden={currentTab !== tabId}
      id={`${tabId}-tab`}
    >
      {children}
    </div>
  )
};

const Stack = () => {
  const { locale } = useRouter();
  const { stack } = sectionNames[locale];
  const { selected, ref, handleKeyDown, handleClick } = useStackTabs();

  const containerRef = useRef();
  const [animation] = useObserver(
    containerRef,
    150,
    { disableIf: '(max-height: 300px)' }
  );

  return (
    <section className='sectionContainer'>
      <div className={styles.container}>
        <div className={`${styles.stack_background} ${animation ? 'fade_in_up' : ''}`} ref={containerRef}>
          <div className={styles.switch} role='tablist' aria-label={stack}>
            <TabButton
              tabId='frontend'
              currentTab={selected}
              label='Frontend'
              onClick={handleClick}
              ref={ref}
              onKeyDown={handleKeyDown}
            />
            <TabButton
              tabId='backend'
              currentTab={selected}
              label='Backend'
              onClick={handleClick}
              ref={ref}
              onKeyDown={handleKeyDown}
            />
            <TabButton
              tabId='db'
              currentTab={selected}
              label='Database'
              onClick={handleClick}
              ref={ref}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={styles.stack_outer}>
            <TabPanel tabId='frontend' currentTab={selected}>
              <TechIcon
                label='HTML'
                icon={<HTMLIcon />}
              />
              <TechIcon
                label='CSS'
                icon={<CSSIcon />}
              />
              <TechIcon
                label='Javascript'
                icon={<JavascriptIcon />}
              />
              <TechIcon
                label='React'
                href='https://reactjs.org'
                icon={<ReactIcon />}
              />
            </TabPanel>
            <TabPanel tabId='backend' currentTab={selected}>
              <TechIcon
                label='Node'
                href='https://nodejs.org/'
                icon={<NodeIcon />}
              />
              <TechIcon
                label='Express'
                href='https://expressjs.com/'
                icon={<ExpressIcon />}
              />
              <TechIcon
                label='Next'
                href='https://nextjs.org/'
                icon={<NextIcon />}
              />
              <TechIcon
                label='Sequelize'
                href='https://sequelize.org/'
                icon={<SequelizeIcon />}
              />
            </TabPanel>
            <TabPanel tabId='db' currentTab={selected}>
              <TechIcon
                label='MongoDB'
                href='https://www.mongodb.com/'
                icon={<MongoIcon />}
              />
              <TechIcon
                label='PostgreSQL'
                href='https://www.postgresql.org/'
                icon={<PostgresIcon />}
              />
            </TabPanel>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Stack;
