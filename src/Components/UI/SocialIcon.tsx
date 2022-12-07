import React, { FC } from 'react';

import discord from '../../Assets/icons/discord.svg';
import twitter from '../../Assets/icons/twitter.svg';
import whiteTwitter from '../../Assets/icons/whiteTwitter.svg';
import styles from './SocialIcon.module.scss';

interface ISocial {
  type: string;
  link: string;
}

const SocialIcon: FC<{ social: ISocial }> = ({ social }) => {
  let image: string;

  switch (social.type) {
    case 'discord':
      image = discord;
      break;
    case 'twitter':
      image = twitter;
      break;
    case 'whiteTwitter':
      image = whiteTwitter;
      break;
    default:
      image = '';
      break;
  }

  return (
    <a href={social.link} className={styles.socialIcon}>
      <img className={styles.img} src={image} alt='' />
    </a>
  );
};

export type { ISocial };

export default SocialIcon;
