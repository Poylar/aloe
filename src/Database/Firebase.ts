import type { FirebaseApp } from '@firebase/app';
import { arrayRemove, arrayUnion, doc, updateDoc } from '@firebase/firestore';
import type { Firestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore, setDoc } from 'firebase/firestore';

import { IEmailItem } from '../App.types';

const firebaseConfig = {
  // @ts-ignore
  apiKey: import.meta.env.VITE_FB_API_KEY,
  // @ts-ignore
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  // @ts-ignore
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  // @ts-ignore
  storageBucket: import.meta.env.VITE_FB_STIRAGE_BUCKET,
  // @ts-ignore
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  // @ts-ignore
  appId: import.meta.env.VITE_FB_APP_ID,
};

const app: FirebaseApp = initializeApp(firebaseConfig);

const firebaseDataBase: Firestore = getFirestore(app);

const getPageData = async (db: Firestore) => {
  const snapshot = await getDocs(collection(db, 'PageData'));
  return snapshot.docs.map((snapshotItem) => snapshotItem.data());
};

const includeNewEmail = async (db: Firestore, data: IEmailItem) => {
  const ref = doc(collection(db, 'Emails'), 'JVsorqdq4ibdJB1BuYWz');
  await setDoc(ref, { emails: arrayUnion(data) }, { merge: true });
};

const getEmails = async (db: Firestore) => {
  const snapshot = await getDocs(collection(db, 'Emails'));
  return snapshot.docs.map((snapshotItem) => snapshotItem.data());
};

const removeCurrentEmail = async (db: Firestore, current: IEmailItem) => {
  const ref = doc(collection(db, 'Emails'), 'JVsorqdq4ibdJB1BuYWz');
  await updateDoc(ref, { emails: arrayRemove(current) });
};

export default {
  getPageData,
  includeNewEmail,
  removeCurrentEmail,
  getEmails,
  firebaseDataBase,
};
