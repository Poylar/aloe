import React from 'react';

import Terms from '../../Layout/Terms/Terms';

const TermPage = () => {
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

  return <Terms />;
};

export default TermPage;
