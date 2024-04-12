// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVRn2UKDLCiidU-sUV1BtAt7pIVCf7NfQ",
  authDomain: "chat-astrophe-24a49.firebaseapp.com",
  projectId: "chat-astrophe-24a49",
  storageBucket: "chat-astrophe-24a49.appspot.com",
  messagingSenderId: "513786342493",
  appId: "1:513786342493:web:293deac3cfc29ec42a71b4"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app)