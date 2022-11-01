// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfnlVDPSgnwrlW0ovRJcwacetA2GvSFLw",
  authDomain: "reactblog-4ded0.firebaseapp.com",
  projectId: "reactblog-4ded0",
  storageBucket: "reactblog-4ded0.appspot.com",
  messagingSenderId: "399920733156",
  appId: "1:399920733156:web:6ebac792c9904b705e05f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth=getAuth(app);
export const provider= new GoogleAuthProvider();