import React from 'react';
import classNames from 'classnames';
import closeIcon from '../../../assets/images/close-icon.svg';
import forwardSpaceIcon from '../../../assets/images/forwardspace-icon.svg';
import styles from '../styles/history.page.css';
import Layout from '../components/Layout';

/* eslint-disable jsx-a11y/anchor-is-valid */
const History: React.FC = () => {
  return (
    <Layout>
      <div className={styles.panel}>
        <div className={styles.detail_box}>
          <p className={styles.detail}>방문기록</p>
        </div>
        <div className={styles.detail_list}>
          <div className={styles.detail_list_box}>
            <a className={styles.detail_a}>
              <p className={styles.detail_text}>방문 기록 삭제</p>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className={styles.switch_button}>
                <input type="checkbox" />
                <span className={styles.onoff_switch} />
              </label>
            </a>
          </div>
          <div className={styles.detail_list}>
            <a href="/" className={styles.detail_a}>
              <p className={styles.detail_text}>쿠키, 캐시 초기화</p>
              <img
                src={forwardSpaceIcon}
                className={styles.arrow}
                alt="arrow"
              />
            </a>
          </div>
        </div>

        <div className={styles.detail_list}>
          <div className={styles.detail_list_box}>
            <a href="/" className={styles.detail_a}>
              <div className={styles.inline}>
                <img
                  src="https://s2.googleusercontent.com/s2/favicons?domain=naver.com"
                  className={styles.visit_image}
                  alt="favicon"
                />
                <p className={classNames(styles.detail_text, styles.inline)}>
                  NAVER
                </p>
                <p className={classNames(styles.visit_text, styles.inline)}>
                  https://www.naver.com/
                </p>
              </div>
              <img src={closeIcon} className={styles.delete} alt="close" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
