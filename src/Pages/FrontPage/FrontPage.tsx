import Description from '../../Layout/Blocks/Description';
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
  };

  return (
    <>
      <Description
        title={page.description.title}
        description={page.description.description}
      />
      <p>footer</p>
    </>
  );
};

export default FrontPage;
