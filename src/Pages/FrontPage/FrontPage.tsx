import {
  ButtonUIHide,
  ButtonUiGreen,
  ButtonUiWhite,
} from '../../Components/UI/ButtonUI';
import Bridge from '../../Layout/Blocks/Bridge';
import Description from '../../Layout/Blocks/Description';
import Mission from '../../Layout/Blocks/Mission';
import Research from '../../Layout/Blocks/Research';
import Sheet from '../../Layout/Blocks/Sheet';
import Team from '../../Layout/Blocks/Team';
import './FrontPage.module.scss';

const FrontPage = () => {
  const page = {
    description: {
      title: 'Aloe Labs\n Digital Asset Group',
      description:
        'Aloe Labs is a digital asset group developing market neutral ' +
        'trading strategies by using analytical and on-chain metrics for ' +
        'valuing digital assets.',
    },
    mission: {
      title:
        'Our mission is to introduce ' +
        'Bitcoin %btc% & Ethereum %eth% as native ecosystems that utilize ' +
        'transparent and open financial systems. ',
      description:
        'These blockchains, employed correctly, will bridge the gap ' +
        'between traditional and digital markets with the belief that ' +
        'decentralized technologies with embedded financial incentives offer ' +
        'an alternative to institutions.',
      descriptionButton: {
        element: ButtonUiGreen,
        archon: '/',
        name: 'Our team',
      },
      anoncer: 'Aloe Labs Mission',
    },
    bridge: {
      text: 'Bridge your assets to any %icons% network throught cBridge widget',
    },
    sheets: {
      title: 'Spreadsheets for personal usage',
      description:
        'From time to time our team conducts large-scale research aimed at ' +
        'attracting new investors to the market. We share them with you.',
      cards: [
        {
          tags: ['New'],
          title: 'Cryptos February ‘23',
          description: 'The shortlist of tokens that our group is betting on',
          cardButton: {
            element: ButtonUiWhite,
            archon: '/',
            name: 'Go to file',
          },
        },
        {
          tags: ['New', 'Hot'],
          title: 'An in-depth study of the cryptocurrency market in 2022',
          description:
            'The Aloe Labs team conducted a study using artificial intelligence',
          cardButton: {
            element: ButtonUiWhite,
            archon: '/',
            name: 'Go to file',
          },
        },
        {
          tags: [],
          title: 'Comparison of stock and cryptocurrency markets',
          description: 'A short visual guide for the investor',
          cardButton: {
            element: ButtonUiWhite,
            archon: '/',
            name: 'Go to file',
          },
        },
        {
          tags: [],
          title: 'Comparison of stock and cryptocurrency markets',
          description: 'A short visual guide for the investor',
          cardButton: {
            element: ButtonUiWhite,
            archon: '/',
            name: 'Go to file',
          },
        },
      ],
    },
    research: {
      title: 'Researching deeper than 99,9% single investors',
      description:
        'These blockchains, employed correctly, will bridge the gap between ' +
        'traditional and digital markets with the belief that decentralized ' +
        'technologies with embedded financial incentives offer an ' +
        'alternative to institutions.',
      researchButton: {
        element: ButtonUIHide,
        archon: '/',
        name: 'Join mailing list',
      },
    },
    team: {
      title: 'Aloe Core Team',
      description:
        'We have excellent experts with extensive experience in digital asset research',
      cards: [
        {
          image: '',
          name: 'Steven McKinney',
          desc: 'Founder of Aloe Labs',
          socials: [
            { type: 'twitter', link: '/' },
            { type: 'discord', link: '/' },
          ],
        },
        {
          image: '',
          name: 'Taylor Wallace',
          desc: 'Co-founder, Lead of Research Group',
          socials: [{ type: 'tweeter', link: '/' }],
        },
        {
          image: '',
          name: 'Jennifer Allen',
          desc: 'Project Manager',
          socials: [{ type: 'twitter', link: '/' }],
        },
      ],
    },
  };

  return (
    <>
      <Description pageData={page.description} />
      <Mission pageData={page.mission} />
      <Bridge pageData={page.bridge} />
      {/* nft form */}
      <Sheet pageData={page.sheets} />
      <Research pageData={page.research} />
      <Team pageData={page.team} />
    </>
  );
};

export default FrontPage;
