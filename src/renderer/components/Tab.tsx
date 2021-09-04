import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from '../styles/tab.component.css';

interface TabProps {
  readonly image: string;
  readonly title: string;
}

// eslint-disable-next-line react/prop-types
const Tab: React.FC<TabProps> = ({ image, title }) => {
  return (
    <div className={styles.tab_item_wrapper}>
      <img src={image} alt="favicon" className={styles.image} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Tab;
