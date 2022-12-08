import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

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
      navigate(pagePaths[0]);
    }
  }, [location.pathname]);

  return (
    <>
      {location.pathname === '/aloe/admin' ? null : (
        <Header pageData={defaultPageData.header} hash={location.hash} />
      )}

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

      {location.pathname === '/aloe/admin' ? null : (
        <Footer pageData={defaultPageData.footer} />
      )}
    </>
  );
};

export default App;
