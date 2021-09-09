import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from '../styles/layout.component.css';
import hex from '../../../assets/images/hex.svg';
import Sidebar from './Sidebar';
import Frame, { SubFrame } from './Frame';
import Controller from './Controller';
import { useAppDispatch } from '../configureStore';
import { loadBookmarks } from '../actions/data';
import { loadSetting } from '../actions/setting';

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBookmarks());
    dispatch(loadSetting());
  }, []);

  return (
    <div className={styles.layout_container}>
      <Frame />
      <Controller />
      <main className={styles.main_container}>
        <Sidebar />
        <div className={styles.page_wrapper}>{children}</div>
      </main>
      <img className={styles.hex_image} src={hex} alt="hex" />
    </div>
  );
};

export default Layout;

export const SubLayout: React.FC<React.ReactNode> = ({ children }) => (
  <div className={styles.layout_container}>
    <SubFrame />
    <main className={styles.main_container}>
      <div className={classNames(styles.page_wrapper, styles.is_sub_layout)}>
        {children}
      </div>
    </main>
    <img className={styles.hex_image} src={hex} alt="hex" />
  </div>
);
