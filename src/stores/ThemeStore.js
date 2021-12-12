import { makeAutoObservable } from 'mobx';
import { createTheme } from '@mui/material/styles'

import {red, pink, purple, deepPurple} from '@mui/material/colors';
import {indigo, blue, lightBlue, cyan} from '@mui/material/colors';
import {teal, green, lightGreen, lime} from '@mui/material/colors';
import {yellow, amber, orange, deepOrange} from '@mui/material/colors';

export class ThemeStore {
  colors = [
    red, pink, purple, deepPurple,
    indigo, blue, lightBlue, cyan,
    teal, green, lightGreen, lime,
    yellow, amber, orange, deepOrange ];
  primary = red;
  secondary = blue;
  mode = 'dark';
  theme = null;

  initialized = false;
  theme = null;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
    this.init();
  }

  init() {
    console.debug('ThemeStore.init()');
    this.applyTheme();
    this.initialized = true;
  }

  applyTheme() {
    this.theme = createTheme({
      palette: {
          mode: this.mode,
          primary: this.primary,
          secondary: this.secondary,
      }
    });
    this.initialized = true;
  }
}