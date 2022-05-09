// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtDXlyH-wZ75iFqWeegdItT7U33lBLarE",
  authDomain: "instagram-clone-b3a2b.firebaseapp.com",
  projectId: "instagram-clone-b3a2b",
  storageBucket: "instagram-clone-b3a2b.appspot.com",
  messagingSenderId: "307264148299",
  appId: "1:307264148299:web:b16b93b9c541db496d8ece"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();
const db = getFirestore();
const storage = getStorage()

export { app, db, storage }
