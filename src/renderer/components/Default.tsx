import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../styles/home.page.css';

import duckduckgoIcon from '../../../assets/images/duckduckgo_normal.svg';
import searchIcon from '../../../assets/images/search.svg';
import { useAppSelector } from '../configureStore';

type DefaultProps = {
  id: string;
};

const Default = ({ id }: DefaultProps) => {
  const { currentTab } = useAppSelector((state) => state.browsing);
  return (
    <div
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
          type="text"
          className={styles.text_box}
          placeholder="검색어 또는 URL 입력"
        />
        <Link to="/">
          <img src={searchIcon} className={styles.search_icon} alt="search" />
        </Link>
      </div>
    </div>
  );
};

export default Default;
