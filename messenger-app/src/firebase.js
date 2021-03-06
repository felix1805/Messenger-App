// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPKONCsEfpQr_4lBfOHges8pdThxDAqks",
  authDomain: "messenger-app-7c09d.firebaseapp.com",
  projectId: "messenger-app-7c09d",
  storageBucket: "messenger-app-7c09d.appspot.com",
  messagingSenderId: "829474581752",
  appId: "1:829474581752:web:0f32be5f3f2283ef9e5f0d",
  measurementId: "G-D1SJ3NF0PH"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db ;
