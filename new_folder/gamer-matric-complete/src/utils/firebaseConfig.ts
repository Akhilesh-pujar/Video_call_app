import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBGKVoZKssOiyLYX7sIxtAjdJWqepriwFI",
  authDomain: "peer-to-peer-communicati-12000.firebaseapp.com",
  projectId: "peer-to-peer-communicati-12000",
  storageBucket: "peer-to-peer-communicati-12000.appspot.com",
  messagingSenderId: "401096421367",
  appId: "1:401096421367:web:3ebd3cabc9806ee0db08f2",
  measurementId: "G-RVHWV9Z9QT"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
