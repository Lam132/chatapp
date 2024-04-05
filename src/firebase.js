import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxlhP6R61PFDMW5a9W8ZIY2Ah92-UhCLY",
  authDomain: "chat-app-9d8e2.firebaseapp.com",
  projectId: "chat-app-9d8e2",
  storageBucket: "chat-app-9d8e2.appspot.com",
  messagingSenderId: "33886156687",
  appId: "1:33886156687:web:a1b055267c2277171ffdfa",
  measurementId: "G-7V7433Q95V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
