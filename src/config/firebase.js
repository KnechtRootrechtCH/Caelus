import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const fire = firebase.initializeApp(firebaseConfig).firebase;
const auth = firebase.auth;
const firestore = firebase.firestore();
// const auth = getAuth();

// const ui = new firebaseui.auth.AuthUI(auth);
// const analytics = getAnalytics(fire);
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
//const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
//const firestore = firebase.firestore();
//const functions = firebase.functions();
//const settings = {};
//firestore.settings(settings);

export {fire, auth, firestore};
// export {fire, fireAnalytics, googleAuthProvider, firestore, functions};
