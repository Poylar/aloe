import FrontPage from './FrontPage/FrontPage';
import TermPage from './TermPage/TermPage';

const baseUrl = '/';

export const PageRoutes = [
  {
    element: FrontPage,
    path: `${baseUrl}`,
  },
  {
    element: TermPage,
    path: `${baseUrl}terms`,
  },
];

export const pagePaths = PageRoutes.map((item) => item.path);
