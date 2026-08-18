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
    apiKey: "SUBSTITUA_PELA_SUA_API_KEY",
    authDomain: "SUBSTITUA_PELO_SEU_AUTH_DOMAIN",
    projectId: "SUBSTITUA_PELO_SEU_PROJECT_ID",
    storageBucket: "SUBSTITUA_PELO_SEU_STORAGE_BUCKET",
    messagingSenderId: "SUBSTITUA_PELO_SEU_MESSAGING_SENDER_ID",
    appId: "SUBSTITUA_PELO_SEU_APP_ID"
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
