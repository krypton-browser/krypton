import React from 'react';
import styles from '../styles/history-favicon.component.css';

type HistoryFaviconProps = {
  url: string;
};

const HistoryFavicon = ({ url }: HistoryFaviconProps) => {
  console.log('url here', url);
  return (
    <div className={styles.url_icon_wrapper}>
      <img
        src={`https://s2.googleusercontent.com/s2/favicons?domain=${url}`}
        className={styles.icon}
        alt="favicon"
      />
    </div>
  );
};

export default React.memo(HistoryFavicon);
