import React, { useState } from 'react';

import AdminApp from './AdminApp';
import styles from './AdminApp.module.scss';

const AdminPage = () => {
  const initialLoginState = localStorage.getItem('ALOE_IS_LOGIN');

  const [pass, setPass] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(initialLoginState === 'true');

  if (
    document.location.pathname !== '/' &&
    document.location.pathname !== '/terms' &&
    document.location.pathname !== ''
  ) {
    if (!isLogin) {
      return (
        <form className={styles.loginForm}>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={pass}
            className={styles.loginInput}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button
            className={styles.buttonLogin}
            onClick={(e) => {
              e.preventDefault();
              if (pass === import.meta.env.VITE_ADMIN_PASS) {
                setIsLogin(true);
                localStorage.setItem('ALOE_IS_LOGIN', 'true');
              }
            }}
          >
            Sign in
          </button>
        </form>
      );
    }
  }

  return (
    <>
      {isLogin ? (
        document.location.pathname !== '/' &&
        document.location.pathname !== '/terms' &&
        document.location.pathname !== '' ? (
          <button
            className={styles.logOutButton}
            onClick={() => {
              setIsLogin(false);
              localStorage.removeItem('ALOE_IS_LOGIN');
            }}
          >
            login out
          </button>
        ) : null
      ) : null}

      <AdminApp />
    </>
  );
};

export default AdminPage;
