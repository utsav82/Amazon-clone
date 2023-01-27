// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCKbznZaAvSDnCpj7jgH_JBSEIacVab1M",
  authDomain: "clone-8c06e.firebaseapp.com",
  projectId: "clone-8c06e",
  storageBucket: "clone-8c06e.appspot.com",
  messagingSenderId: "34532297335",
  appId: "1:34532297335:web:ff0b8308e93d0c2aef1472",
  measurementId: "G-7R1Z374NN8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, db };
