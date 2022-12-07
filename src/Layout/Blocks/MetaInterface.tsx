import React from 'react';

import styles from './MetaInterface.module.scss';

const MetaInterface = () => {
  const leg = [];

  return (
    <section className={styles.section}>
      <iframe
        className={styles.iframe}
        title='cbridge'
        src='https://cbridge.celer.network/'
      />
    </section>
  );
};

export default MetaInterface;
