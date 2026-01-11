import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlbAL7M7-S0XgGo5LR6dqUkoXG1nbhRw0",
  authDomain: "footballai-2bda2.firebaseapp.com",
  databaseURL: "https://footballai-2bda2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "footballai-2bda2",
  storageBucket: "footballai-2bda2.firebasestorage.app",
  messagingSenderId: "994616569056",
  appId: "1:994616569056:web:b14363b599fd765e60f485",
  measurementId: "G-JT4XBLKMNH"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
