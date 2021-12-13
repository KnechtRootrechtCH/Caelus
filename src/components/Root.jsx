import React from 'react';
import { observer } from "mobx-react"

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { StoreContext } from '../stores/StoreContext';
import ApplicationHeader from './navigation/ApplicationHeader';
import Initializing from './Initializing';
import NavigationDrawer from './navigation/NavigationDrawer';
import Routing from './Routing';

const Root = observer (
  class Root extends React.Component {

    render() {
      const theme = this.context.theme.theme;

      if (!this.context.initialized) {
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
            <Container
              component="main"
              maxWidth="xl"
              sx={{ paddingLeft: { xs: '24px', lg: '264px' }, width: '100%' }}
              >
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