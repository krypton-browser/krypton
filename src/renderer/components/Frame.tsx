import React from 'react';
import closeIcon from '../../../assets/images/close-icon.svg';
import minimizeIcon from '../../../assets/images/minimize-icon.svg';
import maximizeIcon from '../../../assets/images/maximize-icon.svg';
import TabContainer from './TabContainer';

import styles from '../styles/frame.component.css';

const Frame: React.FC = () => {
  return (
    <header className={styles.frame_container}>
      <TabContainer />
      <div className={styles.frame_button_wrapper}>
        <button className={styles.button} type="button">
          <img src={minimizeIcon} alt="minimize" className={styles.icon} />
        </button>
        <button className={styles.button} type="button">
          <img src={maximizeIcon} alt="close" className={styles.icon} />
        </button>
        <button className={styles.button} type="button">
          <img src={closeIcon} alt="close" className={styles.icon} />
        </button>
      </div>
    </header>
  );
};

export default Frame;
