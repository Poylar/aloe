import React, { FC } from 'react';

import researchImageBg from '../../Assets/images/researchBg.png';
import Button from '../../Components/UI/ButtonUI';
import { IResearchPageData } from '../../Pages/FrontPage/FrontPage.types';
import styles from './Research.module.scss';

const Research: FC<{
  pageData: IResearchPageData;
}> = ({ pageData }) => (
  <section
    className={styles.section}
    style={{ backgroundImage: `url(${researchImageBg})` }}
  >
    <div className={styles.section__wrapper}>
      <h2 className={styles.title}>{pageData.title}</h2>
      <p className={styles.description}>{pageData.description}</p>

      <Button
        text={pageData.researchButton.name}
        element={pageData.researchButton.element}
        linkTo={pageData.researchButton.archon}
      />
    </div>
  </section>
);
export default Research;
