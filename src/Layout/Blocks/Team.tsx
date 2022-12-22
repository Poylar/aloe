import { getDownloadURL } from 'firebase/storage';
import React, { FC, useEffect, useState } from 'react';

import SocialIcon from '../../Components/UI/SocialIcon';
import SwiperSlider from '../../Components/UI/SwiperSlider';
import firebase from '../../Database/Firebase';
import {
  ITeamCard,
  ITeamPageData,
} from '../../Pages/FrontPage/FrontPage.types';
import styles from './Team.module.scss';

const TeamCard: FC<{ card: ITeamCard }> = ({ card }) => {
  const { image, name, desc, socials } = card;

  const [refImage, setImage] = useState<string>(image);

  useEffect(() => {
    firebase.getStorageImage(image).then((resp) => {
      getDownloadURL(resp).then((url) => setImage(url));
    });
  }, []);

  return (
    <div className={styles.card}>
      {image === '' ? (
        <span className={styles.image}>{image}</span>
      ) : (
        <img className={styles.trueImage} src={refImage} alt='' />
      )}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.desc}>{desc}</p>

      {socials.map((social, index) => (
        <SocialIcon social={social} key={index} />
      ))}
    </div>
  );
};

const Team: FC<{ pageData: ITeamPageData }> = ({ pageData }) => {
  const cards = pageData.cards.map((card) => <TeamCard card={card} />);

  return (
    <section className={styles.section} id={pageData.id}>
      <div className={styles.section__wrapper}>
        <div className={styles.section__text}>
          <h1 className={styles.title}>{pageData.title}</h1>
          <p className={styles.description}>{pageData.description}</p>
        </div>

        <div className={styles.section__cards}>
          <SwiperSlider cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default Team;
