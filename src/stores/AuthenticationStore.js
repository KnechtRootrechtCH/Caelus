import { makeAutoObservable } from 'mobx';
import { fire, auth } from '../config/firebase';

export class AuthenticationStore {
  initialized = false;
  user = null;
  isAdministrator = false;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.init();
  }

  init() {
    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false,
      },
    };
    fire.auth().onAuthStateChanged((user) => {
      this.onAuthStateChanged(user);
    });
  }

  onAuthStateChanged(user) {
    this.user = user;
    this.initialized = true;
    if (this.isAuthenticated) {
      this.rootStore.initFirebase();
    }
  }

  checkPrivilages(administrators) {
    this.isAdministrator = administrators?.includes(this.uid);
  }

  signOut() {
    console.debug('AuthenticationStore.signOut()', this.user);
    fire.auth().signOut().then((result) => {
        console.debug('AuthenticationStore.signOut() : successfull');
    }, (error) => {
        console.error('AuthenticationStore.signOut() : failed!', error);
    });
  }

  get uid() {
    return this.user !== null ? this.user.uid : null;
  }

  get isAuthenticated() {
    return this.uid !== null
  }
}