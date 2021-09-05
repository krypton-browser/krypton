import React from 'react';
import classNames from 'classnames';
import styles from '../styles/tab.component.css';

type TabProps = {
  readonly image: string;
  readonly title: string;
  readonly isCurrent: boolean;
};

const Tab = ({ image, title, isCurrent }: TabProps) => {
  return (
    <div
      className={classNames(
        styles.tab_item_wrapper,
        isCurrent ? styles.is_current : ''
      )}
    >
      <img src={image} alt="favicon" className={styles.favicon} />
      <p className={styles.title}>{title}</p>
      <button className={styles.delete_button} type="button">
        x
      </button>
    </div>
  );
};

export default Tab;
