import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtY3BH1O6M1eFpyhyMqQQ8vnYgoA1rE3A",
    authDomain: "challenge-a9b75.firebaseapp.com",
    projectId: "challenge-a9b75",
    storageBucket: "challenge-a9b75.appspot.com",
    messagingSenderId: "376349106723",
    appId: "1:376349106723:web:778d3c38544697f42a4796",
    measurementId: "G-JLXKFLRFQH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
