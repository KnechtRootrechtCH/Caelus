import { createContext } from "react"
import { makeAutoObservable } from 'mobx';
import { AuthenticationStore } from './AuthenticationStore'
import { ThemeStore } from "./ThemeStore";
import { fire } from '../config/firebase';

export class RootStore {
  drawer = false;

  constructor() {
    makeAutoObservable(this, { rootStore: false });
    this.authentication = new AuthenticationStore(this);
    this.theme = new ThemeStore(this);
    this.fire = fire;
  }

  toggleDrawer() {
    console.debug('RootStore.toggleDrawer');
    this.setDrawer(!this.drawer);
  }

  setDrawer(state) {
    console.debug('RootStore.setDrawer', state);
    if (state === this.drawer) {
      return;
    }
    this.drawer = state;
  }
}

export const StoreContext = createContext(null);