import AdminPage from './AdminPage/AdminPage';
import FrontPage from './FrontPage/FrontPage';

const baseUrl = '/';

export const PageRoutes = [
  {
    element: FrontPage,
    path: `${baseUrl}`,
  },
  {
    element: AdminPage,
    path: `${baseUrl}admin`,
  },
];

export const pagePaths = PageRoutes.map((item) => item.path);
