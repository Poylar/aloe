import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './Assets/styles/global.scss';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import FrontPage from './Pages/FrontPage/FrontPage';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route index element={<FrontPage />} />
    </Routes>
    <Footer />
  </>
);

export default App;
