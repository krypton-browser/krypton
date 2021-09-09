import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from '../styles/login.page.css';
import logoNoTitle from '../../../assets/images/logo_no_title.svg';
import { SubLayout } from '../components/Layout';
import lockImage from '../../../assets/images/lock.svg';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { login } from '../actions/auth';
import { HistoryProps } from '../types/props';

const Login = ({ history }: HistoryProps) => {
  const dispatch = useAppDispatch();
  const { loginDone, loginError } = useAppSelector((state) => state.auth);
  const [password, setPassword] = useState<string>('');
  const [isAction, setIsAction] = useState<boolean>(false);

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmitPassword = (e: FormEvent) => {
    e.preventDefault();
    setIsAction(true);
    dispatch(login({ password }));
  };

  useEffect(() => {
    if (isAction) {
      if (loginDone) history.push('/');
      if (loginError) alert('비밀번호가 올바르지 않습니다.');
    }
  }, [history, isAction, loginDone, loginError]);

  return (
    <SubLayout>
      <form
        className={styles.login_wrapper}
        autoComplete="off"
        onSubmit={handleSubmitPassword}
      >
        <div className={styles.logo_wrapper}>
          <img src={logoNoTitle} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.top_bar}>
          <div className={styles.bar_back}>
            <img src={lockImage} className={styles.lock_image} alt="dat" />
            <input
              type="password"
              className={styles.password}
              placeholder="비밀번호"
              onChange={handleChangePassword}
            />
          </div>
        </div>
        <div className={styles.bottom_bar}>
          <div className={styles.start}>
            <input
              type="submit"
              className={styles.pass_submit}
              value="Krypton 시작하기"
            />
          </div>
        </div>
      </form>
    </SubLayout>
  );
};

export default Login;
