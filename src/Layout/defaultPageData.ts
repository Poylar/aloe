import type { DocumentData } from '@firebase/firestore';

import sites from '../Database/Firebase';

const getDefaultPageData: () => DocumentData = async () => {
  const data = await sites
    .getPageData(sites.firebaseDataBase)
    .then((response) => response[0]);
  return data.defaultPageData;
};

export default getDefaultPageData;
