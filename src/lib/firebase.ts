import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCaWOcqrifcjNsAPCIqYpdk-AOlRz8ZPSo",
  authDomain: "etcarwow.firebaseapp.com",
  projectId: "etcarwow",
  storageBucket: "etcarwow.appspot.com",
  messagingSenderId: "724667441451",
  appId: "1:724667441451:web:4be44bcda8da962574656e",
  measurementId: "G-C7V13N5WPK",
};

const app = initializeApp(firebaseConfig);
export { app };
