import React, { FC, useMemo } from 'react';

import Button from '../../Components/UI/ButtonUI';
import SwiperSlider from '../../Components/UI/SwiperSlider';
import useMedia from '../../Hooks/useMedia';
import styles from './Sheet.module.scss';

export interface ICard {
  tags: string[];
  title: string;
  description: string;
  cardButton: {
    element: string;
    archon: string;
    name: string;
  };
}

interface ISheetsProps {
  pageData: {
    id: string;
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

        <Button
          text={Card.cardButton.name}
          linkTo={Card.cardButton.archon}
          element={Card.cardButton.element}
        />
      </div>
    </div>
  );
};

const Sheet: FC<ISheetsProps> = ({ pageData }) => {
  const cards = pageData.cards.map((card, index) => (
    <SheetCard Card={card} index={index} />
  ));

  return (
    <section className={styles.section} id={pageData.id}>
      <div className={styles.section__wrapper}>
        <div className={styles.top}>
          <h2 className={styles.title}>{pageData.title}</h2>
          <p className={styles.description}>{pageData.description}</p>
        </div>

        <SwiperSlider cards={cards} />
      </div>
    </section>
  );
};

export default Sheet;
