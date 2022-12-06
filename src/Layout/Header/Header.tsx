import React from 'react';
import { Link } from 'react-router-dom';

import logoImage from '../../Assets/icons/logo.svg';
import {
  ButtonUITransparent,
  ButtonUiGreen,
} from '../../Components/UI/ButtonUI';
import styles from './Header.module.scss';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  const headerButtons = [
    {
      element: ButtonUITransparent,
      text: 'Join mailing list',
      linkTo: '#email',
    },
    {
      element: ButtonUiGreen,
      text: 'Bridge assets',
      linkTo: '/',
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__nav}>
          <Link to='/' className={styles.logo}>
            <img src={logoImage} alt='' />
          </Link>

          <HeaderMenu />
        </div>

        <div className={styles.header__buttons}>
          {headerButtons.map((item) => {
            const Button = item.element;
            return (
              <React.Fragment key={item.text}>
                <Button linkTo={item.linkTo}>{item.text}</Button>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
