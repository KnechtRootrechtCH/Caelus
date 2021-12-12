import { makeAutoObservable } from 'mobx';
// import {fire, firestore, googleAuthProvider} from '../config/fire'

export class AuthenticationStore {
  initialized = false;
  user = null;
  test = 'World';

  constructor() {
    makeAutoObservable(this);
  }
}