// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use ...
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration ...
// For Firebase JS SDK v7.20.0 and later, measurementId is optional ...
const firebaseConfig = {
  apiKey: "AIzaSyDupc5kjtzI22bgiY_z30Js_p-VNpZbDk4",
  authDomain: "fir-demo-4d869.firebaseapp.com",
  projectId: "fir-demo-4d869",
  storageBucket: "fir-demo-4d869.firebasestorage.app",
  messagingSenderId: "85966899021",
  appId: "1:85966899021:web:183d48a8214a8174099904",
  measurementId: "G-WWJQB0PQYM"
};

// Initialize Firebase ...
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);