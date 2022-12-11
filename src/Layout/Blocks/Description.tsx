import React, { FunctionComponent } from 'react';

import logo from '../../Assets/icons/descriptionLogo.svg';
import descriptionImage from '../../Assets/images/descriptionCircle.png';
import useMedia from '../../Hooks/useMedia';
import { IDescriptionPageData } from '../../Pages/FrontPage/FrontPage.types';
import styles from './Description.module.scss';

const Description: FunctionComponent<{
  pageData: IDescriptionPageData;
}> = ({ pageData }) => {
  const width = useMedia();

  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <h1 className={styles.title}>{pageData.title}</h1>
        <p className={styles.desc}>{pageData.description}</p>
      </div>

      {width > 1200 ? (
        <>
          <div className={styles.logotype}>
            <img src={logo} alt='' />
          </div>

          <img className={styles.circleImage} src={descriptionImage} alt='' />
        </>
      ) : null}
    </section>
  );
};

export default Description;
