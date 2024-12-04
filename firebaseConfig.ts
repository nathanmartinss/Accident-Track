import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoNcuVriMN-PYf8Q1VgPsKrTjN9QU5eOI",
    authDomain: "accident-track.firebaseapp.com",
    projectId: "accident-track",
    storageBucket: "accident-track.firebasestorage.app",
    messagingSenderId: "17310297798",
    appId: "1:17310297798:web:586f1fccba778d8db571c7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
