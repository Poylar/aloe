import React, { FC } from 'react';

import { IIconItem } from '../../App.types';
import discord from '../../Assets/icons/discord.svg';
import twitter from '../../Assets/icons/twitter.svg';
import whiteTwitter from '../../Assets/icons/whiteTwitter.svg';
import styles from './SocialIcon.module.scss';

const SocialIcon: FC<{ social: IIconItem }> = ({ social }) => {
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
    <a
      href={social.link}
      className={styles.socialIcon}
      target='_blank'
      rel='noreferrer'
    >
      <img className={styles.img} src={image} alt='' />
    </a>
  );
};

export default SocialIcon;
