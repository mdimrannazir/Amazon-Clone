// Personal Comment: Took those codes from firebase Project Settings>Config
// Next (npm install firebase-tools) + (npm install firebase)
//Wrote this after equal sign (firebase.initializeApp) to Initialize firebase.
import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZoJs_REb6_A-vauaEYp0nsmdlFYKT9So",
    authDomain: "clone-mar21-ba1b4.firebaseapp.com",
    projectId: "clone-mar21-ba1b4",
    storageBucket: "clone-mar21-ba1b4.appspot.com",
    messagingSenderId: "680211168780",
    appId: "1:680211168780:web:71455e0d7f2d14668b3829",
    measurementId: "G-VSMCQLSLVS"
  });

  const db = firebase.firestore();

  export { db }