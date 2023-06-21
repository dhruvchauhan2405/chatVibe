import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyBp7NRfYRluQONiIZZMWbnlUAcNK8bFn6k",
  authDomain: "chatify-dbdc4.firebaseapp.com",
  projectId: "chatify-dbdc4",
  storageBucket: "chatify-dbdc4.appspot.com",
  messagingSenderId: "255899671909",
  appId: "1:255899671909:web:738fe327f9f1841d74558c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, provider, storage };
