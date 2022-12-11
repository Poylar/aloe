interface INameArchonItem {
  name: string;
  archon: string;
}

interface IButtonItem {
  element: string;
  text: string;
  linkTo: string;
}

interface IIconItem {
  type: string;
  link: string;
}
interface IEmailItem {
  email: string;
  time: string;
}

export type { INameArchonItem, IButtonItem, IIconItem, IEmailItem };
