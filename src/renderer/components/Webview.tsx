/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { browsingSlice } from '../reducers/browsing';
import styles from '../styles/webview.component.css';
import { addHistory } from '../actions/data';
import { defaultFavicon, initialHistory } from '../constants/browsing';

const { updateTab } = browsingSlice.actions;

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
      target.addEventListener('did-navigate', ({ url: willURL }: any) => {
        dispatch(
          updateTab({
            id,
            url: willURL,
            canGoBack: target.canGoBack(),
            canGoForward: target.canGoForward(),
          })
        );
        dispatch(
          addHistory({
            ...initialHistory(),
            title: target.getTitle(),
            url: willURL,
          })
        );
      });
      target.addEventListener('page-favicon-updated', ({ favicons }: any) => {
        dispatch(
          updateTab({
            id,
            favicon: favicons.length ? favicons[0] : defaultFavicon,
          })
        );
      });
      target.addEventListener(
        'page-title-updated',
        ({ title, explicitSet }: any) => {
          dispatch(
            updateTab({
              id,
              title: explicitSet ? title : target.getURL(),
              canGoBack: target.canGoBack(),
              canGoForward: target.canGoForward(),
            })
          );
        }
      );
    }
  }, []);

  return (
    <webview
      id={`webview_${id}`}
      ref={webviewRef}
      allowFullScreen={true as boolean}
      allowpopups={true as boolean}
      className={classNames(
        styles.webview,
        id !== currentTab ? styles.hide : ''
      )}
      src={
        url === ''
          ? `file:///${__dirname.substring(0, 18)}\\assets\\default-page.html`
          : url
      }
    />
  );
};

export default Webview;
