// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAs653fLCMk30bspGip8jYY8D6N_7ADvdI",
    authDomain: "crwn-db-81504.firebaseapp.com",
    projectId: "crwn-db-81504",
    storageBucket: "crwn-db-81504.appspot.com",
    messagingSenderId: "584585592039",
    appId: "1:584585592039:web:44731a0307cfe85cd47642",
    measurementId: "G-T83DV3P72W"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

// export const auth1 = auth;
// export const firestore1 = firestore;

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account' });

// export const signInWithGoogle = () => signInWithPopup(provider);

// export default firebase;

const auth = getAuth();

export const signInWithGoogle = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    console.log(6);
    
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    
    // ...
  }).catch((error) => {
    console.log(7);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error:"+ errorCode +" : "+ errorMessage);
    // The email of the user's account used.
  })
}