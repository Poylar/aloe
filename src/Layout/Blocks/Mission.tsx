import React, { FC } from 'react';

import bitcoin from '../../Assets/icons/bitcoin.svg';
import etherium from '../../Assets/icons/etherium.svg';
import Button from '../../Components/UI/ButtonUI';
import styles from './Mission.module.scss';

interface MissionProps {
  pageData: {
    title: string;
    description: string;
    anoncer: string;
    descriptionButton: {
      archon: string;
      name: string;
      element: string;
    };
  };
}

const cryptoIcons = {
  btc: bitcoin,
  eth: etherium,
};

const Mission: FC<MissionProps> = ({ pageData }) => (
  <section className={styles.section}>
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
          text={pageData.descriptionButton.name}
          element={pageData.descriptionButton.element}
          linkTo={pageData.descriptionButton.element}
        />
      </div>
    </div>
  </section>
);

export default Mission;
