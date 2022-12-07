import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoImage from '../../Assets/icons/logo.svg';
import Button from '../../Components/UI/ButtonUI';
import styles from './Header.module.scss';

interface IHeader {
  pageData: {
    headerButtons: {
      element: string;
      text: string;
      linkTo: string;
    }[];
    navItems: {
      name: string;
      archon: string;
    }[];
  };
}
const Header: FC<IHeader> = ({ pageData }) => {
  const { hash } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__nav}>
          <Link to='/' className={styles.logo}>
            <img src={logoImage} alt='' />
          </Link>

          <nav className={styles.headerMenu}>
            <ul className={styles.headerMenu__wrapper}>
              {pageData.navItems.map((item) => (
                <li
                  key={item.archon}
                  className={`${styles.navItem} ${
                    hash === item.archon ? ` ${styles.active}` : ''
                  }`}
                >
                  <Link to={item.archon}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
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
};

export default Header;
