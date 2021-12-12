import { makeAutoObservable } from 'mobx';
// import { auth } from '../config/firebase';
import { fire, auth } from '../config/firebase';

export class AuthenticationStore {
  initialized = false;
  user = null;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.init();
  }

  init() {
    console.debug('AuthenticationStore.init()');
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
    console.debug('AuthenticationStore.onAuthStateChanged()', user);
    this.user = user;
  }

  get uid() {
    return this.user !== null ? this.user.uid : null;
  }

  get authenticated() {
    return this.uid !== null
  }
}