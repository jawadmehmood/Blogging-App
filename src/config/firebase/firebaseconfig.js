import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA83prtzSBn9BOQ5b84Xqp5HUC4pSUWneQ",
  authDomain: "blogging-app-ac165.firebaseapp.com",
  projectId: "blogging-app-ac165",
  storageBucket: "blogging-app-ac165.firebasestorage.app",
  messagingSenderId: "903602332483",
  appId: "1:903602332483:web:a296ff8e79985d8c2985f6",
  measurementId: "G-XZZFNT84WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app