import React, { useState } from 'react';
import closeIcon from '../../../assets/images/close-icon.svg';
import minimizeIcon from '../../../assets/images/minimize-icon.svg';
import maximizeIcon from '../../../assets/images/maximize-icon.svg';
import TabContainer from './TabContainer';
import { app } from '../../channels';
import styles from '../styles/frame.component.css';
import { ipcSenderNonBlock } from '../utils/ipcSender';

const Frame: React.FC = () => {
  const [isMaximize, setIsMaximize] = useState<boolean>(true);
  const close = (): void => {
    ipcSenderNonBlock(app.quit);
  };
  const minimize = (): void => {
    ipcSenderNonBlock(app.minimize, 1);
  };
  const handleMaximize = (): void => {
    ipcSenderNonBlock(isMaximize ? app.unMaximize : app.maximize, 1);
    setIsMaximize(!isMaximize);
  };
  return (
    <>
      <hr className={styles.side_line} />
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
    </>
  );
};

export default Frame;
