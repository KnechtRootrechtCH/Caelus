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
  primary = indigo;
  secondary = orange;
  mode = 'dark';
  theme = null;

  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setDarkMode(darkMode) {
    this.mode = darkMode ? 'dark' : 'light';
  }

  toggleDarkMode() {
    this.setDarkMode(!this.darkMode);
  }

  applyTheme() {
    this.theme = createTheme({
      palette: {
          mode: this.mode,
          primary: this.primary,
          secondary: this.secondary,
      }
    });
  }

  get darkMode() {
    return this.mode === 'dark';
  }

  get initialized() {
    return this.theme;
  }
}