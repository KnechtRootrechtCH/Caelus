import { createContext } from "react"
import { makeAutoObservable } from 'mobx';
import { AuthenticationStore } from './AuthenticationStore'

export class RootStore {
  test = 'Rootblubb';

  constructor() {
    makeAutoObservable(this, { rootStore: false });
    this.authentication = new AuthenticationStore(this);
  }
}

export const StoreContext = createContext(null);