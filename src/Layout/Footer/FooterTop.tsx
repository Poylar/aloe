import React, { FC, useState } from 'react';

import mailIcon from '../../Assets/icons/mailIcon.svg';
import cites from '../../Database/Firebase';
import useMedia from '../../Hooks/useMedia';
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
        cites
          .includeNewEmail(cites.firebaseDataBase, {
            email: emailValue,
            time: String(new Date(Date.now())),
          })
          .then(() => {});

        setEmailValue('');
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      console.log('wrong email');
    }
  };

  const width = useMedia();

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
        {width < 1000 ? (
          <p className={styles.description}>{description}</p>
        ) : null}
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
      {width > 1000 ? (
        <p className={styles.description}>{description}</p>
      ) : null}
    </div>
  );
};

export default FooterTop;
