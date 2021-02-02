
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD5_2MIcEFlJ1D3BsqtrApWt3PGEaOS8bU",
  authDomain: "udemy-react-course-7b37f.firebaseapp.com",
  projectId: "udemy-react-course-7b37f",
  storageBucket: "udemy-react-course-7b37f.appspot.com",
  messagingSenderId: "112836877793",
  appId: "1:112836877793:web:cb57e727263ca28abe46a0",
  measurementId: "G-25SM3M91GZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;