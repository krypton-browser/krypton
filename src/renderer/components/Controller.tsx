import React from 'react';
import styles from '../styles/controller.component.css';
import reloadIcon from '../../../assets/images/reload-icon.svg';
import backspaceIcon from '../../../assets/images/backspace-icon.svg';
import forwardspaceIcon from '../../../assets/images/forwardspace-icon.svg';
import bookmarkIcon from '../../../assets/images/star.svg';
import settingMenuIcon from '../../../assets/images/setting-menu-icon.svg';

const Controller: React.FC = () => {
  return (
    <div className={styles.controller}>
      <div className={styles.button_wrapper}>
        <button type="button" className={styles.button}>
          <img src={backspaceIcon} alt="backspace" className={styles.icon} />
        </button>
        <button type="button" className={styles.button}>
          <img
            src={forwardspaceIcon}
            alt="forwardspace"
            className={styles.icon}
          />
        </button>
        <button type="button" className={styles.button}>
          <img src={reloadIcon} alt="reload" className={styles.icon} />
        </button>
      </div>
      <input type="text" className={styles.url_text_box} />
      <div className={styles.button_wrapper}>
        <button type="button" className={styles.button}>
          <img src={bookmarkIcon} alt="bookmark" className={styles.icon} />
        </button>
        <button type="button" className={styles.button}>
          <img
            src={settingMenuIcon}
            alt="setting menu"
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
};

export default Controller;
