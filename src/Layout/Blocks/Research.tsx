import React, { FC } from 'react';

import researchImageBg from '../../Assets/images/researchBg.png';
import Button from '../../Components/UI/ButtonUI';
import styles from './Research.module.scss';

interface ResearchProps {
  pageData: {
    title: string;
    description: string;
    researchButton: {
      element: string;
      archon: string;
      name: string;
    };
  };
}

const Research: FC<ResearchProps> = ({ pageData }) => (
  // const Button = pageData.researchButton.element;

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
