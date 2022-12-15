import React, { useState } from 'react';

import AdminApp from './AdminApp';

// import firebase from '../../Database/Firebase';

const AdminPage = () => {
  const initialLoginState = localStorage.getItem('ALOE_IS_LOGIN');

  const [pass, setPass] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(initialLoginState === 'true');

  if (!isLogin) {
    return (
      <form>
        <input
          type='text'
          placeholder='Пароль'
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button
          style={{ cursor: 'pointer' }}
          onClick={(e) => {
            e.preventDefault();
            if (pass === import.meta.env.VITE_ADMIN_PASS) {
              setIsLogin(true);
              localStorage.setItem('ALOE_IS_LOGIN', 'true');
            }
          }}
        >
          login
        </button>
      </form>
    );
  }
  return (
    <>
      <button
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 10000,
          background: '#fff',
        }}
        onClick={() => {
          setIsLogin(false);
          localStorage.removeItem('ALOE_IS_LOGIN');
        }}
      >
        login out
      </button>
      <AdminApp />
    </>
  );
};

export default AdminPage;
