import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmDs2ltVln63umZfkiZnvkuAnyiuispBE",
  authDomain: "clone-62daa.firebaseapp.com",
  projectId: "clone-62daa",
  storageBucket: "clone-62daa.appspot.com",
  messagingSenderId: "253790460277",
  appId: "1:253790460277:web:6612267255bacb42ba5b3c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
