import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styles from './AdminPage.module.scss';

// @ts-ignore
const binId = import.meta.env.VITE_BIND_ID;

interface ItemMail {
  email: string;
  time: string;
}

const AdminPage = () => {
  const [pass, setPass] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [emails, setEmails] = useState<ItemMail[]>([]);

  document.querySelector('body')?.classList.add(styles.admin);

  const getBin = () => {
    axios
      .get(`https://api.jsonbin.io/v3/b/${binId}/latest?meta=false`)
      .then((res) => {
        setEmails(res.data.emails);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getBin();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (isLogin) {
    return (
      <div className={styles.adminka}>
        {emails.length > 0 ? (
          emails.map((mail, index) => {
            if (mail.email !== '' || mail.time !== '') {
              const date = new Date(mail.time);
              const time = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;

              return (
                <div key={index} className={styles.emailString}>
                  <p className={styles.email}>{mail.email}</p>
                  <p className={styles.time}>{time}</p>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Loading...</p>
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
      <button
        onClick={() => {
          // @ts-ignore
          if (pass === import.meta.env.VITE_ADMIN_PASS) {
            setIsLogin(true);
          }
        }}
      >
        login
      </button>
    </div>
  );
};

export default AdminPage;
