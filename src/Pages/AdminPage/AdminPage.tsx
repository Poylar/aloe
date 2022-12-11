import React, { useEffect, useState } from 'react';

import { IEmailItem } from '../../App.types';
import cites from '../../Database/Firebase';
import styles from './AdminPage.module.scss';

const AdminPage = () => {
  const initialLoginState = localStorage.getItem('ALOE_IS_LOGIN');

  const [pass, setPass] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(initialLoginState === 'true');
  const [emails, setEmails] = useState<IEmailItem[]>([]);

  document.querySelector('body')?.classList.add(styles.admin);

  useEffect(() => {
    cites.getEmails(cites.firebaseDataBase).then((response) => {
      setEmails(response[0].emails);
    });
  }, []);

  const loginHandler = () => {
    if (pass === import.meta.env.VITE_ADMIN_PASS) {
      setIsLogin(true);
      localStorage.setItem('ALOE_IS_LOGIN', 'true');
    }
  };

  const unLoginHandler = () => {
    setIsLogin(false);
    localStorage.removeItem('ALOE_IS_LOGIN');
  };

  const deleteButtonHandler = (current: IEmailItem) => {
    cites.removeCurrentEmail(cites.firebaseDataBase, current).then(() => {
      setEmails(
        emails.filter(
          (item) => item.email === current.email && item.time === current.time
        )
      );
    });
  };

  if (isLogin) {
    return (
      <div className={styles.adminka}>
        <button style={{ marginBottom: '20px' }} onClick={unLoginHandler}>
          sing out
        </button>
        {emails.length > 0 ? (
          emails.map((mail, index) => {
            const date = new Date(mail.time);
            const time = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;

            return (
              <div key={index} className={styles.emailString}>
                <p className={styles.email}>{mail.email}</p>
                <p className={styles.time}>{time}</p>
                <button
                  onClick={() =>
                    deleteButtonHandler({ email: mail.email, time: mail.time })
                  }
                >
                  delete
                </button>
              </div>
            );
          })
        ) : (
          <p>loading or emails list is clear</p>
        )}
      </div>
    );
  }

  return (
    <div className={styles.adminka}>
      <input
        type='text'
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={loginHandler}>login</button>
    </div>
  );
};

export default AdminPage;
