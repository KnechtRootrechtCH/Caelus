import { firebaseConfig } from './firebaseConfig';
import { initializeApp }  from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// import auth from 'firebase/auth'; // eslint-disable-line no-unused-vars
// import store from 'firebase/firestore'; // eslint-disable-line no-unused-vars
// import func from 'firebase/functions'; // eslint-disable-line no-unused-vars

const fire = initializeApp(firebaseConfig)
const analytics = getAnalytics(fire);
//const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
//const firestore = firebase.firestore();
//const functions = firebase.functions();
//const settings = {};
//firestore.settings(settings);

export {fire, analytics};
// export {fire, fireAnalytics, googleAuthProvider, firestore, functions};
