import React, { FC } from 'react';

import discord from '../../Assets/icons/discord.svg';
import twitter from '../../Assets/icons/twitter.svg';
import styles from './Team.module.scss';

interface ISocial {
  type: string;
  link: string;
}

interface ITeamCard {
  image: string;
  name: string;
  desc: string;
  socials: ISocial[];
}

interface ITeamProps {
  title: string;
  description: string;
  cards: ITeamCard[];
}

const TeamSocial: FC<{ social: ISocial }> = ({ social }) => {
  const { type, link } = social;
  const image = type === 'discord' ? discord : twitter;

  return (
    <a href={link} className={styles.socialIcon}>
      <img className={styles.img} src={image} alt='' />
    </a>
  );
};

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
        <TeamSocial social={social} key={index} />
      ))}
    </div>
  );
};

const Team: FC<{ pageData: ITeamProps }> = ({ pageData }) => {
  const { title, description, cards } = pageData;

  return (
    <section className={styles.section}>
      <div className={styles.section__wrapper}>
        <div className={styles.section__text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.section__cards}>
          {cards.map((card, index) => (
            <TeamCard card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
