// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD370dXF5WpUUYsH6YWO8bDjhZza5mUPIk",

  authDomain: "pocket-methods.firebaseapp.com",

  projectId: "pocket-methods",

  storageBucket: "pocket-methods.appspot.com",

  messagingSenderId: "374298307386",

  appId: "1:374298307386:web:7fc123b81af5169634fe03",

  measurementId: "G-01J3J15QB5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);

export { app, auth };