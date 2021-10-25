import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdOutlineSettings,
  MdOutlineWallpaper,
  MdStarOutline,
} from 'react-icons/all';
import styles from '../styles/sidebar.component.css';
import { useAppSelector } from '../configureStore';
import { IVisitHistory } from '../../types/browsing';
import HistoryFavicon from './HistoryFavicon';

const Sidebar: React.FC = () => {
  const [showHistory, setShowHistory] = useState<IVisitHistory[]>([]);
  const { history } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (history) {
      setShowHistory([...history].reverse().slice(0, 3));
    }
  }, [history]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.latest_data_wrapper}>
        {showHistory.length && (
          <>
            {showHistory[0] && (
              <HistoryFavicon
                key={showHistory[0].id}
                url={showHistory[0].url}
              />
            )}
            {showHistory[1] && (
              <HistoryFavicon
                key={showHistory[1].id}
                url={showHistory[1].url}
              />
            )}
            {showHistory[2] && (
              <HistoryFavicon
                key={showHistory[2].id}
                url={showHistory[2].url}
              />
            )}
          </>
        )}
      </div>
      <div className={styles.menu_button_wrapper}>
        <Link to="/">
          <MdStarOutline className={styles.menu_icon} />
        </Link>
        <Link to="/">
          <MdOutlineWallpaper className={styles.menu_icon} />
        </Link>
        <Link to="/setting">
          <MdOutlineSettings className={styles.menu_icon} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
