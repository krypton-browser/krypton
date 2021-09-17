import React from 'react';
import Tab from './Tab';
import styles from '../styles/tab-container.component.css';
import { useAppDispatch, useAppSelector } from '../configureStore';
import addTabIcon from '../../../assets/images/add-tab-icon.svg';
import { browsingSlice } from '../reducers/browsing';

const { addTab } = browsingSlice.actions;

/* eslint-disable  @typescript-eslint/no-explicit-any */

const TabContainer: React.FC = () => {
  const { tabs } = useAppSelector((state) => state.browsing);
  const dispatch = useAppDispatch();

  const handleAddTab = () => dispatch(addTab());

  return (
    <div className={styles.container}>
      {tabs.map(({ id, url, title, favicon }) => (
        <Tab key={id} id={id} title={title ?? url} favicon={favicon} />
      ))}
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={styles.add_tab_button} onClick={handleAddTab}>
        <img src={addTabIcon} alt="add tab" className={styles.icon} />
      </button>
    </div>
  );
};

export default TabContainer;
