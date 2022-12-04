import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './Pages/FrontPage/FrontPage';

const RootRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<FrontPage />} />
    </Routes>
  </BrowserRouter>
);

export default RootRouter;
