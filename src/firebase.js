import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7uDtA2UXdzQBcqEHZDY3nsrAykq3ZKc0",
  authDomain: "todo-list-acbde.firebaseapp.com",
  projectId: "todo-list-acbde",
  storageBucket: "todo-list-acbde.appspot.com",
  messagingSenderId: "691445758521",
  appId: "1:691445758521:web:5a992e26c6b00f7894ebe8",
  measurementId: "G-EZXNPE0PCS"
};
const app=initializeApp(firebaseConfig);
const db=getFirestore(app);
export{db};