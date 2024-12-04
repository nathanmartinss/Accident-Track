import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Importa o serviço de autenticação do Firebase

// Configuração do Firebase do seu projeto
const firebaseConfig = {
  apiKey: "AIzaSyAoNcuVriMN-PYf8Q1VgPsKrTjN9QU5eOI",
  authDomain: "accident-track.firebaseapp.com",
  projectId: "accident-track",
  storageBucket: "accident-track.firebasestorage.app",
  messagingSenderId: "17310297798",
  appId: "1:17310297798:web:586f1fccba778d8db571c7",
};

// Inicializa o Firebase App
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

// Inicializa o Firebase Auth
const auth = getAuth(app);

// Exporta as instâncias do Firestore e Auth para serem usadas em outros arquivos do projeto
export { db, auth };
