import React from 'react';
import { Link } from 'react-router-dom';

const Setting: React.FC = () => {
  return (
    <div>
      <h1>Setting</h1>
      <Link to="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>홈</a>
      </Link>
    </div>
  );
};

export default Setting;
