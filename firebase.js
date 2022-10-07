import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  orderBy,
  where,
  query,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALVW0tL3PO_1XEfRFkXtu-g4zybIyKvAE",
  authDomain: "igcaption-instagram-caption.firebaseapp.com",
  projectId: "igcaption-instagram-caption",
  storageBucket: "igcaption-instagram-caption.appspot.com",
  messagingSenderId: "496287528344",
  appId: "1:496287528344:web:1e08f98995674c35daa7ed",
  measurementId: "G-GE8EGTZZDF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, orderBy, where, query, limit };
