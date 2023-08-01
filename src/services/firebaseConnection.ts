import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB92_H7z-DlQ70fEZBKKKaIeuLAcvJiiEE",
  authDomain: "xhealth-gym.firebaseapp.com",
  projectId: "xhealth-gym",
  storageBucket: "xhealth-gym.appspot.com",
  messagingSenderId: "760722980714",
  appId: "1:760722980714:web:d9293b040886ddaf2bef13"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
