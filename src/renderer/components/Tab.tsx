import React, { useCallback } from 'react';
import classNames from 'classnames';
import styles from '../styles/tab.component.css';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { browsingSlice } from '../reducers/browsing';
import deleteIcon from '../../../assets/images/delete-icon.svg';

const { moveTab, removeTab } = browsingSlice.actions;

type TabProps = {
  readonly id: string;
  readonly favicon: string;
  readonly title: string;
};

const Tab = ({ id, favicon, title }: TabProps) => {
  const { currentTab } = useAppSelector((state) => state.browsing);
  const dispatch = useAppDispatch();
  const handleClickTab = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const className = (event.target as HTMLElement)?.className;
      if (
        className.indexOf('tab-component__delete_button') === -1 &&
        className?.indexOf('tab-component__icon') === -1
      ) {
        dispatch(moveTab({ id }));
      }
    },
    [dispatch, id]
  );
  const handleRemoveTab = useCallback(
    () => dispatch(removeTab({ id })),
    [dispatch, id]
  );
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      className={classNames(
        styles.tab_item_wrapper,
        currentTab === id ? styles.is_current : styles.is_not_current
      )}
      onClick={handleClickTab}
    >
      <img src={favicon} alt="favicon" className={styles.favicon} />
      <p className={styles.title}>{title}</p>
      <button
        className={styles.delete_button}
        type="button"
        onClick={handleRemoveTab}
      >
        <img src={deleteIcon} alt="delete" className={styles.icon} />
      </button>
    </div>
  );
};

export default Tab;
