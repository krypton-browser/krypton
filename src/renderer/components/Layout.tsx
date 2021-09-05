import React from 'react';
import styles from '../styles/layout.component.css';
import hex from '../../../assets/images/hex.svg';
import Sidebar from './Sidebar';
import Header from './Frame';
import Controller from './Controller';

// eslint-disable-next-line react/prop-types
const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <Header />
      <Controller />
      <Sidebar />
      <main>{children}</main>
      <img className={styles.hex_image} src={hex} alt="hex" />
    </div>
  );
};

export default Layout;
