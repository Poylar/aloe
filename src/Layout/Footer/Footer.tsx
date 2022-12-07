import React, { FC } from 'react';

import styles from './Footer.module.scss';
import FooterBottom from './FooterBottom';
import FooterTerms from './FooterTerms';
import FooterTop from './FooterTop';

interface IFooterLink {
  name: string;
  archon: string;
}

interface IFooterProps {
  pageData: {
    id: string;
    title: string;
    description: string;

    form: {
      placeholder: string;
      buttonText: string;
    };
    logoButton: {
      element: string;
      text: string;
      linkTo: string;
    };
    links: IFooterLink[];
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
  };
}

const Footer: FC<IFooterProps> = ({ pageData }) => (
  <footer className={styles.footer} id={pageData.id}>
    <div className={styles.footer__wrapper}>
      <FooterTop
        title={pageData.title}
        description={pageData.description}
        placeholder={pageData.form.placeholder}
        buttonText={pageData.form.buttonText}
      />

      <FooterBottom
        pageData={{ logoButton: pageData.logoButton, links: pageData.links }}
      />

      <FooterTerms
        pageData={{
          copyright: pageData.copyright,
          termLink: pageData.termLink,
        }}
      />
    </div>
  </footer>
);

export default Footer;
