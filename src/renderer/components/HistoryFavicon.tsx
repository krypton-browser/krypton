import React from 'react';
import styles from '../styles/history-favicon.component.css';
import ico from '../../../assets/icon.png';

type HistoryFaviconProps = {
  url: string;
};

const HistoryFavicon = ({ url }: HistoryFaviconProps) => {
  return (
    <div className={styles.url_icon_wrapper}>
      <img
        src={
          new URL(url).host === ''
            ? ico
            : `https://s2.googleusercontent.com/s2/favicons?domain=${url}`
        }
        className={styles.icon}
        alt="favicon"
      />
    </div>
  );
};

export default HistoryFavicon;
