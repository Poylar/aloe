import { Link } from 'react-router-dom';

import './Header.scss';

const menu = [
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
  <header className='header'>
    <div className='header-inner container'>
      <div className='header__logo logo'>
        <Link to='/'>
          <img src='' alt='' className='logo__src' />
        </Link>
      </div>
      <nav className='header__nav nav'>
        <ul className='nav-list'>
          {menu.map((item) => (
            <li className='nav__item'>
              <a href={item.archon} className='nav__link'>
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
