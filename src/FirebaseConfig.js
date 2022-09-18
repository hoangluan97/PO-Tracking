// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCh6Rjj4z_fH-fCXEPGtlIOC6iNhBn4-s",
  authDomain: "potracking-d13f9.firebaseapp.com",
  projectId: "potracking-d13f9",
  storageBucket: "potracking-d13f9.appspot.com",
  messagingSenderId: "316028542386",
  appId: "1:316028542386:web:c9ab9e2a852718e47dd8ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
