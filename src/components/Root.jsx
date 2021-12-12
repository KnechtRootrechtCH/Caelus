import React from 'react';
import { observer } from "mobx-react"

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { StoreContext } from '../stores/StoreContext';
import Header from './Header';
import Initializing from './Initializing';
import Navigation from './Navigation';
import Routing from './Routing';

const Root = observer (
  class Root extends React.Component {

    render() {
      const theme = this.context.theme.theme;

      if (!this.context.authentication.initialized || !this.context.theme.initialized) {
        return (
          <Initializing />
        )
      }
      else {
        return (
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Navigation />
            <Container component="main">
              <Routing />
            </Container>
          </ThemeProvider>
        )
      }
    }
  }
)


Root.contextType = StoreContext;
export default Root;