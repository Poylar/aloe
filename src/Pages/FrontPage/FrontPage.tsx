import '../../Assets/styles/reseter.scss';
import Bridge from '../../Layout/Blocks/Bridge';
import Description from '../../Layout/Blocks/Description';
import MetaInterface from '../../Layout/Blocks/MetaInterface';
import Mission from '../../Layout/Blocks/Mission';
import Research from '../../Layout/Blocks/Research';
import Sheet from '../../Layout/Blocks/Sheet';
import Team from '../../Layout/Blocks/Team';
import { FrontPageData } from './FrontPage.data';
import './FrontPage.module.scss';

const FrontPage = () => {
  const page = FrontPageData;

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
};

export default FrontPage;
