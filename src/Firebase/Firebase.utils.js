// import firebase from 'firebase/app';
// import 'firebase/auth';
import {doc , getFirestore, getDoc, setDoc } from '@firebase/firestore';

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

const db = getFirestore();

export const createUserProfileDocumentInFirestore = async ( userAuth , additionalData ) => {
    
    if(! userAuth ) return;

    // CRUD is performed only on documentReference obj, not on snapShotReference obj
    const userRef = doc(db , `users/${userAuth.uid}`);

    const snapShot = await getDoc(userRef);

    const { displayName , email } = userAuth;
    const createdAt = new Date();

    if(!snapShot.data()){
        try {
            console.log('creating new user')
            await setDoc(userRef ,  {
                displayName,
                email,
                createdAt,
                ...additionalData
            } )
        } catch (error) {
            console.log('Error message :' , error.message);
        }       
    }
    return userRef;
}

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
    
    
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    
    // ...
  }).catch((error) => {
   
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error:"+ errorCode +" : "+ errorMessage);
    // The email of the user's account used.
  })
}