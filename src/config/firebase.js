import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB7DRcENyNqlr78YniR5K6eNmLkPhItL3M",
  authDomain: "tupenca-89082.firebaseapp.com",
  databaseURL: "https://tupenca-89082-default-rtdb.firebaseio.com",
  projectId: "tupenca-89082",
  storageBucket: "tupenca-89082.appspot.com",
  messagingSenderId: "950387435992",
  appId: "1:950387435992:web:8934ffcafd755c2b756aad",
  measurementId: "G-7Q5V0ZGWSE"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);