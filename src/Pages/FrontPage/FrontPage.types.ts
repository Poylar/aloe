import { IButtonItem, IIconItem } from '../../App.types';

interface IDescriptionPageData {
  title: string;
  description: string;
}

interface IMissionPageData {
  id: string;
  title: string;
  description: string;
  anoncer: string;
  descriptionButton: IButtonItem;
}

interface IBridgePageData {
  text: string;
  id: string;
}

interface ISheetCard {
  tags: string[];
  title: string;
  description: string;
  cardButton: {
    element: string;
    archon: string;
    name: string;
  };
}

interface ISheetPageData {
  id: string;
  title: string;
  description: string;
  cards: ISheetCard[];
}

interface IResearchPageData {
  title: string;
  description: string;
  researchButton: {
    element: string;
    archon: string;
    name: string;
  };
}

interface ITeamCard {
  image: string;
  name: string;
  desc: string;
  socials: IIconItem[];
}

interface ITeamPageData {
  id: string;
  title: string;
  description: string;
  cards: ITeamCard[];
}

interface IFrontPageData {
  description: IDescriptionPageData;
  mission: IMissionPageData;
  bridge: IBridgePageData;
  sheets: ISheetPageData;
  research: IResearchPageData;
  team: ITeamPageData;
}

export type {
  IDescriptionPageData,
  IMissionPageData,
  IBridgePageData,
  IFrontPageData,
  ISheetCard,
  ISheetPageData,
  IResearchPageData,
  ITeamCard,
  ITeamPageData,
};
