import React from 'react';

import styles from './Terms.module.scss';

const Terms = () => (
  <div className={styles.terms}>
    <iframe
      className={styles.iframe}
      src='https://www.termsfeed.com/live/6d264151-d7b8-4896-96e4-151e355f8726'
      title='terms'
    />
  </div>
);

export default Terms;
