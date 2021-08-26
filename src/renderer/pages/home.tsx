import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/setting">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>설정</a>
      </Link>
    </div>
  );
};

export default Home;
