import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

interface INavItem {
  name: string;
  archon: string;
}

const HeaderMenu: FC<{ navItems: INavItem[] }> = ({ navItems }) => {
  const { hash } = useLocation();

  return (
    <nav className={styles.headerMenu}>
      <ul className={styles.headerMenu__wrapper}>
        {navItems.map((item) => (
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
  );
};

export default HeaderMenu;
