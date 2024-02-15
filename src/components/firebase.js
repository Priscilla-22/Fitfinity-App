import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyANFlx6iOP-la_8gJC73RV7A4RXm6LQ444",
    authDomain: "fitness-8d708.firebaseapp.com",
    projectId: "fitness-8d708",
    storageBucket: "fitness-8d708.appspot.com",
    messagingSenderId: "234472828576",
    appId: "1:234472828576:web:09b94ca6a64e6e99e263c5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Exports the necessary variables
export const app = firebase.app();
export const auth = firebase.auth();
export const firestore = firebase.firestore();