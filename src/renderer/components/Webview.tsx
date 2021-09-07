import React, { useEffect } from 'react';
import { useAppSelector } from '../configureStore';

import styles from '../styles/webview.component.css';

type WebviewProps = {
  readonly id: string;
  readonly url: string;
};

const Webview = ({ id, url }: WebviewProps) => {
  const { currentTab } = useAppSelector((state) => state.browsing);
  useEffect(() => {
    console.log(url);
  }, [url]);
  return (
    <webview
      allowFullScreen={true as boolean}
      allowpopups={true as boolean}
      className={styles.webview}
      autosize={false as boolean}
      src={url}
      style={{
        display: id === currentTab ? 'inline-flex' : 'none',
      }}
    />
  );
};

export default Webview;
