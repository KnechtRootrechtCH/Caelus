import { createContext } from "react"
import { makeAutoObservable } from 'mobx';
import { AuthenticationStore } from './AuthenticationStore'
import { fire } from '../config/firebase';

export class RootStore {
  constructor() {
    makeAutoObservable(this, { rootStore: false });
    this.authentication = new AuthenticationStore(this);
    this.fire = fire;
  }
}

export const StoreContext = createContext(null);