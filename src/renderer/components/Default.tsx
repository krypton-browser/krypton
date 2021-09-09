import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../styles/default.page.css';

import duckduckgoIcon from '../../../assets/images/duckduckgo_normal.svg';
import searchIcon from '../../../assets/images/search.svg';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { browsingSlice } from '../reducers/browsing';
import isUrl from '../utils/isUrl';

type DefaultProps = {
  id: string;
};

const { addUrl } = browsingSlice.actions;

const Default = ({ id }: DefaultProps) => {
  const dispatch = useAppDispatch();
  const [urlText, setUrlText] = useState<string>('');
  const { currentTab } = useAppSelector((state) => state.browsing);

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
      dispatch(addUrl({ id: currentTab, url }));
    },
    [dispatch, urlText]
  );

  return (
    <form
      onSubmit={handleSubmitURLTextBox}
      className={classNames(
        styles.home_container,
        id !== currentTab ? styles.none : ''
      )}
    >
      <div className={styles.search_box}>
        <img
          src={duckduckgoIcon}
          className={styles.duckduckgo}
          alt="search engine"
        />
        <input
          onChange={handleChangeURLTextBox}
          type="text"
          className={styles.text_box}
          placeholder="검색어 또는 URL 입력"
          value={urlText}
        />
        <Link to="/">
          <img src={searchIcon} className={styles.search_icon} alt="search" />
        </Link>
      </div>
    </form>
  );
};

export default Default;
