import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGxV_UlJI8Votba7BhkU8rTV6_YBJslzk",
    authDomain: "kokoai-f3cce.firebaseapp.com",
    projectId: "kokoai-f3cce",
    storageBucket: "kokoai-f3cce.appspot.com",
    messagingSenderId: "1028587345494",
    appId: "1:1028587345494:web:9b5b18c29873811d1d8df7",
    measurementId: "G-TKMBD1MGBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;