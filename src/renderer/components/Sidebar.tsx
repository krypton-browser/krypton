import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/sidebar.component.css';
import naverIcon from '../../../assets/images/naverbtn.svg';
import googleIcon from '../../../assets/images/google_normal.svg';
import bookmarkIcon from '../../../assets/images/star.svg';
import settingIcon from '../../../assets/images/setting-icon.svg';
import themeImageIcon from '../../../assets/images/theme_image-icon.svg';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.latest_data_wrapper}>
        <Link to="/">
          <div className={styles.url_icon_wrapper}>
            <img src={naverIcon} className={styles.icon} alt="" />
          </div>
        </Link>
        <Link to="/">
          <div className={styles.url_icon_wrapper}>
            <img src={googleIcon} className={styles.icon} alt="latest web" />
          </div>
        </Link>
        <Link to="/">
          <div className={styles.url_icon_wrapper}>
            <img src={googleIcon} className={styles.icon} alt="latest web" />
          </div>
        </Link>
      </div>
      <div className={styles.menu_button_wrapper}>
        <Link to="/">
          <img
            src={bookmarkIcon}
            className={styles.menu_image}
            alt="bookmark"
          />
        </Link>
        <Link to="/">
          <img
            src={themeImageIcon}
            className={styles.menu_image}
            alt="background"
          />
        </Link>
        <Link to="/">
          <img src={settingIcon} className={styles.menu_image} alt="setting" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
