import React, { FC } from 'react';

import SocialIcon, { ISocial } from '../../Components/UI/SocialIcon';
import styles from './Team.module.scss';

interface ITeamCard {
  image: string;
  name: string;
  desc: string;
  socials: ISocial[];
}

interface ITeamProps {
  id: string;
  title: string;
  description: string;
  cards: ITeamCard[];
}

const TeamCard: FC<{ card: ITeamCard }> = ({ card }) => {
  const { image, name, desc, socials } = card;

  return (
    <div className={styles.card}>
      {image === '' ? (
        <span className={styles.image}>{image}</span>
      ) : (
        <img className={styles.image} src={image} alt='' />
      )}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{desc}</p>

      {socials.map((social, index) => (
        <SocialIcon social={social} key={index} />
      ))}
    </div>
  );
};

const Team: FC<{ pageData: ITeamProps }> = ({ pageData }) => (
  <section className={styles.section} id={pageData.id}>
    <div className={styles.section__wrapper}>
      <div className={styles.section__text}>
        <h1 className={styles.title}>{pageData.title}</h1>
        <p className={styles.description}>{pageData.description}</p>
      </div>

      <div className={styles.section__cards}>
        {pageData.cards.map((card, index) => (
          <TeamCard card={card} key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Team;
