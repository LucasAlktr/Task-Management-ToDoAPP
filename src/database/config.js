import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS3idqHjcRzPx2SEjuBiL3L7KvB-wXTls",
  authDomain: "taskmanagement-b2881.firebaseapp.com",
  projectId: "taskmanagement-b2881",
  storageBucket: "taskmanagement-b2881.appspot.com",
  messagingSenderId: "625859037064",
  appId: "1:625859037064:web:438b4e6fef44cd3d46dc3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);