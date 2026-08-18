import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Configuração do Firebase
// Como este projeto não utiliza um bundler (Vite/Webpack), as variáveis process.env não funcionam nativamente.
// Você deve substituir os valores abaixo pelas suas chaves reais do Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDyeOcp-N_Z_g29qRoUe9YsCnIUEIEdegM",
    authDomain: "mcu-checklist-25003.firebaseapp.com",
    projectId: "mcu-checklist-25003",
    storageBucket: "mcu-checklist-25003.firebasestorage.app",
    messagingSenderId: "74371002660",
    appId: "1:74371002660:web:0f7a93714910be8906c3b1",
    measurementId: "G-FRY5ETHDXR"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Expor as instâncias e funções para o escopo global (window)
// Isso permite que o código React (compilado pelo Babel) acesse o Firebase
window.firebaseAuth = auth;
window.firebaseDb = db;
window.googleProvider = googleProvider;
window.firebaseAPI = {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile,
    doc,
    setDoc,
    getDoc,
    onSnapshot
};

console.log("Firebase inicializado e exportado para o window.");
