import React from 'react';

// import styles from '../styles/login.page.css';
import logoNoTitle from '../../../assets/images/logo_no_title.svg';
import { SubLayout } from '../components/Layout';
import lockImage from '../../../assets/images/lock.svg';

const Login: React.FC = () => {
  return (
    <SubLayout>
      <div>
        <img src={logoNoTitle} className="logo" alt="dat" />
      </div>
      <div className="top_bar">
        <div className="bar_back">
          <img src={lockImage} className="lock_image" alt="dat" />
          <input type="text" className="password" placeholder="비밀번호" />
        </div>
      </div>
      <div className="bottom_bar">
        <div className="start">
          <input
            type="submit"
            className="pass_submit"
            value="Krypton 시작하기"
          />
        </div>
      </div>
    </SubLayout>
  );
};

export default Login;
