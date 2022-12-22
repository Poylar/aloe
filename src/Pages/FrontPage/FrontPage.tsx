import { useEffect, useState } from 'react';

import Bridge from '../../Layout/Blocks/Bridge';
import Description from '../../Layout/Blocks/Description';
import MetaInterface from '../../Layout/Blocks/MetaInterface';
import Mission from '../../Layout/Blocks/Mission';
import Research from '../../Layout/Blocks/Research';
import Sheet from '../../Layout/Blocks/Sheet';
import Team from '../../Layout/Blocks/Team';
import getFrontPageData from './FrontPage.data';
import { IFrontPageData } from './FrontPage.types';

const FrontPage = () => {
  const [page, setPage] = useState<IFrontPageData>();

  useEffect(() => {
    document.querySelector('body')?.classList.add('indexPage');

    getFrontPageData().then((response: IFrontPageData) => {
      setPage(response);
    });
  }, []);

  if (document.title !== 'Aloe Labs') {
    document.title = 'Aloe Labs';
  }
  if (
    document.querySelector('head link[rel="icon"]')?.getAttribute('href') !==
    'favicon.svg'
  ) {
    document
      .querySelector('head link[rel="icon"]')
      ?.setAttribute('href', 'favicon.svg');
  }

  if (page !== undefined) {
    return (
      <>
        <Description pageData={page.description} />
        <Mission pageData={page.mission} />
        <Bridge pageData={page.bridge} />
        <MetaInterface />
        <Sheet pageData={page.sheets} />
        <Research pageData={page.research} />
        <Team pageData={page.team} />
      </>
    );
  }
  return null;
};

export default FrontPage;
