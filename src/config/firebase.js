import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDaLeEOhmVojm4YtXanZswBsigWhATCxcw",
  authDomain: "ria2024-9563d.firebaseapp.com",
  projectId: "ria2024-9563d",
  storageBucket: "ria2024-9563d.appspot.com",
  messagingSenderId: "1063022978788",
  appId: "1:1063022978788:web:d1b2be7979f4b9db95eef1",
  measurementId: "G-SJG6PHPF3J"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);