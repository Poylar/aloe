import type { DocumentData } from '@firebase/firestore';

import sites from '../Database/Firebase';

const getDefaultPageData: () => DocumentData = async () => {
  const data = await sites
    .getPageData(sites.firebaseDataBase)
    .then((response) => ({
      footer: response[0],
      header: response[1],
    }));
  return data;
};

export default getDefaultPageData;
