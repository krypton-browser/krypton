import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from '../styles/layout.component.css';
import hex from '../../../assets/images/hex.svg';
import Sidebar from './Sidebar';

// eslint-disable-next-line react/prop-types
const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className={styles.layout_container}>
      <Sidebar />
      <main>{children}</main>
      <img className={styles.hex_image} src={hex} alt="hex" />
    </div>
  );
};

export default Layout;
