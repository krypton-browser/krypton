import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import closeIcon from '../../../assets/images/close-icon.svg';
import minimizeIcon from '../../../assets/images/minimize-icon.svg';
import maximizeIcon from '../../../assets/images/maximize-icon.svg';
import unMaximizeIcon from '../../../assets/images/unmaximize-icon.svg';
import TabContainer from './TabContainer';
import { app } from '../../channels';
import styles from '../styles/frame.component.css';
import { ipcSender, ipcSenderNonBlock } from '../utils/ipcSender';

const Frame: React.FC = () => {
  const [windowIsMaximized, setWindowIsMaximized] = useState<boolean>(false);

  const close = (): void => {
    ipcSenderNonBlock(app.quit);
  };
  const minimize = (): void => {
    ipcSenderNonBlock(app.minimize, 1);
  };
  const handleMaximize = async (): Promise<void> => {
    const isMaximize = JSON.parse(await ipcSender(app.load_is_maximize));
    ipcSenderNonBlock(isMaximize ? app.unMaximize : app.maximize);
    setWindowIsMaximized(!isMaximize);
  };
  useEffect(() => {
    (async () => {
      const isMaximize = JSON.parse(await ipcSender(app.load_is_maximize));
      setWindowIsMaximized(isMaximize);
    })();
  }, []);
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
            <img
              src={windowIsMaximized ? unMaximizeIcon : maximizeIcon}
              alt="close"
              className={styles.icon}
            />
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

export const SubFrame: React.FC = () => {
  const [windowIsMaximized, setWindowIsMaximized] = useState<boolean>(false);

  const close = (): void => {
    ipcSenderNonBlock(app.quit);
  };
  const minimize = (): void => {
    ipcSenderNonBlock(app.minimize, 1);
  };
  const handleMaximize = async (): Promise<void> => {
    const isMaximize = JSON.parse(await ipcSender(app.load_is_maximize));
    ipcSenderNonBlock(isMaximize ? app.unMaximize : app.maximize);
    setWindowIsMaximized(!isMaximize);
  };
  useEffect(() => {
    (async () => {
      const isMaximize = JSON.parse(await ipcSender(app.load_is_maximize));
      setWindowIsMaximized(isMaximize);
    })();
  }, []);
  return (
    <>
      <hr className={styles.side_line} />
      <header
        className={classNames(styles.frame_container, styles.is_sub_frame)}
      >
        <div className={styles.frame_button_wrapper}>
          <button className={styles.button} type="button" onClick={minimize}>
            <img src={minimizeIcon} alt="minimize" className={styles.icon} />
          </button>
          <button
            className={styles.button}
            type="button"
            onClick={handleMaximize}
          >
            <img
              src={windowIsMaximized ? unMaximizeIcon : maximizeIcon}
              alt="close"
              className={styles.icon}
            />
          </button>
          <button className={styles.button} type="button" onClick={close}>
            <img src={closeIcon} alt="close" className={styles.icon} />
          </button>
        </div>
      </header>
    </>
  );
};
