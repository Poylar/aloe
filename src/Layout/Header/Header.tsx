import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../Assets/icons/logo.svg';
import Button from '../../Components/UI/ButtonUI';
import styles from './Header.module.scss';
import HeaderMenu from './HeaderMenu';

interface IHeaderButton {
  element: string;
  text: string;
  linkTo: string;
}

interface INavItems {
  name: string;
  archon: string;
}

interface IHeader {
  pageData: {
    headerButtons: IHeaderButton[];
    navItems: INavItems[];
  };
}

const Header: FC<IHeader> = ({ pageData }) => (
  <header className={styles.header}>
    <div className={styles.header__wrapper}>
      <div className={styles.header__nav}>
        <Link to='/' className={styles.logo}>
          <img src={logoImage} alt='' />
        </Link>

        <HeaderMenu navItems={pageData.navItems} />
      </div>

      <div className={styles.header__buttons}>
        {pageData.headerButtons.map((item, index) => (
          <Button
            key={index}
            linkTo={item.linkTo}
            text={item.text}
            element={item.element}
          />
        ))}
      </div>
    </div>
  </header>
);

export default Header;
