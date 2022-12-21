import React, { useState } from 'react';

import AdminApp from './AdminApp';

const AdminPage = () => {
  const initialLoginState = localStorage.getItem('ALOE_IS_LOGIN');

  const [pass, setPass] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(initialLoginState === 'true');

  if (document.location.pathname !== '/' && document.location.pathname !== '') {
    if (!isLogin) {
      return (
        <form>
          <input
            type='text'
            placeholder='Password'
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
  }

  console.log(document.location.pathname);

  return (
    <>
      {isLogin ? (
        document.location.pathname !== '/' &&
        document.location.pathname !== '' ? (
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
        ) : null
      ) : null}

      <AdminApp />
    </>
  );
};

export default AdminPage;
