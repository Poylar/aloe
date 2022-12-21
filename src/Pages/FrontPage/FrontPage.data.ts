import { DocumentData } from '@firebase/firestore';

import sites from '../../Database/Firebase';

const getFrontPageData: () => DocumentData = async () => {
  const data = await sites
    .getFrontPageData(sites.firebaseDataBase)
    .then((response) => {
      let pageData = {};
      response.forEach((item) => {
        pageData = { ...pageData, ...item };
      });

      return pageData;
    });
  return data;
};

export default getFrontPageData;
