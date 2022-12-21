import React, { FC, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logoImage from '../../Assets/icons/logo.svg';
import Button from '../../Components/UI/ButtonUI';
import useMedia from '../../Hooks/useMedia';
import { IHeaderPageData } from '../defaultPageData.types';
import styles from './Header.module.scss';

const DesktopHeader: FC<{
  pageData: IHeaderPageData;
  hash: string;
}> = ({ pageData, hash }) => (
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

const MobileHeader: FC<{
  pageData: IHeaderPageData;
  hash: string;
}> = ({ pageData, hash }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__nav}>
          <Link to='/' className={styles.logo}>
            <img src={logoImage} alt='' />
          </Link>

          <nav className={`${styles.headerMenu} ${isOpen ? styles.open : ''}`}>
            <Button
              linkTo={pageData.headerButtons[1].linkTo}
              text={pageData.headerButtons[1].text}
              element={pageData.headerButtons[1].element}
            />
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <span onClick={menuClickHandler} className={styles.burger}>
              <span className={styles.first} />
              <span className={styles.second} />
            </span>

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
              <li className={styles.navItem}>
                <Button
                  linkTo={pageData.headerButtons[0].linkTo}
                  text={pageData.headerButtons[0].text}
                  element={pageData.headerButtons[0].element}
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Header: FC<{
  pageData: IHeaderPageData;
  hash: string;
}> = ({ pageData }) => {
  const { hash } = useLocation();
  const windowWidth = useMedia();

  return useMemo(() => {
    if (windowWidth <= 1200) {
      return <MobileHeader pageData={pageData} hash={hash} />;
    }
    return <DesktopHeader pageData={pageData} hash={hash} />;
  }, [windowWidth]);
};

export default Header;
