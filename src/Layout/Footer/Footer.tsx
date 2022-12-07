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

const Footer: FC<IFooterProps> = ({ pageData }) => {
  const { title, description, form, logoButton, links, copyright, termLink } =
    pageData;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <FooterTop
          title={title}
          description={description}
          placeholder={form.placeholder}
          buttonText={form.buttonText}
        />

        <FooterBottom pageData={{ logoButton, links }} />

        <FooterTerms pageData={{ copyright, termLink }} />
      </div>
    </footer>
  );
};

export default Footer;
