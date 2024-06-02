// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3FktE4UFUllqMZiYYKAlOjAhIFEfQxV0",
  authDomain: "laundry-application-51cb2.firebaseapp.com",
  projectId: "laundry-application-51cb2",
  storageBucket: "laundry-application-51cb2.appspot.com",
  messagingSenderId: "58698051864",
  appId: "1:58698051864:web:ea2454b126e7ab4f0e2e6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
