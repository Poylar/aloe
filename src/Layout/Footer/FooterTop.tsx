import axios from 'axios';
import React, { FC, useState } from 'react';

import mailIcon from '../../Assets/icons/mailIcon.svg';
import styles from './Footer.module.scss';

const FooterTop: FC<{
  title: string;
  placeholder: string;
  buttonText: string;
  description: string;
}> = ({ title, placeholder, buttonText, description }) => {
  const [emailValue, setEmailValue] = useState<string>('');

  const sendHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      /^(?!.*@.*@.*$)(?!.*@.*--.*\..*$)(?!.*@.*-\..*$)(?!.*@.*-$)((.*)?@.+\..{1,11})$/.test(
        emailValue
      )
    ) {
      try {
        const postResp = axios.post('');
        console.log(postResp);
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      console.log(false);
    }
  };

  return (
    <div className={styles.footerTop}>
      <div className={styles.leftForm}>
        <h2 className={styles.title}>
          {title.split('%').map((item, index) => {
            if (item === 'mail') {
              return (
                <img
                  key={index}
                  className={styles.icon}
                  src={mailIcon}
                  alt=''
                />
              );
            }
            return <React.Fragment key={index}>{item}</React.Fragment>;
          })}
        </h2>
        <form className={styles.form}>
          <input
            type='text'
            placeholder={placeholder}
            className={styles.input}
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <button className={styles.button} onClick={(e) => sendHandler(e)}>
            {buttonText}
          </button>
        </form>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default FooterTop;
