import { createContext } from "react"
import { makeAutoObservable } from 'mobx';
import { AuthenticationStore } from './AuthenticationStore'
import { ThemeStore } from "./ThemeStore";
import { fire } from '../config/firebase';

export class RootStore {
  drawer = true;
  drawerMobile = false;
  drawerWidth = 240;

  constructor(systemPrefersDark) {
    makeAutoObservable(this, { rootStore: false });
    this.authentication = new AuthenticationStore(this);
    this.theme = new ThemeStore(this, systemPrefersDark);
    this.fire = fire;
  }

  toggleDrawer() {
    this.drawer = !this.drawer;
  }

  toggleDrawerMobile() {
    this.drawerMobile = !this.drawerMobile;
  }

  setDrawer(state) {
    this.drawer = state;
  }

  setDrawerMobile(state) {
    this.drawerMobile = state;
  }

  get initialized() {
    return this.authentication.initialized && this.theme.initialized;
  }
}

export const StoreContext = createContext(null);