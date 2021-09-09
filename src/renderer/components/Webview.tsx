/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef } from 'react';
import { v4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { browsingSlice } from '../reducers/browsing';
import styles from '../styles/webview.component.css';
import { addHistory } from '../actions/data';

const { addUrl, updateTab } = browsingSlice.actions;

type WebviewProps = {
  readonly id: string;
  readonly url: string;
};

const Webview = ({ id, url }: WebviewProps) => {
  const dispatch = useAppDispatch();
  const webviewRef = useRef(null);
  const { currentTab } = useAppSelector((state) => state.browsing);

  useEffect(() => {
    if (webviewRef?.current) {
      const target = webviewRef.current as HTMLWebViewElement | any;
      target.addEventListener('will-navigate', ({ url: willURL }: any) => {
        if (url !== willURL) {
          console.log(url, willURL);
          dispatch(addUrl({ id, url: willURL }));
        }
        dispatch(
          addHistory({
            id: v4(),
            title: target.getTitle(),
            url,
            datetime: new Date().toString(),
          })
        );
      });
      target.addEventListener('page-favicon-updated', ({ favicons }: any) => {
        dispatch(updateTab({ id, favicon: favicons[0] }));
      });
      target.addEventListener(
        'page-title-updated',
        ({ title, explicitSet }: any) => {
          dispatch(
            updateTab({ id, title: explicitSet ? title : target.getURL() })
          );
        }
      );
    }
  }, []);

  return (
    <webview
      id={id}
      ref={webviewRef}
      allowFullScreen={true as boolean}
      allowpopups={true as boolean}
      className={styles.webview}
      src={url}
      style={{
        display: id === currentTab ? 'inline-flex' : 'none',
      }}
    />
  );
};

export default Webview;
