import React, { useEffect, useState } from 'react';
import { Route, useLocation, useNavigate } from 'react-router-dom';

import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import getDefaultPageData from './Layout/defaultPageData';
import { IDefaultPageData } from './Layout/defaultPageData.types';
import AdminPage from './Pages/AdminPage/AdminPage';
import { PageRoutes, pagePaths } from './Pages/PageRoutes';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [defaultPageData, setDefaultPageData] = useState<IDefaultPageData>();

  useEffect(() => {
    getDefaultPageData().then((data: IDefaultPageData) => {
      setDefaultPageData(data);
    });
  }, []);

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
      // navigate(pagePaths[0]);
    }
  }, [location.pathname]);

  return (
    <>
      {/* {location.pathname === '/' && defaultPageData !== undefined ? ( */}
      {/*   <Header pageData={defaultPageData.header} hash={location.hash} /> */}
      {/* ) : null} */}

      <main>
        {/* <Routes> */}
        {/*   {PageRoutes.map((item, index) => ( */}
        {/*     <Route */}
        {/*       key={index} */}
        {/*       index={item.path === '/'} */}
        {/*       path={item.path} */}
        {/*       element={<item.element />} */}
        {/*     /> */}
        {/*   ))} */}
        {/* </Routes> */}
        <AdminPage />
      </main>

      {/* {location.pathname === '/' && defaultPageData !== undefined ? ( */}
      {/*   <Footer pageData={defaultPageData.footer} /> */}
      {/* ) : null} */}
    </>
  );
};

export default App;
