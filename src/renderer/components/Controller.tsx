import React, { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import isUrl from '../utils/isUrl';
import styles from '../styles/controller.component.css';
import reloadIcon from '../../../assets/images/reload-icon.svg';
import backspaceIcon from '../../../assets/images/backspace-icon.svg';
import forwardSpaceIcon from '../../../assets/images/forwardspace-icon.svg';
import bookmarkIcon from '../../../assets/images/star.svg';
import settingMenuIcon from '../../../assets/images/setting-menu-icon.svg';
import { browsingSlice } from '../reducers/browsing';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { addBookmarks } from '../actions/data';
import { selectTab } from '../utils/findTab';

const { go, back, forward, reload } = browsingSlice.actions;

const Controller: React.FC = () => {
  const { tabs, currentTab } = useAppSelector((state) => state.browsing);
  const [urlText, setUrlText] = useState<string>('');
  const dispatch = useAppDispatch();

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

  const handleClickGoBack = () => dispatch(back());
  const handleClickGoForward = () => dispatch(forward());
  const handleClickReload = () => dispatch(reload());
  const handleAddBookmark = () => {
    const { title, url } = selectTab({ id: currentTab, tabs });
    dispatch(addBookmarks({ id: v4(), title, url }));
  };

  useEffect(() => {
    const { url } = selectTab({ id: currentTab, tabs });
    console.log('current', url);
    setUrlText(url);
  }, [currentTab, tabs]);

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  return (
    <div className={styles.controller}>
      <div className={styles.button_wrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={handleClickGoBack}
        >
          <img src={backspaceIcon} alt="backspace" className={styles.icon} />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={handleClickGoForward}
        >
          <img
            src={forwardSpaceIcon}
            alt="forwardSpace"
            className={styles.icon}
          />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={handleClickReload}
        >
          <img src={reloadIcon} alt="reload" className={styles.icon} />
        </button>
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
        <button
          type="button"
          className={styles.button}
          onClick={handleAddBookmark}
        >
          <img src={bookmarkIcon} alt="bookmark" className={styles.icon} />
        </button>
        <button type="button" className={styles.button}>
          <img
            src={settingMenuIcon}
            alt="setting menu"
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
};

export default Controller;
