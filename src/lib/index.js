
// Import the functions you need from the SDKs you need
import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup, sendEmailVerification
}
    from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";
    
import { getFirestore, collection, addDoc, getDocs, deleteDoc, onSnapshot, doc, getDoc, updateDoc } 
    
    from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js"        
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrjTLw9QLhoJzC7qHJiKwFu3DRdtj1xgY",
    authDomain: "laberintolector-5688a.firebaseapp.com",
    projectId: "laberintolector-5688a",
    storageBucket: "laberintolector-5688a.appspot.com",
    messagingSenderId: "800505099476",
    appId: "1:800505099476:web:e8781a0717d6a00bbbf741",
    measurementId: "G-4MXS3Q2K9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);


// Funciones auth para autenticar a los usuarios //
export const createUser = (user, password) => {
    return createUserWithEmailAndPassword(auth, user, password);
}

export const signIn = (user, password) => {
    return signInWithEmailAndPassword(auth, user, password);
}

export const signInPopup = () => {
    return signInWithPopup(auth, provider);
}

export const sendEmail = () =>{
    return sendEmailVerification(auth.currentUser);
}

export { GoogleAuthProvider }

export const db = getFirestore();

export const saveTask = (title,description) => {
    addDoc(collection(db,'tasks'), {title,description});
}

export const getTasks = () => getDocs(collection(db, 'tasks'));

export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback);

export const deleteTask = id => deleteDoc (doc(db, 'tasks', id));

export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newFields) => 
updateDoc(doc(db, 'tasks', id), newFields);








