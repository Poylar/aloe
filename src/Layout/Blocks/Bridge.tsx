import React, { FC } from 'react';

import iconsBridge from '../../Assets/icons/iconsBridge.svg';
import styles from './Bridge.module.scss';

interface Props {
  pageData: {
    text: string;
  };
}

const icons = {
  bridge: iconsBridge,
};

const Bridge: FC<Props> = ({ pageData }) => (
  <section className={styles.section}>
    <div className={styles.section__wrapper}>
      <h2 className={styles.title}>
        {pageData.text.split('%').map((item, index) => {
          if (item === 'icons') {
            return (
              <img
                className={styles.icon}
                key={index}
                src={icons.bridge}
                alt=''
              />
            );
          }
          return <React.Fragment key={index}>{item}</React.Fragment>;
        })}
      </h2>
    </div>
  </section>
);

export default Bridge;
