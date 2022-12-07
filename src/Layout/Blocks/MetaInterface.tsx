import React from 'react';

import styles from './MetaInterface.module.scss';

const MetaInterface = () => (
  <section className={styles.section}>
    <iframe
      className={styles.iframe}
      title='cbridge'
      src='https://cbridge.celer.network/1/56/USDC'
    />
  </section>
);

export default MetaInterface;
