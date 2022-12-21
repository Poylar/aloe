import React, { FC } from 'react';

import SocialIcon from '../../Components/UI/SocialIcon';
import styles from './Footer.module.scss';

interface FooterTermsProps {
  copyright: {
    text: string;
    icon: {
      type: string;
      link: string;
    };
  };
  termLink: {
    name: string;
    link: string;
  };
}

const FooterTerms: FC<{ pageData: FooterTermsProps }> = ({ pageData }) => {
  const { copyright, termLink } = pageData;

  return (
    <div className={styles.footerTerms}>
      <div className={styles.term}>
        <p className={styles.termName}>{copyright.text}</p>
        <SocialIcon social={copyright.icon} />
      </div>
      <a
        className={styles.termLink}
        href={termLink.link}
        target='_blank'
        rel='noreferrer'
      >
        {termLink.name}
      </a>
    </div>
  );
};

export default FooterTerms;
