import axios from 'axios';
import React, { FC, useState } from 'react';

import mailIcon from '../../Assets/icons/mailIcon.svg';
import useMedia from '../../Hooks/useMedia';
import styles from './Footer.module.scss';

// @ts-ignore
const binId = import.meta.env.VITE_BIND_ID;
// @ts-ignore
const apiKey = import.meta.env.VITE_API_KEY.replaceAll('!', '$');
// @ts-ignore
const accessKey = import.meta.env.VITE_ACCESS_KEY.replaceAll('!', '$');

const putBin = async (emailValue: string) => {
  // if you need get emails - use this axios func
  await axios
    .get(`https://api.jsonbin.io/v3/b/${binId}/latest?meta=false`)
    .then(({ data }) => {
      const uploadData = {
        emails: [
          ...data.emails,
          {
            email: emailValue,
            time: new Date(Date.now()),
          },
        ],
      };

      const req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState === XMLHttpRequest.DONE) {
          console.log(req.responseText);
        }
      };

      req.open('PUT', `https://api.jsonbin.io/v3/b/${binId}`, true);
      req.setRequestHeader('Content-Type', 'application/json');
      req.setRequestHeader('X-Master-Key', apiKey);
      req.setRequestHeader('X-Access-Key', accessKey);
      req.send(JSON.stringify(uploadData));
    });
};

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
        putBin(emailValue).then(() => {
          setEmailValue('');
        });
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      console.log(false);
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
