/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { browsingSlice } from '../reducers/browsing';
import styles from '../styles/webview.component.css';
import { addHistory } from '../actions/data';
import { defaultFavicon, initialHistory } from '../constants/browsing';
import Default from './Default';

const { updateTab } = browsingSlice.actions;

type WebviewProps = {
  readonly id: string;
  readonly url: string;
};

const Webview = ({ id, url }: WebviewProps) => {
  const [isDefault, setIsDefault] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const customWebviewRef = useRef(null);
  const webviewRef = useRef(null);
  const { currentTab } = useAppSelector((state) => state.browsing);

  const goForward = () => {
    const webview: any = webviewRef?.current;
    if (webview.canGoForward) {
      setIsDefault(false);
      webview.goForward();
    }
  };

  const goBack = () => {
    const webview: any = webviewRef?.current;
    webview.goBack();
    if (!webview.canGoBack) {
      setIsDefault(true);
    }
  };

  useEffect(() => {
    const webview: any = webviewRef?.current;
    updateTab({
      id,
      url: '',
      canGoBack: !isDefault,
      canGoForward: webview.canGoForward,
      isDefault,
    });
  }, [isDefault]);

  useEffect(() => {
    const customWebview: any = customWebviewRef?.current;
    if (customWebview) {
      customWebview.goForward = goForward;
      customWebview.goBack = goBack;
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
            favicon: favicons.length ? favicons[0] : defaultFavicon,
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
              canGoBack: webview.canGoBack(),
              canGoForward: webview.canGoForward(),
            })
          );
        }
      );
    }
  }, []);

  return (
    <div id={`custom_webview_${id}`} ref={customWebviewRef}>
      <webview
        id={`webview_${id}`}
        ref={webviewRef}
        allowFullScreen={true as boolean}
        allowpopups={true as boolean}
        className={classNames(
          styles.webview,
          id !== currentTab || isDefault ? styles.hide : ''
        )}
        src={url}
      />
      {url === '' && <Default id={id} />}
    </div>
  );
};

export default Webview;
