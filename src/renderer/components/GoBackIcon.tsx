import React from 'react';
import classNames from 'classnames';
import styles from '../styles/go-icon.component.css';

type Props = {
  enabled: boolean;
};

const GoBackIcon = ({ enabled }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21.826"
    height="20.43"
    className={classNames(
      styles.svg,
      enabled ? styles.enabled : styles.disabled
    )}
  >
    <g
      id="그룹_15"
      data-name="그룹 15"
      transform="translate(-506.595 -236.785)"
    >
      <path
        id="패스_38"
        data-name="패스 38"
        className="cls-1"
        d="M517.517 256.508 508.009 247l9.508-9.508"
      />
      <path
        id="선_6"
        data-name="선 6"
        className="cls-1"
        transform="translate(508.009 247)"
        d="M0 0h20.412"
      />
    </g>
  </svg>
);

export default GoBackIcon;
