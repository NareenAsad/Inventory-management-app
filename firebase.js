// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEdrgcqG7U0_TnXcHg8R-YC2T4adnNv1I",
  authDomain: "inventory-management-238d5.firebaseapp.com",
  projectId: "inventory-management-238d5",
  storageBucket: "inventory-management-238d5.appspot.com",
  messagingSenderId: "912936214804",
  appId: "1:912936214804:web:edf33410457cdd5ad9e201",
  measurementId: "G-XV65D7W6M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};