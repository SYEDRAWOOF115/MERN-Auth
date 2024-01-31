// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-faad6.firebaseapp.com",
  projectId: "mern-auth-faad6",
  storageBucket: "mern-auth-faad6.appspot.com",
  messagingSenderId: "725296717965",
  appId: "1:725296717965:web:e8643bac8f9ed4b07b42c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);