import type { FirebaseApp } from '@firebase/app';
import type { Firestore } from '@firebase/firestore';
import { arrayRemove, arrayUnion, doc, updateDoc } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { FirebaseStorage, getStorage, ref } from 'firebase/storage';

import { IEmailItem } from '../App.types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STIRAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const storage: FirebaseStorage = getStorage();

const firebaseDataBase: Firestore = getFirestore(app);

const getPageData = async (db: Firestore) => {
  const snapshot = await getDocs(collection(db, 'PageData'));
  return snapshot.docs.map((snapshotItem) => snapshotItem.data());
};

const getFrontPageData = async (db: Firestore) => {
  const snapshot = await getDocs(collection(db, 'FrontPage'));

  return snapshot.docs.map((snapshotItem) => ({
    [snapshotItem.id]: snapshotItem.data(),
  }));
};

const includeNewEmail = async (db: Firestore, data: IEmailItem) => {
  const refDoc = doc(collection(db, 'Emails'), 'JVsorqdq4ibdJB1BuYWz');
  await setDoc(refDoc, { emails: arrayUnion(data) }, { merge: true });
};

const getEmails = async (db: Firestore) => {
  const snapshot = await getDocs(collection(db, 'Emails'));
  return snapshot.docs.map((snapshotItem) => snapshotItem.data());
};

const removeCurrentEmail = async (db: Firestore, current: IEmailItem) => {
  const refDoc = doc(collection(db, 'Emails'), 'JVsorqdq4ibdJB1BuYWz');
  await updateDoc(refDoc, { emails: arrayRemove(current) });
};

const getStorageImage = async (link: string) =>
  ref(storage, `gs://aloe-82ae8.appspot.com/${link}`);

export default {
  getPageData,
  includeNewEmail,
  removeCurrentEmail,
  getEmails,
  getFrontPageData,
  firebaseDataBase,
  firebaseConfig,
  app,
  getStorageImage,
};

export { firebaseConfig };
