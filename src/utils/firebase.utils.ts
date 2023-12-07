// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDERID,
  appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();


export const getCategoriesAndDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);

  const q = query(collectionRef);

  const querySnapshot = await getDocs(q)

  console.log(querySnapshot)


}