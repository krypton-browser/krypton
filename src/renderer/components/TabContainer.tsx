import React from 'react';
import Tab from './Tab';
import styles from '../styles/tab-container.component.css';

const TabContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <Tab
        title="Naver"
        image="https://s2.googleusercontent.com/s2/favicons?domain=naver.com"
        isCurrent={false}
      />
    </div>
  );
};

export default TabContainer;
