import React, { FC, useEffect, useState } from 'react';

import { ButtonUiProps } from '../../Components/UI/ButtonUI';
import SwiperSlider from '../../Components/UI/SwiperSlider';
import styles from './Sheet.module.scss';

export interface ICard {
  tags: string[];
  title: string;
  description: string;
  cardButton: {
    element: React.FC<ButtonUiProps>;
    archon: string;
    name: string;
  };
}

interface ISheetsProps {
  pageData: {
    title: string;
    description: string;
    cards: ICard[];
  };
}

interface ISheetCardProps {
  Card: ICard;
  index: number;
}

const SheetCard: FC<ISheetCardProps> = ({ Card, index }) => {
  const CardButton = Card.cardButton.element;

  const cardI = [
    index === 1 ? ` ${styles.green}` : '',
    index === 2 ? ` ${styles.red}` : '',
  ];

  return (
    <div className={`${styles.card} ${cardI.join(' ')}`}>
      <div className={styles.card__top}>
        {Card.tags.map((tag, tagI) => (
          <p key={tagI} className={tag === 'New' ? styles.new : styles.hot}>
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

const Sheet: FC<ISheetsProps> = ({ pageData }) => {
  const cards = pageData.cards.map((card, index) => (
    <SheetCard Card={card} index={index} />
  ));

  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.top}>
          <h2 className={styles.title}>{pageData.title}</h2>
          <p className={styles.description}>{pageData.description}</p>
        </div>

        <SwiperSlider cards={cards} />

        {/* {pageData.cards.map((Card, index) => ( */}
        {/*   <SheetCard key={index} Card={Card} /> */}
        {/* ))} */}
      </div>
    </section>
  );
};

export default Sheet;
