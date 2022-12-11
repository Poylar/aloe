import { DocumentData } from '@firebase/firestore';

import sites from '../../Database/Firebase';

const getFrontPageData: () => DocumentData = async () => {
  const data = await sites
    .getPageData(sites.firebaseDataBase)
    .then((response) => response[0]);
  return data.FrontPageData;
};

export default getFrontPageData;
