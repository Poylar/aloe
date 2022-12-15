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
];

export const pagePaths = PageRoutes.map((item) => item.path);
