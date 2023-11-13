
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "themagiccrate.firebaseapp.com",
  projectId: "themagiccrate",
  storageBucket: "themagiccrate.appspot.com",
  messagingSenderId: "734367079267",
  appId: "1:734367079267:web:b047200e0a6f1d37ee9156"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);