import React, { FC } from 'react';

import bitcoin from '../../Assets/icons/bitcoin.svg';
import etherium from '../../Assets/icons/etherium.svg';
import Button from '../../Components/UI/ButtonUI';
import { IMissionPageData } from '../../Pages/FrontPage/FrontPage.types';
import styles from './Mission.module.scss';

const cryptoIcons = {
  btc: bitcoin,
  eth: etherium,
};

const Mission: FC<{
  pageData: IMissionPageData;
}> = ({ pageData }) => (
  <section className={styles.section} id={pageData.id}>
    <div className={styles.section__wrapper}>
      <h2 className={styles.section__title}>
        {pageData.title.split('%').map((str, index) => {
          if (str === 'btc' || str === 'eth') {
            return (
              <img
                className={styles.titleIcon}
                key={index}
                src={cryptoIcons[str]}
                alt=''
              />
            );
          }
          return <React.Fragment key={index}>{str}</React.Fragment>;
        })}
      </h2>
      <p className={styles.section__anoncer}>{pageData.anoncer}</p>

      <div className={styles.section__description}>
        <p className={styles.description}>{pageData.description}</p>
        <Button
          text={pageData.descriptionButton.text}
          element={pageData.descriptionButton.element}
          linkTo={pageData.descriptionButton.element}
        />
      </div>
    </div>
  </section>
);

export default Mission;
