// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANFlx6iOP-la_8gJC73RV7A4RXm6LQ444",
  authDomain: "fitness-8d708.firebaseapp.com",
  projectId: "fitness-8d708",
  storageBucket: "fitness-8d708.appspot.com",
  messagingSenderId: "234472828576",
  appId: "1:234472828576:web:09b94ca6a64e6e99e263c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };