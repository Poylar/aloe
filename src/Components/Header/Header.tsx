import { Link } from 'react-router-dom';

import logoImage from '../../Assets/icons/logotype.svg';
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

const Header = () => (
  <header className={styles.header}>
    <div className={`${styles.headerInner} container`}>
      <div className={`${styles.header__logo}`}>
        <Link to='/'>
          <img src={logoImage} alt='' className='' />
          <p>
            Aloe <b>Labs</b>
          </p>
        </Link>
      </div>

      <nav className={styles.header__nav}>
        <ul className={styles.header__nav__wrapper}>
          {menu.map((item) => (
            <li key={item.archon} className={styles.header__nav__item}>
              <a href={item.archon} className={styles.header__nav__link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a href='#email' className='header__btn btn btn--secondary'>
        Join mailing list
      </a>
    </div>
  </header>
);

export default Header;
