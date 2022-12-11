import React, { FunctionComponent } from 'react';

import descriptionImage from '../../Assets/images/description.jpg';
import { IDescriptionPageData } from '../../Pages/FrontPage/FrontPage.types';
import styles from './Description.module.scss';

const Description: FunctionComponent<{
  pageData: IDescriptionPageData;
}> = ({ pageData }) => (
  <section
    style={{ backgroundImage: `url(${descriptionImage})` }}
    className={styles.section}
  >
    <div className={styles.section__wrapper}>
      <h1 className={styles.title}>{pageData.title}</h1>
      <p className={styles.desc}>{pageData.description}</p>
    </div>
  </section>
);

export default Description;
