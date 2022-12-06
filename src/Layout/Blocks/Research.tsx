import React, { FC } from 'react';

import researchImageBg from '../../Assets/images/researchBg.png';
import { ButtonUiProps } from '../../Components/UI/ButtonUI';
import styles from './Research.module.scss';

interface ResearchProps {
  pageData: {
    title: string;
    description: string;
    researchButton: {
      element: React.FC<ButtonUiProps>;
      archon: string;
      name: string;
    };
  };
}

const Research: FC<ResearchProps> = ({ pageData }) => {
  const Button = pageData.researchButton.element;

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${researchImageBg})` }}
    >
      <div className={styles.section__wrapper}>
        <h2 className={styles.title}>{pageData.title}</h2>
        <p className={styles.description}>{pageData.description}</p>
        <Button linkTo={pageData.researchButton.archon}>
          {pageData.researchButton.name}
        </Button>
      </div>
    </section>
  );
};

export default Research;
