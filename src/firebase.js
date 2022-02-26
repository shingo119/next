import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0JHlu6I571pjYCFPl2eCH7jF89Gn_55U",
  authDomain: "my-next-pr.firebaseapp.com",
  databaseURL: "https://my-next-pr.firebaseio.com",
  projectId: "my-next-pr",
  storageBucket: "my-next-pr.appspot.com",
  messagingSenderId: "480391891713",
  appId: "1:480391891713:web:3e3ecb20ef6d33c10da900",
  measurementId: "G-S3J72MKB1C",
};
initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();