import { useRef, useState } from 'react';
import useObserver from '../hooks/useObserver';
import styles from '../styles/Stack.module.css';
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

const Stack = () => {
  const [selected, setSelected] = useState('frontend');
  const containerRef = useRef();
  const [animation] = useObserver(containerRef, '-150px');

  const handleSwitch = (value) => {
    setSelected(value);
  };

  return (
    <div className='sectionContainer'>
      <div className={styles.container}>
        <div className={`${styles.stack_background} ${animation ? 'fade_in_up' : null}`} ref={containerRef}>
          <nav className={styles.switch}>
            <ul>
              <li 
                className={`${styles.ns} ${selected === 'frontend' && styles.s}`}
                onClick={() => handleSwitch('frontend')}
              >
                <span>Frontend</span>
              </li>
              <li 
                name='backend' 
                className={`${styles.ns} ${selected === 'backend' && styles.s}`}
                onClick={() => handleSwitch('backend')}
              >
                <span>Backend</span>
              </li>
              <li 
                name='db' 
                className={`${styles.ns} ${selected === 'db' && styles.s}`}
                onClick={() => handleSwitch('db')}
              >
                <span>Database</span>
              </li>
            </ul>
          </nav>
          <div className={styles.stack_outer}>
            <div className={`${styles.stack_data} ${selected === 'frontend' && styles.stack_data_s}`}>
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
            </div>
            <div className={`${styles.stack_data} ${selected === 'backend' && styles.stack_data_s}`}>
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
            </div>
            <div className={`${styles.stack_data} ${selected === 'db' && styles.stack_data_s}`}>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack
