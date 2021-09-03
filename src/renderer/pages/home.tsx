import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import styles from '../styles/home.page.css';

import duckduckgoIcon from '../../../assets/images/duckduckgo_normal.svg';
import searchIcon from '../../../assets/images/search.svg';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className={styles.home_container}>
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
    </Layout>
  );
};

export default Home;
