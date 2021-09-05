import React, { useState } from 'react';
import closeIcon from '../../../assets/images/close-icon.svg';
import minimizeIcon from '../../../assets/images/minimize-icon.svg';
import maximizeIcon from '../../../assets/images/maximize-icon.svg';
import TabContainer from './TabContainer';
import { app } from '../../channels';
import styles from '../styles/frame.component.css';
import ipcSender from '../utils/ipcSender';

const Frame: React.FC = () => {
  const [isMaximize, setIsMaximize] = useState<boolean>(true);
  const close = async (): Promise<void> => {
    await ipcSender(app.quit);
  };
  const minimize = async (): Promise<void> => {
    await ipcSender(app.minimize);
  };
  const handleMaximize = async (): Promise<void> => {
    await ipcSender(isMaximize ? app.unMaximize : app.maximize);
    setIsMaximize(!isMaximize);
  };
  return (
    <header className={styles.frame_container}>
      <TabContainer />
      <div className={styles.frame_button_wrapper}>
        <button className={styles.button} type="button" onClick={minimize}>
          <img src={minimizeIcon} alt="minimize" className={styles.icon} />
        </button>
        <button
          className={styles.button}
          type="button"
          onClick={handleMaximize}
        >
          <img src={maximizeIcon} alt="close" className={styles.icon} />
        </button>
        <button className={styles.button} type="button" onClick={close}>
          <img src={closeIcon} alt="close" className={styles.icon} />
        </button>
      </div>
    </header>
  );
};

export default Frame;
