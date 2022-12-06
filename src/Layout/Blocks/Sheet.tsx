import React, { FC } from 'react';

import { ButtonUiProps } from '../../Components/UI/ButtonUI';
import styles from './Sheet.module.scss';

interface Card {
  tags: string[];
  title: string;
  description: string;
  cardButton: {
    element: React.FC<ButtonUiProps>;
    archon: string;
    name: string;
  };
}

interface SheetsProps {
  pageData: {
    title: string;
    description: string;
    cards: Card[];
  };
}

const SheetCard: FC<{ Card: Card }> = ({ Card }) => {
  const CardButton = Card.cardButton.element;

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        {Card.tags.map((tag, index) => (
          <p key={index} className={tag === 'New' ? styles.new : styles.hot}>
            {tag}
          </p>
        ))}
      </div>

      <div>
        <h3 className={styles.card__title}>{Card.title}</h3>
        <p className={styles.card__description}>{Card.description}</p>
        <CardButton linkTo={Card.cardButton.archon}>
          {Card.cardButton.name}
        </CardButton>
      </div>
    </div>
  );
};

const Sheet: FC<SheetsProps> = ({ pageData }) => (
  <section className={styles.section}>
    <div className={styles.section__wrapper}>
      <div className={styles.top}>
        <h2 className={styles.title}>{pageData.title}</h2>
        <p className={styles.description}>{pageData.description}</p>
      </div>

      <div className={styles.cards}>
        {pageData.cards.map((Card, index) => (
          <SheetCard key={index} Card={Card} />
        ))}
      </div>
    </div>
  </section>
);

export default Sheet;
