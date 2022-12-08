import AdminPage from './AdminPage/AdminPage';
import FrontPage from './FrontPage/FrontPage';

// @ts-ignore
const { BASE_URL } = import.meta.env;
const baseUrl = BASE_URL !== undefined ? BASE_URL : '/';

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
