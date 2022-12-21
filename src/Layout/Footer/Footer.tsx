import React, { FC } from 'react';

import { IFooterPageData } from '../defaultPageData.types';
import styles from './Footer.module.scss';
import FooterBottom from './FooterBottom';
import FooterTerms from './FooterTerms';
import FooterTop from './FooterTop';

const Footer: FC<{
  pageData: IFooterPageData;
}> = ({ pageData }) => (
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
