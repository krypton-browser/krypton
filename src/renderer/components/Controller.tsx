import React, { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import {
  MdArrowBack,
  MdArrowForward,
  MdRefresh,
  MdOutlineStarOutline,
  MdOutlineWidgets,
} from 'react-icons/md';
import classNames from 'classnames';
import isUrl from '../utils/isUrl';
import styles from '../styles/controller.component.css';
import { browsingSlice } from '../reducers/browsing';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { addBookmarks } from '../actions/data';
import { selectTab } from '../utils/findTab';

const { go, goBack, goForward, reload } = browsingSlice.actions;

const Controller: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tabs, currentTab, webviewTable } = useAppSelector(
    (state) => state.browsing
  );
  const [urlText, setUrlText] = useState<string>('');
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const [canGoForward, setCanGoForward] = useState<boolean>(false);

  const handleChangeURLTextBox = useCallback(
    (e) => setUrlText(e.target.value),
    []
  );
  const handleSubmitURLTextBox = useCallback(
    (e) => {
      e.preventDefault();
      const url = isUrl(urlText)
        ? urlText
        : `https://duckduckgo.com/?q=${encodeURI(urlText)}`;
      dispatch(go({ url }));
    },
    [dispatch, urlText]
  );
  const handleClickGoBack = () => dispatch(goBack());
  const handleClickGoForward = () => dispatch(goForward());
  const handleClickReload = () => dispatch(reload());
  const handleAddBookmark = () => {
    const { title, url } = selectTab({ id: currentTab, tabs });
    dispatch(addBookmarks({ id: v4(), title, url }));
  };

  useEffect(() => {
    const {
      url,
      canGoBack: CanGoBack,
      canGoForward: CanGoForward,
    } = selectTab({
      id: currentTab,
      tabs,
    });
    setCanGoBack(CanGoBack);
    setCanGoForward(CanGoForward);
    if (webviewTable[currentTab] === '') setUrlText('');
    else setUrlText(url);
  }, [currentTab, tabs]);

  return (
    <div className={styles.controller}>
      <div className={styles.button_wrapper}>
        <MdArrowBack
          className={classNames(
            styles.button,
            canGoForward ? styles.enabled : styles.disabled
          )}
          onClick={handleClickGoBack}
        />
        <MdArrowForward
          className={classNames(
            styles.button,
            canGoBack ? styles.enabled : styles.disabled
          )}
          onClick={handleClickGoForward}
        />
        <MdRefresh className={styles.button} onClick={handleClickReload} />
      </div>
      <form
        autoComplete="off"
        onSubmit={handleSubmitURLTextBox}
        className={styles.input_wrapper}
      >
        <input
          type="text"
          className={styles.url_text_box}
          placeholder="검색어 또는 URL 입력"
          onChange={handleChangeURLTextBox}
          onSubmit={handleSubmitURLTextBox}
          value={urlText}
        />
      </form>
      <div className={styles.button_wrapper}>
        <MdOutlineStarOutline
          className={styles.button}
          onClick={handleAddBookmark}
        />
        <MdOutlineWidgets className={styles.button} />
      </div>
    </div>
  );
};

export default Controller;
