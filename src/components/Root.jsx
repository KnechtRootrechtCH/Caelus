import React from 'react';
import { observer } from "mobx-react"
import { useContext} from "react"
import { StoreContext } from '../stores/StoreContext';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { ApplicationHeader } from './navigation/ApplicationHeader';
import Initializing from './Initializing';
import { NavigationDrawer } from './navigation/NavigationDrawer';
import { Router } from './Router';

export const Root = observer (() => {
  const context = useContext(StoreContext);
  const theme = context.theme.theme;

  if (!context.initialized) {
    return (
      <Initializing />
    )
  }
  else {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApplicationHeader />
        <NavigationDrawer />
          <Router />
      </ThemeProvider>
    )
  }
})