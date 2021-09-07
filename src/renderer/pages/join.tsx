import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import { SubLayout } from '../components/Layout';
import styles from '../styles/join.page.css';
import logoNoTitle from '../../../assets/images/logo_no_title.svg';
import lockImage from '../../../assets/images/lock.svg';
import { useAppDispatch, useAppSelector } from '../configureStore';
import { join } from '../actions/auth';
import { HistoryProps } from '../types/props';

const Join = ({ history }: HistoryProps) => {
  const dispatch = useAppDispatch();
  const { joinDone } = useAppSelector((state) => state.auth);
  const passwordCheckRef = useRef(null);
  const [isAction, setIsAction] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleSubmitPassword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    if (password !== (passwordCheckRef as any).current.value) {
      dispatch(join({ password }));
    } else alert('입력하신 두 비밀번호가 서로 다릅니다.');
  };

  useEffect(() => {
    if (isAction && joinDone) history.push('/login');
    else setIsAction(true);
  }, [history, isAction, joinDone]);

  return (
    <SubLayout>
      <form className={styles.join_wrapper} onSubmit={handleSubmitPassword}>
        <div>
          <img src={logoNoTitle} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.top_bar}>
          <div className={styles.bar_back}>
            <img src={lockImage} className={styles.lock_image} alt="lock" />
            <input
              type="text"
              className={styles.password}
              placeholder="비밀번호"
              onChange={handleChangePassword}
              value={password}
            />
          </div>
        </div>
        <div className={styles.top_bar}>
          <div className={styles.bar_back}>
            <img src={lockImage} className={styles.lock_image} alt="lock" />
            <input
              ref={passwordCheckRef}
              type="text"
              className={styles.password}
              placeholder="비밀번호 확인"
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

export default Join;
