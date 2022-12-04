import React from 'react';
import ReactDOM from 'react-dom/client';

import Footer from './Components/Footer/Footer';
import RootRouter from './RootRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Footer />
    <RootRouter />
  </React.StrictMode>
);
