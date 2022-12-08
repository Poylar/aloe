import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import App from './App';

ReactDom.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
