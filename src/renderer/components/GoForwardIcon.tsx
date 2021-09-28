import React from 'react';
import classNames from 'classnames';
import styles from '../styles/go-icon.component.css';

type Props = {
  enabled: boolean;
};

const GoForwardIcon = ({ enabled }: Props) => (
  <svg
    id="레이어_1"
    data-name="레이어 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10.73 10.07"
    className={classNames(
      styles.svg,
      enabled ? styles.enabled : styles.disabled
    )}
  >
    <g id="그룹_88" data-name="그룹 88">
      <g id="패스_38-2" data-name="패스 38-2">
        <path
          id="패스_142"
          data-name="패스 142"
          className={styles['cls-1']}
          d="M7.83,12.46,6.75,11.37,10.7,7.42,6.75,3.47,7.83,2.39l5,5Z"
          transform="translate(-2.13 -2.39)"
        />
      </g>
      <g id="선_6-2" data-name="선 6-2">
        <rect
          id="사각형_218"
          data-name="사각형 218"
          className={styles['cls-1']}
          y="4.27"
          width="9.65"
          height="1.53"
        />
      </g>
    </g>
  </svg>
);

export default GoForwardIcon;
