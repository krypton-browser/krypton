/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { browsingSlice } from '../reducers/browsing';
import styles from '../styles/webview.component.css';
import { addHistory } from '../actions/data';
import { DEFAULT_FAVICON_URI, initialHistory } from '../constants/browsing';
import { DEFAULT_PAGE_URL } from '../constants/url';

const { updateTab } = browsingSlice.actions;

type WebviewProps = {
  readonly id: string;
  readonly url: string;
};

const Webview: React.FC<WebviewProps> = ({ id, url }) => {
  const dispatch = useAppDispatch();
  const customWebviewRef = useRef(null);
  const webviewRef = useRef(null);
  const { currentTab } = useAppSelector((state) => state.browsing);

  const goForward = () => {
    const webview: any = webviewRef?.current;
    if (webview) webview.goForward();
  };

  const goBack = () => {
    const webview: any = webviewRef?.current;
    if (webview) webview.goBack();
  };

  const reload = () => {
    const webview: any = webviewRef?.current;
    if (webview) webview.reload();
  };

  useEffect(() => {
    const webview: any = webviewRef?.current;
    updateTab({
      id,
      canGoBack: webview.canGoBack,
      canGoForward: webview.canGoForward,
    });
  }, []);

  useEffect(() => {
    const customWebview: any = customWebviewRef?.current;
    if (customWebview) {
      customWebview.goForward = goForward;
      customWebview.goBack = goBack;
      customWebview.reload = reload;
    }
    const webview: any = webviewRef?.current;
    if (webview) {
      webview.addEventListener('did-navigate', ({ url: willURL }: any) => {
        dispatch(
          updateTab({
            id,
            url: willURL,
            canGoBack: webview.canGoBack(),
            canGoForward: webview.canGoForward(),
          })
        );
        dispatch(
          addHistory({
            ...initialHistory(),
            title: webview.getTitle(),
            url: willURL,
          })
        );
      });
      webview.addEventListener('page-favicon-updated', ({ favicons }: any) => {
        dispatch(
          updateTab({
            id,
            favicon: favicons.length ? favicons[0] : DEFAULT_FAVICON_URI,
          })
        );
      });
      webview.addEventListener(
        'page-title-updated',
        ({ title, explicitSet }: any) => {
          dispatch(
            updateTab({
              id,
              title: explicitSet ? title : webview.getURL(),
            })
          );
        }
      );
    }
  }, []);

  return (
    <div
      id={`custom_webview_${id}`}
      ref={customWebviewRef}
      className={id !== currentTab ? styles.hide : ''}
    >
      <webview
        id={`webview_${id}`}
        ref={webviewRef}
        allowFullScreen={true as boolean}
        allowpopups={true as boolean}
        className={styles.webview}
        src={url === '' ? `${DEFAULT_PAGE_URL}?search_engine=duckduckgo` : url}
      />
    </div>
  );
};

export default Webview;
