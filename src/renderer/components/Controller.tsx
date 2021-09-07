import React, { useCallback, useEffect, useState } from 'react';
import isUrl from '../utils/isUrl';
import styles from '../styles/controller.component.css';
import reloadIcon from '../../../assets/images/reload-icon.svg';
import backspaceIcon from '../../../assets/images/backspace-icon.svg';
import forwardSpaceIcon from '../../../assets/images/forwardspace-icon.svg';
import bookmarkIcon from '../../../assets/images/star.svg';
import settingMenuIcon from '../../../assets/images/setting-menu-icon.svg';
import { browsingSlice } from '../reducers/browsing';

import { useAppDispatch, useAppSelector } from '../configureStore';
// import { addBookmarks } from "../actions/data";

const { addUrl, moveSpace } = browsingSlice.actions;

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
        : `https://www.google.com/search?q=${encodeURI(urlText)}`;
      dispatch(addUrl({ url }));
    },
    [dispatch, urlText]
  );
  const handleClickBackSpace = () => dispatch(moveSpace({ mode: 'back' }));
  const handleClickForwardSpace = () =>
    dispatch(moveSpace({ mode: 'forward' }));
  const handleClickReload = () => {};
  const handleAddBookmark = () => {
    alert('개발 중인 기능입니다.');
  };

  useEffect(() => {
    tabs.forEach(({ id, stack, point }) => {
      if (id !== currentTab) return true;
      setUrlText(stack[point]);
      return false;
    });
  }, [currentTab, tabs]);

  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  return (
    <div className={styles.controller}>
      <div className={styles.button_wrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={handleClickBackSpace}
        >
          <img src={backspaceIcon} alt="backspace" className={styles.icon} />
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={handleClickForwardSpace}
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
