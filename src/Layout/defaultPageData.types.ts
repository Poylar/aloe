import { IButtonItem, IIconItem, INameArchonItem } from '../App.types';

interface IHeaderPageData {
  headerButtons: IButtonItem[];
  navItems: INameArchonItem[];
}

interface IFooterPageData {
  id: string;
  title: string;
  description: string;
  form: {
    placeholder: string;
    buttonText: string;
  };
  logoButton: IButtonItem;
  links: INameArchonItem[];
  copyright: {
    text: string;
    icon: IIconItem;
  };
  termLink: {
    name: string;
    link: string;
  };
}

interface IDefaultPageData {
  header: IHeaderPageData;
  footer: IFooterPageData;
}

export type { IHeaderPageData, IFooterPageData, IDefaultPageData };
