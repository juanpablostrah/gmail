import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBov2eYcjGkPn2jUWnXAyNY4Zpze2c6a6U",
  authDomain: "fir-16225.firebaseapp.com",
  projectId: "fir-16225",
  storageBucket: "fir-16225.appspot.com",
  messagingSenderId: "911379037713",
  appId: "1:911379037713:web:1572ea745de3f63e6dbbb0"
};

//conecto el frontend con el backend
const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore(); //firestore es la BASE DE DATOS.
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, googleProvider}; 