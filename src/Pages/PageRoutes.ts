import AdminPage from './AdminPage/AdminPage';
import EmailsPage from './EmailsPage/EmailsPage';
import FrontPage from './FrontPage/FrontPage';

const baseUrl = '/';

export const PageRoutes = [
  {
    element: FrontPage,
    path: `${baseUrl}`,
  },
  {
    element: EmailsPage,
    path: `${baseUrl}emails`,
  },
  {
    element: AdminPage,
    path: `${baseUrl}FrontPage`,
  },
];

export const pagePaths = PageRoutes.map((item) => item.path);
