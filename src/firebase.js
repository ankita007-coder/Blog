import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import {} from 'firebase/compat/firestore';


  const firebaseConfig = {
    apiKey: "AIzaSyC92a71GZT8szNgWTC4OLKbaRm-lz_E-s0",
    authDomain: "hooks-blog-f1d2b.firebaseapp.com",
    projectId: "hooks-blog-f1d2b",
    storageBucket: "hooks-blog-f1d2b.appspot.com",
    messagingSenderId: "176879426249",
    appId: "1:176879426249:web:58e9fef7a5ec661ba68b18"
  };

  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();