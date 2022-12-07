import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './Assets/styles/global.scss';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import { defaultPageData } from './Layout/defaultPageData';
import { PageRoutes, pagePaths } from './Pages/PageRoutes';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sectionElement = document.getElementById(
      location.hash.replace('#', '')
    );
    if (sectionElement !== null) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  useEffect(() => {
    if (pagePaths.filter((path) => path === location.pathname).length === 0) {
      navigate('/');
    }
  }, [location.pathname]);

  return (
    <>
      <Header pageData={defaultPageData.header} />
      <main>
        <Routes>
          {PageRoutes.map((item, index) => (
            <Route
              key={index}
              index={item.path === '/'}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Routes>
      </main>
      <Footer pageData={defaultPageData.footer} />
    </>
  );
};

export default App;
