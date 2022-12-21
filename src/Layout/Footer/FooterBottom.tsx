import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import footerLogo from '../../Assets/icons/footerLogo.svg';
import Button from '../../Components/UI/ButtonUI';
import styles from './Footer.module.scss';

interface FooterBottomProps {
  logoButton: {
    element: string;
    text: string;
    linkTo: string;
  };
  links: {
    name: string;
    archon: string;
  }[];
}

const FooterBottom: FC<{ pageData: FooterBottomProps }> = ({ pageData }) => {
  const { logoButton, links } = pageData;

  return (
    <div className={styles.footerBottom}>
      <div className={styles.leftSide}>
        <Link to='/' className={styles.logotype}>
          <img src={footerLogo} alt='' />
        </Link>
        <Button
          text={logoButton.text}
          linkTo={logoButton.linkTo}
          element={logoButton.element}
        />
      </div>
      <div className={styles.rightLinks}>
        {links.map((link, index) => (
          <Link to={link.archon} className={styles.link} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
