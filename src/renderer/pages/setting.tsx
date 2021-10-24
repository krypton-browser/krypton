/* eslint-disable jsx-a11y/label-has-associated-control  */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from '../styles/setting.page.css';
import duckduckgoIcon from '../../../assets/images/duckduckgo.svg';
import googleIcon from '../../../assets/images/google.svg';
import { SubLayout } from '../components/Layout';

const searchEngines = { duckduckgo: duckduckgoIcon, google: googleIcon };

interface Props {
  close: () => void;
}

const Setting: React.FC<Props> = ({ close }) => {
  const [searchEngine, setSearchEngine] = useState<string>('google');

  const handleClickSearchEngineButton = (
    e: React.MouseEvent<HTMLImageElement>
  ) => {
    const image = e.target as HTMLImageElement;
    if (image) {
      setSearchEngine(image.alt);
    }
  };

  return (
    <SubLayout>
      <div className={styles.background}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={styles.closeButton} onClick={close}>
          <MdArrowBack className={styles.icon} />
          <p>뒤로 가기</p>
        </div>
        <div className={styles.panel}>
          <h3 className={styles.title}>검색 엔진 설정</h3>
          <ul className={styles.search_engine_menu}>
            {Object.entries(searchEngines).map(([engine, image]) => (
              <li
                key={engine}
                className={classNames(
                  styles.search_engine_item,
                  searchEngine === engine ? styles.selected : ''
                )}
              >
                <button
                  type="button"
                  className={styles.search_engine_item_button}
                >
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <img
                    onClick={handleClickSearchEngineButton}
                    className={styles.search_engine_image}
                    src={image}
                    alt={engine}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.panel}>
          <h3 className={styles.title}>세부 설정</h3>
          <ul className={styles.setting_menu}>
            <li className={styles.setting_item}>
              <h5 className={styles.setting_item_title}>광고 차단</h5>
              <label className={styles.switch_button}>
                <input type="checkbox" />
                <span className={styles.on_off_switch} />
              </label>
            </li>
            <li className={styles.setting_item}>
              <h5 className={styles.setting_item_title}>피싱사이트 감지</h5>
              <label className={styles.switch_button}>
                <input type="checkbox" />
                <span className={styles.on_off_switch} />
              </label>
            </li>
            <Link to="/history">
              <li className={classNames(styles.setting_item, styles.link)}>
                <h5 className={styles.setting_item_title}>방문 기록</h5>
                <MdArrowForward className={styles.button_icon} />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </SubLayout>
  );
};

export default Setting;
