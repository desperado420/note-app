// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAfXofS2VDsl4A5q-wuevg-FzmBtLLwAQ",
  authDomain: "note-app-d4712.firebaseapp.com",
  projectId: "note-app-d4712",
  storageBucket: "note-app-d4712.appspot.com",
  messagingSenderId: "348107819181",
  appId: "1:348107819181:web:56df71204b1507cefa5e24",
  measurementId: "G-S5EZ9Q9SX2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
