import FrontPage from './FrontPage/FrontPage';

const baseUrl = '/';

export const PageRoutes = [
  {
    element: FrontPage,
    path: `${baseUrl}`,
  },
];

export const pagePaths = PageRoutes.map((item) => item.path);
