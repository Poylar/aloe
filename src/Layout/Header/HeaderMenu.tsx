import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

interface INavItem {
  name: string;
  archon: string;
}
const menu: INavItem[] = [
  {
    name: 'Mission',
    archon: '#mission',
  },
  {
    name: 'Bridge',
    archon: '#bridge',
  },
  {
    name: 'Spreadsheets',
    archon: '#speadsheets',
  },
  {
    name: 'Team',
    archon: '#team',
  },
  {
    name: 'Contacts',
    archon: '#contacts',
  },
];

const HeaderMenu = () => {
  const { hash } = useLocation();

  return (
    <nav className={styles.headerMenu}>
      <ul className={styles.headerMenu__wrapper}>
        {menu.map((item) => (
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
