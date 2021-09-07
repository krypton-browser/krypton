import React, { useEffect } from 'react';
import styles from '../styles/layout.component.css';
import hex from '../../../assets/images/hex.svg';
import Sidebar from './Sidebar';
import Frame from './Frame';
import Controller from './Controller';
import { useAppDispatch } from '../configureStore';
import { loadHistory } from '../actions/data';

// eslint-disable-next-line react/prop-types
const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);
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

export const SubLayout: React.FC<React.ReactNode> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);
  return (
    <div className={styles.layout_container}>
      <main className={styles.main_container}>
        <div className={styles.page_wrapper}>{children}</div>
      </main>
      <img className={styles.hex_image} src={hex} alt="hex" />
    </div>
  );
};
