import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Assets/styles/global.scss';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import FrontPage from './Pages/FrontPage/FrontPage';

const App = () => {
  const defaultPageData = {
    header: {
      headerButtons: [
        {
          element: 'transparent',
          text: 'Join mailing list',
          linkTo: '#email',
        },
        {
          element: 'green',
          text: 'Bridge assets',
          linkTo: '/',
        },
      ],
      navItems: [
        { name: 'Mission', archon: '#mission' },
        { name: 'Bridge', archon: '#bridge' },
        { name: 'Spreadsheets', archon: '#speadsheets' },
        { name: 'Team', archon: '#team' },
        { name: 'Contacts', archon: '#contacts' },
      ],
    },
    footer: {
      title: 'Join our report mailing list %mail%',
      description:
        'We have excellent experts with extensive experience in digital ' +
        'asset research',
      form: {
        placeholder: 'Email',
        buttonText: 'Send',
      },
      logoButton: {
        element: 'green',
        text: 'Bridge assets',
        linkTo: '/',
      },
      copyright: {
        text: '© 2022. Aloe Labs.',
        icon: {
          type: 'whiteTwitter',
          link: '/',
        },
      },
      links: [
        { name: 'Mission', archon: '#mission' },
        { name: 'Spreadsheets', archon: '#speadsheets' },
        { name: 'DeFi Solutions', archon: '#defiSolutions' },
        { name: 'Team', archon: '#team' },
        { name: 'Contacts', archon: '#contacts' },
      ],
      termLink: {
        name: 'Terms of Conditions',
        link: '/',
      },
    },
  };

  return (
    <>
      <Header pageData={defaultPageData.header} />
      <Routes>
        <Route index element={<FrontPage />} />
      </Routes>
      <Footer pageData={defaultPageData.footer} />
    </>
  );
};

export default App;
