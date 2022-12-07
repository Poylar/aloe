import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Assets/styles/global.scss';
import { ButtonUITransparent, ButtonUiGreen } from './Components/UI/ButtonUI';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import FrontPage from './Pages/FrontPage/FrontPage';

const App = () => {
  const defaultPageData = {
    header: {
      headerButtons: [
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
      ],
      navItems: [
        { name: 'Mission', archon: '#mission' },
        { name: 'Bridge', archon: '#bridge' },
        { name: 'Spreadsheets', archon: '#speadsheets' },
        { name: 'Team', archon: '#team' },
        { name: 'Contacts', archon: '#contacts' },
      ],
    },
    footer: {},
  };

  return (
    <>
      <Header pageData={defaultPageData.header} />
      <Routes>
        <Route index element={<FrontPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
